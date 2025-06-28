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
export const IpsSprinklerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-sprinkler ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sprinkler" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M24 0a24 24 0 1 1 0 48A24 24 0 1 1 24 0zM0 128a24 24 0 1 1 48 0A24 24 0 1 1 0 128zM0 232a24 24 0 1 1 48 0A24 24 0 1 1 0 232zM64 72a24 24 0 1 1 48 0A24 24 0 1 1 64 72zm24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm360 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm24-80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM488 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM448 72a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-40-32a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 64c17.7 0 32 14.3 32 32l0 160 100.2 0c15.3 0 27.8 12.4 27.8 27.8c0 7.8-3.3 15.2-9 20.5L320 384l0 96c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-96-87-79.7c-5.7-5.3-9-12.7-9-20.5c0-15.3 12.4-27.8 27.8-27.8L224 256l0-160c0-17.7 14.3-32 32-32z" })] })));
};
export default IpsSprinklerIcon;
//# sourceMappingURL=ips-sprinkler.js.map