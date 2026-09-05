/**
 * Old WordPress / first Next.js URLs → current canonical paths.
 * Used by middleware so Google Search Console 404s resolve to live pages.
 */

const EXACT: Record<string, string> = {
  "/testing-and-qa/security-qa": "/testing-and-qa/security-testing",
  "/testing-and-qa/manual-qa": "/testing-and-qa/manual-testing",
  "/testing-and-qa/test-automation": "/testing-and-qa/automation-testing",
  "/testing-and-qa/performance-testing-2": "/testing-and-qa/performance-testing",
  "/testing-and-qa/security-qa-3": "/testing-and-qa/security-testing",
  "/artificial-intelligence-ai": "/artificial-intelligence",
  "/artificial-intelligence-ai/intelligent-automation":
    "/automation-services/ai-workflow-automation",
  "/artificial-intelligence-ai/computer-vision":
    "/artificial-intelligence/computer-vision-solutions",
  "/machine-learning-ml": "/machine-learning",
  "/machine-learning-ml/model-monitoring": "/machine-learning/mlops",
  "/machine-learning-ml/predictive-models": "/machine-learning/predictive-analytics",
  "/design-ux": "/ui-ux-design",
  "/design-ux/design-audits-3": "/ui-ux-design/usability-testing",
  "/design-ux/ui-systems-1": "/ui-ux-design/design-systems",
  "/design-ux/prototyping-2": "/ui-ux-design/prototyping",
  "/data-security": "/cybersecurity",
  "/data-security/dashboards": "/data-business-intelligence/data-visualization",
  "/data-security/security-audits": "/cybersecurity/vulnerability-assessment",
  "/software-development/web-development": "/web-development",
  "/software-development/web-development-1": "/web-development",
  "/software-development/mobile-app-development-2": "/mobile-development",
  "/software-development/api-development-3":
    "/software-development/api-development-integration",
  "/software-development/custom-software-development-0":
    "/software-development/custom-software-development",
  "/custom-software-development": "/software-development/custom-software-development",
  "/cloud-and-devops": "/cloud-devops",
  "/cloud-devops/kubernetes-2": "/cloud-devops/kubernetes-deployment",
  "/cloud-devops/cloud-architecture-0": "/cloud-devops/aws-cloud-services",
  "/cloud-devops/observability-3": "/cloud-devops",
  "/cloud-devops/cicd-1": "/cloud-devops/ci-cd-pipeline-setup",
  "/solutions/ecommerce": "/solutions/ecommerce-platform",
  "/projects/clinic-erp-islamabad": "/projects/hospital-management-system",
  "/project": "/projects",
  "/project/project-for-marketing": "/projects",
  "/project/software-development": "/software-development",
  "/project/digital-product-design": "/ui-ux-design",
  "/our-services": "/software-development",
  "/services": "/software-development",
  "/services/app-development": "/mobile-development",
  "/services/technology-consult": "/software-development",
  "/case": "/case-study",
  "/home": "/",
  "/demos": "/projects",
  "/about-us": "/about",
  "/pricing": "/contact",
  "/feed": "/blog",
  "/blog/best-ai-tools-for-business-in": "/blog/best-ai-tools-for-business-in-2026",
};

const PARENT_ALIAS: Record<string, string> = {
  "artificial-intelligence-ai": "artificial-intelligence",
  "machine-learning-ml": "machine-learning",
  "design-ux": "ui-ux-design",
  "cloud-and-devops": "cloud-devops",
  "data-security": "cybersecurity",
};

const CHILD_ALIAS: Record<string, string> = {
  "security-qa": "security-testing",
  "manual-qa": "manual-testing",
  "test-automation": "automation-testing",
  "computer-vision": "computer-vision-solutions",
  "predictive-models": "predictive-analytics",
  "model-monitoring": "mlops",
  "design-audits": "usability-testing",
  "ui-systems": "design-systems",
  kubernetes: "kubernetes-deployment",
  cicd: "ci-cd-pipeline-setup",
  "cloud-architecture": "aws-cloud-services",
  "api-development": "api-development-integration",
};

