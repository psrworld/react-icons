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
export const IpsPool8BallIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-pool-8-ball ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pool-8-ball" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm384-64a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-80-48c0 11.5-4 22-10.7 30.2C304.8 184.5 312 199.4 312 216c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-16.6 7.2-31.5 18.7-41.8C212 166 208 155.5 208 144c0-26.5 21.5-48 48-48s48 21.5 48 48zm-48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" })] })));
};
export default IpsPool8BallIcon;
//# sourceMappingURL=ips-pool-8-ball.js.map