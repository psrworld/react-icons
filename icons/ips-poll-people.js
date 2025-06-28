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
export const IpsPollPeopleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-poll-people ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-poll-people" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 48A48 48 0 1 0 32 48a48 48 0 1 0 96 0zm448 80l-96 0 0-32 96 0 0 32zM272 32c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L272 32zM576 416l-224 0 0-32 224 0 0 32zM272 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-320 0zM64 128c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-32 0zm64 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM64 416c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-32 0z" })] })));
};
export default IpsPollPeopleIcon;
//# sourceMappingURL=ips-poll-people.js.map