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
export const IpsInterrobangIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-interrobang ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-interrobang" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M144 96c-35.3 0-64 28.7-64 64c0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2l0 1.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.4L128 176c0-17.7 14.3-32 32-32s32 14.3 32 32l0 53.4 18.6-12c18.3-11.8 29.4-32.1 29.4-53.8l0-3.6c0-35.3-28.7-64-64-64l-32 0zM120 440a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" })] })));
};
export default IpsInterrobangIcon;
//# sourceMappingURL=ips-interrobang.js.map