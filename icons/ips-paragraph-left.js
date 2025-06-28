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
export const IpsParagraphLeftIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-paragraph-left ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-paragraph-left" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 0 144 0C82.1 0 32 50.1 32 112s50.1 112 112 112l16 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 32 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM128 384l0-46.4c0-9.7-7.9-17.6-17.6-17.6c-4.2 0-8.2 1.5-11.3 4.2l-93 78.7C2.2 406.1 0 410.9 0 416s2.2 9.9 6.1 13.2l93 78.7c3.2 2.7 7.2 4.2 11.3 4.2c9.7 0 17.6-7.9 17.6-17.6l0-46.4 224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0z" })] })));
};
export default IpsParagraphLeftIcon;
//# sourceMappingURL=ips-paragraph-left.js.map