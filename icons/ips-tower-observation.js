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
export const IpsTowerObservationIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-tower-observation ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tower-observation" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144l0 80c0 17.7-14.3 32-32 32l-4.9 0 32 192 68.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-95.5 0c-.4 0-.8 0-1.1 0l-254.8 0c-.4 0-.8 0-1.1 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 32-192-4.9 0c-17.7 0-32-14.3-32-32l0-80c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9l160-80zM314.5 448L256 399.2 197.5 448l117 0zM197.8 256l-4.7 28.3L256 336.8l62.9-52.5L314.2 256l-116.5 0zm-13.9 83.2l-11.2 67L218.5 368l-34.6-28.8zM293.5 368l45.8 38.1-11.2-67L293.5 368zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" })] })));
};
export default IpsTowerObservationIcon;
//# sourceMappingURL=ips-tower-observation.js.map