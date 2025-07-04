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
export const IpsCauldronIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-cauldron ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cauldron" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm112 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM35.1 224C16.5 257 0 297.1 0 334.4c0 37.4 11.9 69.4 32 95.5L32 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-15c40.4 25.5 91.8 39 144 39s103.6-13.5 144-39l0 15c0 13.3 10.7 24 24 24s24-10.7 24-24l0-58.1c20.1-26.1 32-58.1 32-95.5c0-37.3-16.5-77.4-35.1-110.4l3.1 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0-144 0L80 160l-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l3.1 0z" })] })));
};
export default IpsCauldronIcon;
//# sourceMappingURL=ips-cauldron.js.map