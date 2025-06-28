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
export const IpsBookCircleArrowRightIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-book-circle-arrow-right ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-book-circle-arrow-right" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 10.8 0c-23.3-16.4-42.5-38.4-55.6-64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l224.7 0c-.5-5.3-.7-10.6-.7-16c0-80.6 54.1-148.5 128-169.4L448 32c0-17.7-14.3-32-32-32L384 0 96 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM492.7 300.7c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L521.4 384 432 384c-8.8 0-16-7.2-16-16s7.2-16 16-16l89.4 0-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6z" })] })));
};
export default IpsBookCircleArrowRightIcon;
//# sourceMappingURL=ips-book-circle-arrow-right.js.map