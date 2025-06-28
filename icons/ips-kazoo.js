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
export const IpsKazooIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-kazoo ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-kazoo" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M514 128l94 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-94 0c-19.8 10.2-42.2 16-66 16s-46.3-5.8-66-16l-158 0c-3 0-6-.4-9-1.3l-192-56C9.4 322.7 0 310.2 0 296l0-80c0-14.2 9.4-26.7 23-30.7l192-56c2.9-.8 5.9-1.3 9-1.3l158 0c19.8-10.2 42.2-16 66-16s46.3 5.8 66 16zm30 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM427.3 212.7L448 233.4l20.7-20.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L470.6 256l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L448 278.6l-20.7 20.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L425.4 256l-20.7-20.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0z" })] })));
};
export default IpsKazooIcon;
//# sourceMappingURL=ips-kazoo.js.map