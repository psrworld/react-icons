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
export const IpsFaceThermometerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-face-thermometer ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-thermometer" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M544 256c0 141.4-114.6 256-256 256S32 397.4 32 256S146.6 0 288 0C400 0 495.2 72 530 172.2c-14-4.1-29.8-.7-41 10.2l-150.8 146c-14.9-5.2-31.6-8.4-50.2-8.4c-55.1 0-93.8 27.9-116.1 53.5c-5.8 6.7-5.1 16.8 1.6 22.6s16.8 5.1 22.6-1.6C214 373.8 244.6 352 288 352s74 21.8 91.9 42.5c5.8 6.7 15.9 7.4 22.6 1.6c5.2-4.5 6.8-11.6 4.5-17.7l9.4-9-24.8-24.8c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l25.1 25.1 15.3-14.8-25.4-25.4c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l25.7 25.7 15.3-14.8-26-26c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l26.3 26.3L514.1 275l-26.6-26.6c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l26.9 26.9 12.5-12c.1 3.2 .2 6.4 .2 9.6zM240.4 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsFaceThermometerIcon;
//# sourceMappingURL=ips-face-thermometer.js.map