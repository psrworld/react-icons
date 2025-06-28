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
export const IpsBatteryBoltIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-battery-bolt ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-battery-bolt" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l92.2 0c-12.9-14.5-16.1-35.6-7.2-53.5l5.3-10.5L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l139.2 0 80-64L80 96zM464 352l-139.2 0-80 64L464 416c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80l-92.2 0c13 14.5 16.1 35.6 7.2 53.5L373.7 160l90.3 0c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16zM346.1 115.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L193.7 376.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z" })] })));
};
export default IpsBatteryBoltIcon;
//# sourceMappingURL=ips-battery-bolt.js.map