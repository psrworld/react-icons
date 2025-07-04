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
export const IpsSnowmanHeadIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-snowman-head ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-snowman-head" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64C64 28.7 92.7 0 128 0L320 0c35.3 0 64 28.7 64 64l0 96-160 0L64 160l0-96zM330.2 192l85.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-25.7 0c16.3 28.2 25.7 61 25.7 96c0 59.8-27.4 113.3-70.3 148.5c-9.7 8-22.3 11.5-34.9 11.5l-173.7 0c-12.6 0-25.1-3.5-34.9-11.5C59.4 465.3 32 411.8 32 352c0-35 9.3-67.8 25.7-96L32 256c-17.7 0-32-14.3-32-32s14.3-32 32-32l85.8 0 212.3 0zM152 336a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM219.3 445.2c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l23.8-46.3c2.3-4.5 3.5-9.6 3.5-14.7c0-17.7-14.3-32.2-32-32.2s-32 14.5-32 32.2c0 5.1 1.2 10.2 3.5 14.7l23.8 46.3z" })] })));
};
export default IpsSnowmanHeadIcon;
//# sourceMappingURL=ips-snowman-head.js.map