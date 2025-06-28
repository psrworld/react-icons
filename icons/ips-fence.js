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
export const IpsFenceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-fence ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-fence" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M76.8 38.4C73.8 34.4 69 32 64 32s-9.8 2.4-12.8 6.4L6.4 98.1C2.2 103.7 0 110.4 0 117.3L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-32 32 0 0-64-32 0 0-128 32 0 0-64-32 0 0-42.7c0-6.9-2.2-13.7-6.4-19.2L76.8 38.4zm192 0c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4L198.4 98.1c-4.2 5.5-6.4 12.3-6.4 19.2L192 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-32 32 0 0-64-32 0 0-128 32 0 0-64-32 0 0-42.7c0-6.9-2.2-13.7-6.4-19.2L268.8 38.4zM448 32c-5 0-9.8 2.4-12.8 6.4L390.4 98.1c-4.2 5.5-6.4 12.3-6.4 19.2L384 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-330.7c0-6.9-2.2-13.7-6.4-19.2L460.8 38.4c-3-4-7.8-6.4-12.8-6.4z" })] })));
};
export default IpsFenceIcon;
//# sourceMappingURL=ips-fence.js.map