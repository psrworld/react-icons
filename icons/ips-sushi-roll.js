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
export const IpsSushiRollIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-sushi-roll ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sushi-roll" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M448 368l0-224C448 82.1 347.7 32 224 32S0 82.1 0 144L0 368c0 61.9 100.3 112 224 112s224-50.1 224-112zM308.2 198.4c-24.5 6.1-53.3 9.6-84.2 9.6c-40.7 0-77.8-6.1-106-16.1c14.8-14.8 32.8-26.7 51.4-36.1c20.5-10.3 40.9-17 56.9-20.8c18.2 27.3 46.6 49.9 82 63.4zM205.1 80.4c.8 6 2.1 11.9 3.8 17.7c-17.3 4.7-37.4 11.8-57.5 21.9c-24.5 12.3-49.9 29.4-70.3 52.7C70.2 164.1 64 154.4 64 144c0-32.8 61.7-59.8 141.1-63.6zm40.7 .2c78 4.3 138.2 31 138.2 63.4c0 9.8-5.5 19.1-15.4 27.4c-69.5-5.5-113.5-48.4-122.8-90.8z" })] })));
};
export default IpsSushiRollIcon;
//# sourceMappingURL=ips-sushi-roll.js.map