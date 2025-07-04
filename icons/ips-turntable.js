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
export const IpsTurntableIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-turntable ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-turntable" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM384 256A160 160 0 1 0 64 256a160 160 0 1 0 320 0zM512 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160.4c0 2.5-.6 4.9-1.7 7.2l-16.2 32.5c-11 .7-21.4 7-26.7 17.6l-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l16-32c5.3-10.6 4.2-22.7-1.9-31.9l16.2-32.4c3.3-6.7 5.1-14 5.1-21.5L512 112zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" })] })));
};
export default IpsTurntableIcon;
//# sourceMappingURL=ips-turntable.js.map