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
export const IpsFaceSmirkingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-face-smirking ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-smirking" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm96-48c0 8.8 7.2 16 16 16l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-64 0c-8.8 0-16 7.2-16 16zM375.8 338.6c1.5-8.7-4.4-17-13.2-18.4s-17 4.4-18.4 13.2l-.2 1.2c-3.2 19.3-19.9 33.4-39.5 33.4L192 368c-8.8 0-16 7.2-16 16s7.2 16 16 16l112.6 0c35.2 0 65.2-25.4 71-60.2l.2-1.2zM288 208c0 8.8 7.2 16 16 16l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-64 0c-8.8 0-16 7.2-16 16z" })] })));
};
export default IpsFaceSmirkingIcon;
//# sourceMappingURL=ips-face-smirking.js.map