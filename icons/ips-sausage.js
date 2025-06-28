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
export const IpsSausageIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-sausage ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sausage" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 160c0-42 26.9-77.7 64.5-90.7L369.2 27.4c-.8-2.2-1.2-4.6-1.2-7C368 9.1 377.1 0 388.4 0l55.2 0C454.9 0 464 9.1 464 20.4c0 2.4-.4 4.7-1.2 7L447.5 69.3C485.1 82.3 512 118 512 160c0 194.4-157.6 352-352 352c-42 0-77.7-26.9-90.7-64.5L27.4 462.8c-2.2 .8-4.6 1.2-7 1.2C9.1 464 0 454.9 0 443.6l0-55.2C0 377.1 9.1 368 20.4 368c2.4 0 4.7 .4 7 1.2l41.9 15.2C82.3 346.9 118 320 160 320c88.4 0 160-71.6 160-160zm80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 114.9-93.1 208-208 208c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240-107.5 240-240z" })] })));
};
export default IpsSausageIcon;
//# sourceMappingURL=ips-sausage.js.map