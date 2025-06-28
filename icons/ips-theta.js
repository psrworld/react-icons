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
export const IpsThetaIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-theta ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-theta" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 256c0-51 15.9-96 40.2-127.6C128.5 96.9 159.8 80 192 80s63.5 16.9 87.8 48.4C304.1 160 320 205 320 256s-15.9 96-40.2 127.6C255.5 415.1 224.2 432 192 432s-63.5-16.9-87.8-48.4C79.9 352 64 307 64 256zM192 16C135.8 16 87.1 45.7 53.5 89.4C19.9 133.1 0 192.1 0 256s19.9 122.9 53.5 166.6C87.1 466.3 135.8 496 192 496s104.9-29.7 138.5-73.4C364.1 378.9 384 319.9 384 256s-19.9-122.9-53.5-166.6C296.9 45.7 248.2 16 192 16zM128 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0z" })] })));
};
export default IpsThetaIcon;
//# sourceMappingURL=ips-theta.js.map