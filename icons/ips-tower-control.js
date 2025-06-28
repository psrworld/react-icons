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
export const IpsTowerControlIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-tower-control ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tower-control" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M184 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l16 0 0 48-40 0c-17.7 0-32 14.3-32 32l-85.4 0C16 128-3.2 153.4 4.1 179L44.5 320.2C28.5 321.9 16 335.5 16 352c0 17.7 14.3 32 32 32l32 0 0 96c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-96 32 0c17.7 0 32-14.3 32-32c0-16.5-12.5-30.1-28.5-31.8L443.9 179c7.3-25.6-11.9-51-38.5-51L320 128c0-17.7-14.3-32-32-32l-40 0 0-48 16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L224 0 184 0zM128 192l0 128-17 0c-.1-.3-.1-.5-.2-.8L74.4 192l53.6 0zm48 128l0-128 96 0 0 128-96 0zM320 192l53.6 0L337.2 319.2l-.1 .3-.1 .5-17 0 0-128z" })] })));
};
export default IpsTowerControlIcon;
//# sourceMappingURL=ips-tower-control.js.map