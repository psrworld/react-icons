var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsCodePullRequestDraftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-code-pull-request-draft ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-code-pull-request-draft" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M56 80a24 24 0 1 1 48 0A24 24 0 1 1 56 80zm56 73.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3l0 205.3C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-205.3zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm312-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM416 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" })] })));
};
export default IpsCodePullRequestDraftIcon;
//# sourceMappingURL=ips-code-pull-request-draft.js.map