function stripTrailingSlash(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function stripIndexHtml(pathname: string) {
  if (pathname.endsWith("/index.html")) {
    const next = pathname.slice(0, -"/index.html".length);
    return next === "" ? "/" : next;
  }
  if (pathname.endsWith(".html")) {
    return pathname.slice(0, -5);
  }
  return pathname;
}

function decodePathname(pathname: string) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function collapsePathname(pathname: string) {
  let path = decodePathname(pathname).toLowerCase();
  path = stripTrailingSlash(path);
  path = stripIndexHtml(path);
  return stripTrailingSlash(path);
}

function isWordPressInternal(path: string) {
  return (
    path === "/wp-admin" ||
    path.startsWith("/wp-admin/") ||
    path === "/wp-json" ||
    path.startsWith("/wp-json/") ||
    path === "/wp-includes" ||
    path.startsWith("/wp-includes/") ||
    path === "/wp-content" ||
    path.startsWith("/wp-content/")
  );
}

function lookupLegacy(path: string): string | null {
  if (path === "/*" || path === "*") {
    return "/";
  }

  if (isWordPressInternal(path)) {
    return "/";
  }

  if (path === "/feed" || path.startsWith("/feed/")) {
    return "/blog";
  }

  const legacyLocationPrefix = "/location/software-house-and-software-company-in-";
  if (path.startsWith(legacyLocationPrefix)) {
    return path.replace(
      "software-house-and-software-company-in-",
      "software-house-and-software-development-company-in-"
    );
  }

  if (EXACT[path]) {
    return EXACT[path];
  }

  const withoutNumber = path.replace(/-\d+$/, "");
  if (withoutNumber !== path && EXACT[withoutNumber]) {
    return EXACT[withoutNumber];
  }

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const [parent, child] = segments;
  const parentAlias = PARENT_ALIAS[parent];

  if (!child) {
    if (parent === "project") return "/projects";
    if (parent === "services") return "/software-development";
    if (parentAlias) return `/${parentAlias}`;
    return null;
  }

  const childBase = child.replace(/-\d+$/, "");

  if (parent === "artificial-intelligence-ai" && childBase === "intelligent-automation") {
    return "/automation-services/ai-workflow-automation";
  }
  if (parent === "data-security" && childBase === "dashboards") {
    return "/data-business-intelligence/data-visualization";
  }
  if (parent === "software-development" && childBase === "web-development") {
    return "/web-development";
  }
  if (parent === "software-development" && childBase === "mobile-app-development") {
    return "/mobile-development";
  }
  if (parent === "project") {
    if (childBase === "software-development") return "/software-development";
    if (childBase === "digital-product-design") return "/ui-ux-design";
    return "/projects";
  }
  if (parent === "services") {
    if (childBase === "app-development") return "/mobile-development";
    return "/software-development";
  }

  const mappedChild = CHILD_ALIAS[childBase] ?? (child !== childBase ? childBase : null);

  if (parentAlias) {
    return mappedChild ? `/${parentAlias}/${mappedChild}` : `/${parentAlias}`;
  }

  if (mappedChild) {
    return `/${parent}/${mappedChild}`;
  }

  return null;
}

export function resolveLegacyDestination(pathname: string): string | null {
  const decoded = decodePathname(pathname);
  const collapsed = collapsePathname(decoded);
  const mapped = lookupLegacy(collapsed);

  if (mapped) {
    return mapped;
  }

  if (collapsed !== decoded && collapsed !== stripTrailingSlash(decoded)) {
    return collapsed;
  }

  if (decoded.length > 1 && decoded.endsWith("/")) {
    return collapsed;
  }

  return null;
}

export const gsc404Examples = [
  "/testing-and-qa/security-qa",
  "/artificial-intelligence-ai/intelligent-automation",
  "/machine-learning-ml/model-monitoring",
  "/design-ux",
  "/testing-and-qa/manual-qa",
  "/data-security/dashboards",
  "/data-security/security-audits",
  "/software-development/web-development",
  "/testing-and-qa/test-automation",
  "/machine-learning-ml/predictive-models",
  "/artificial-intelligence-ai/computer-vision",
  "/custom-software-development/",
  "/project/project-for-marketing/",
  "/our-services/",
  "/testing-and-qa/security-qa-3",
  "/case/",
  "/testing-and-qa/performance-testing-2",
  "/home/",
  "/wp-admin/admin-ajax.php",
  "/demos",
  "/mobile-development",
  "/wp-json/",
  "/about-us/index.html",
  "/software-development/mobile-app-development-2",
  "/services",
  "/software-development/api-development-3",
  "/project",
  "/*",
  "/solutions/ecommerce",
  "/software-development/web-development-1",
  "/project/software-development/",
  "/services/app-development/",
  "/feed/",
  "/services/technology-consult/",
  "/design-ux/design-audits-3",
  "/design-ux/ui-systems-1",
  "/design-ux/prototyping-2",
  "/software-development/custom-software-development-0",
  "/cloud-devops/kubernetes-2",
  "/cloud-devops/cloud-architecture-0",
  "/cloud-devops/observability-3",
  "/cloud-devops/cicd-1",
  "/projects/clinic-erp-islamabad",
  "/ui-ux-design/",
  "/about-us/",
  "/cloud-and-devops",
  "/wp-includes/js/wp-emoji-release.min.js",
  "/wp-content/uploads/*",
  "/project/digital-product-design/index.html",
  "/team/index.html",
  "/pricing/index.html",
] as const;
