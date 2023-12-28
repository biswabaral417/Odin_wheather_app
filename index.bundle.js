(() => {
  "use strict";
  var e = {
      122: (e, t, n) => {
        n.d(t, { Z: () => p });
        var o = n(537),
          r = n.n(o),
          i = n(645),
          a = n.n(i)()(r());
        a.push([
          e.id,
          "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n}\n\n._hidden {\n  display: none !important;\n}\n\n._visible {\n  display: block !important;\n}\n\n#currentconditionsinfo {\n  color: white;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n#location,\n#date,\n#time,\n#currenttempurature {\n  color: white;\n}\n\n#currenttempurature {\n  font-size: 40px;\n  font-weight: 900;\n}\n\n#top {\n  display: flex;\n  color: white;\n  justify-content: space-between;\n}\n\n#hourly,#week {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n#hourly::-webkit-scrollbar {\n  display: none;\n\n}\n\n.phtime,\n.phtemp,.pwday,.pwtemp {\n  width: 100px;\n  margin: 10px;\n}\n.phtemp,.pwtemp{\n  font-size: 25px;\n}\n\n#bottom {\n  margin-top: auto;\n}\n\nbody {\n  height: 100dvh;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#content {\n  padding: 30px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n#feels-like,#humidity,#wind_kph,#chance_of_rain{\n  font-size: 25px;\n}\n#location-search-btn{\n  all: unset;\n  width: 40px;\n  height: 40px;\n  margin-left: 10px;\n  cursor: pointer;\n}\n#location-search{\n  all: unset;\n  border-bottom: 2px solid white;\n  color: white;\n  font-size: 20px;\n}\n.bi-search{\n  height: 30px;\n  width: 30px;\n}\n#showhoursbtn,#showweeksbtn{\n  all: unset;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: 5px;\n}\n#showhoursbtn:hover,#showweeksbtn:hover{\n  color: rgb(167, 165, 165);\n  border: 1px solid rgb(167, 165, 165);\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/assets/css/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,aAAa;;AAEf;;AAEA;;EAEE,YAAY;EACZ,YAAY;AACd;AACA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;AACA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,UAAU;EACV,8BAA8B;EAC9B,YAAY;EACZ,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,oCAAoC;AACtC",
            sourcesContent: [
              "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: white;\n}\n\n._hidden {\n  display: none !important;\n}\n\n._visible {\n  display: block !important;\n}\n\n#currentconditionsinfo {\n  color: white;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n#location,\n#date,\n#time,\n#currenttempurature {\n  color: white;\n}\n\n#currenttempurature {\n  font-size: 40px;\n  font-weight: 900;\n}\n\n#top {\n  display: flex;\n  color: white;\n  justify-content: space-between;\n}\n\n#hourly,#week {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n#hourly::-webkit-scrollbar {\n  display: none;\n\n}\n\n.phtime,\n.phtemp,.pwday,.pwtemp {\n  width: 100px;\n  margin: 10px;\n}\n.phtemp,.pwtemp{\n  font-size: 25px;\n}\n\n#bottom {\n  margin-top: auto;\n}\n\nbody {\n  height: 100dvh;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#content {\n  padding: 30px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n#feels-like,#humidity,#wind_kph,#chance_of_rain{\n  font-size: 25px;\n}\n#location-search-btn{\n  all: unset;\n  width: 40px;\n  height: 40px;\n  margin-left: 10px;\n  cursor: pointer;\n}\n#location-search{\n  all: unset;\n  border-bottom: 2px solid white;\n  color: white;\n  font-size: 20px;\n}\n.bi-search{\n  height: 30px;\n  width: 30px;\n}\n#showhoursbtn,#showweeksbtn{\n  all: unset;\n  padding: 10px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin: 5px;\n}\n#showhoursbtn:hover,#showweeksbtn:hover{\n  color: rgb(167, 165, 165);\n  border: 1px solid rgb(167, 165, 165);\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const p = a;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, r, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (o)
                for (var p = 0; p < this.length; p++) {
                  var c = this[p][0];
                  null != c && (a[c] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var d = [].concat(e[s]);
                (o && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  r &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = r))
                      : (d[4] = "".concat(r))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o,
                ),
              i = "/*# ".concat(r, " */");
            return [t].concat([i]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var i = {}, a = [], p = 0; p < e.length; p++) {
            var c = e[p],
              s = o.base ? c[0] + o.base : c[0],
              d = i[s] || 0,
              l = "".concat(s, " ").concat(d);
            i[s] = d + 1;
            var A = n(l),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== A) t[A].references++, t[A].updater(u);
            else {
              var h = r(u, o);
              (o.byIndex = p),
                t.splice(p, 0, { identifier: l, updater: h, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var i = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var p = n(i[a]);
              t[p].references--;
            }
            for (var c = o(e, r), s = 0; s < i.length; s++) {
              var d = n(i[s]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            i = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      37: (e) => {
        var t,
          n =
            ((t = []),
            function (e, n) {
              return (t[e] = n), t.filter(Boolean).join("\n");
            });
        function o(e, t, o, r) {
          var i;
          if (o) i = "";
          else {
            (i = ""),
              r.supports && (i += "@supports (".concat(r.supports, ") {")),
              r.media && (i += "@media ".concat(r.media, " {"));
            var a = void 0 !== r.layer;
            a &&
              (i += "@layer".concat(
                r.layer.length > 0 ? " ".concat(r.layer) : "",
                " {",
              )),
              (i += r.css),
              a && (i += "}"),
              r.media && (i += "}"),
              r.supports && (i += "}");
          }
          if (e.styleSheet) e.styleSheet.cssText = n(t, i);
          else {
            var p = document.createTextNode(i),
              c = e.childNodes;
            c[t] && e.removeChild(c[t]),
              c.length ? e.insertBefore(p, c[t]) : e.appendChild(p);
          }
        }
        var r = { singleton: null, singletonCounter: 0 };
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = r.singletonCounter++,
            n = r.singleton || (r.singleton = e.insertStyleElement(e));
          return {
            update: function (e) {
              o(n, t, !1, e);
            },
            remove: function (e) {
              o(n, t, !0, e);
            },
          };
        };
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { id: o, exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.p = "/Odin_wheather_app/"),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        o = n(37),
        r = n.n(o),
        i = n(569),
        a = n.n(i),
        p = n(565),
        c = n.n(p),
        s = n(216),
        d = n.n(s),
        l = n(122),
        A = {};
      (A.setAttributes = c()),
        (A.insert = a().bind(null, "head")),
        (A.domAPI = r()),
        (A.insertStyleElement = d()),
        t()(l.Z, A),
        l.Z && l.Z.locals && l.Z.locals;
      const u = ({ prop: e, parentId: t, text: n }) => {
          const o = document.createElement(e.trim().match(/^\s*(\w+)?/)[0]);
          return (
            (o.id = e.match(/\b\w+(?:-\w+)?(?:-\w+)?\b/g)[1]),
            e.match(/\.\w+/g) &&
              e.match(/\.\w+/g).forEach((e) => {
                o.classList.add(e.substring(1));
              }),
            e.match(/href=\s*'([^']*)'/) &&
              o.setAttribute("href", e.match(/href=\s*'([^']*)'/)[1]),
            t && document.getElementById(t).appendChild(o),
            n && (o.textContent = n),
            e.match(/placeholder='[^']*'/) &&
              o.setAttribute(
                "placeholder",
                e.match(/placeholder='([^']*)'/)[1],
              ),
            e.match(/value='[^']*'/) &&
              o.setAttribute("value", e.match(/value='([^']*)'/)[1]),
            e.match(/type='[^']*'/) &&
              o.setAttribute("type", e.match(/type='([^']*)'/)[1]),
            o
          );
        },
        h = n.p + "81d89fd018c81a6149fc.jpg",
        m = async (e) => {
          let t = await (async (e) => {
            const t = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=a6abcc233d724489bce110310232612&q=${e}&days=8`,
              { mode: "cors" },
            );
            return await t.json();
          })(e);
          (document.getElementById("currentconditionsinfo").textContent =
            t.current.condition.text),
            (document.getElementById("currenttempurature").textContent =
              t.current.temp_c + " ° c "),
            (document.getElementById("weatherInfo-icon").src =
              t.current.condition.icon),
            (document.getElementById("location").textContent = e),
            (document.getElementById("feels-like").textContent =
              t.current.feelslike_c + " ° c "),
            (document.getElementById("humidity").textContent =
              t.current.humidity + "g.m-3,"),
            (document.getElementById("wind_kph").textContent =
              t.current.wind_kph + "kph"),
            (document.getElementById("chance_of_rain").textContent +=
              t.forecast.forecastday[0].day.daily_chance_of_rain + "%");
          for (let e = 0; e < 24; e++) {
            let n =
                e +
                Number(new Date().toString().split(" ")[4].split(":")[0]) +
                1,
              o = t.forecast.forecastday[0].hour,
              r = t.forecast.forecastday[1].hour;
            void 0 !== o[n]
              ? ((document.getElementById(`time${e}`).textContent =
                  n > 12 ? n - 12 + " pm" : `${n} am`),
                (document.getElementById(`temp${e}`).textContent =
                  `${o[n].temp_c}  ° c`),
                (document.getElementById(`weatherInfo-icon_hour${e}`).src =
                  o[n].condition.icon))
              : ((document.getElementById(`time${e}`).textContent =
                  n - 24 > 12 ? n - 24 - 12 + " pm" : n - 24 + " am"),
                (document.getElementById(`temp${e}`).textContent = `${
                  r[n - 24].temp_c
                }  ° c`),
                (document.getElementById(`weatherInfo-icon_hour${e}`).src =
                  r[n - 24].condition.icon));
          }
          t.forecast.forecastday.forEach((e, t) => {
            f(e.date) &&
              ((document.getElementById("weekday" + (t - 1)).textContent =
                new Date(e.date).toString().split(" ")[0]),
              (document.getElementById("weekdaytemp" + (t - 1)).textContent =
                `${e.day.avgtemp_c} ° c`),
              (document.getElementById("weatherInfo-icon_week" + (t - 1)).src =
                e.day.condition.icon));
          });
        },
        f = (e) => {
          const t = new Date().toISOString().split("T")[0];
          return (
            e.split("-")[0] > t.split("-")[0] ||
            e.split("-")[1] > t.split("-")[1] ||
            e.split("-")[2] > t.split("-")[2]
          );
        };
      navigator.geolocation.getCurrentPosition(
        () => {
          m(Intl.DateTimeFormat().resolvedOptions().timeZone);
        },
        (e) => {
          console.log(e);
        },
      ),
        (document.body.style.backgroundImage = `url("${h}")`),
        u({ prop: "div#top", parentId: "content" }),
        u({ prop: "div#top-left", parentId: "top" }),
        u({ prop: "div#currentconditions", parentId: "top-left" }),
        u({ prop: "p#currentconditionsinfo", parentId: "currentconditions" }),
        u({ prop: "p#location", parentId: "currentconditions" }),
        u({
          prop: "p#date",
          parentId: "currentconditions",
          text: `${new Date().toString().split(" ")[0]} ${
            new Date().toString().split(" ")[1]
          } ${new Date().toString().split(" ")[2]} ${
            new Date().toString().split(" ")[3]
          }`,
        }),
        u({
          prop: "p#time",
          parentId: "currentconditions",
          text: `${new Date().toString().split(" ")[4]}`,
        }),
        setInterval(() => {
          document.getElementById("time").textContent = new Date()
            .toString()
            .split(" ")[4];
        }, 1e3),
        u({ prop: "p#currenttempurature", parentId: "currentconditions" }),
        u({ prop: "img#weatherInfo-icon", parentId: "currentconditions" }),
        u({ prop: "div#searches", parentId: "currentconditions" }),
        u({ prop: "input#location-search", parentId: "searches" }),
        u({ prop: "button#location-search-btn", parentId: "searches" }),
        u({ prop: "div#top-right", parentId: "top" }),
        u({ prop: "div#weather-feels-like", parentId: "top-right" }),
        u({
          prop: "p#feels-like_txt",
          parentId: "weather-feels-like",
          text: "feels like",
        }),
        u({ prop: "p#feels-like", parentId: "weather-feels-like" }),
        u({ prop: "div#weather-humidity", parentId: "top-right" }),
        u({
          prop: "p#humidity_txt",
          parentId: "weather-humidity",
          text: "humidity",
        }),
        u({ prop: "p#humidity", parentId: "weather-humidity" }),
        u({ prop: "div#weather-wind_kph", parentId: "top-right" }),
        u({
          prop: "p#wind_kph_txt",
          parentId: "weather-wind_kph",
          text: "wind speed",
        }),
        u({ prop: "p#wind_kph", parentId: "weather-wind_kph" }),
        u({ prop: "div#weather-chance_of_rain", parentId: "top-right" }),
        u({
          prop: "p#chance_of_rain_txt",
          parentId: "weather-chance_of_rain",
          text: "chance of rain",
        }),
        u({ prop: "p#chance_of_rain", parentId: "weather-chance_of_rain" }),
        u({ prop: "div#bottom", parentId: "content" });
      const w = u({
          prop: "button#showhoursbtn",
          parentId: "bottom",
          text: "hourly",
        }),
        y = u({
          prop: "button#showweeksbtn",
          parentId: "bottom",
          text: "daily",
        });
      (w.style.border = "1px solid white"),
        y.addEventListener("click", () => {
          (E.style.display = "flex"),
            (g.style.display = "none"),
            (w.style.border = ""),
            (y.style.border = "1px solid white");
        }),
        w.addEventListener("click", () => {
          (g.style.display = "flex"),
            (E.style.display = "none"),
            (y.style.border = ""),
            (w.style.border = "1px solid white");
        });
      const g = u({ prop: "div#hourly", parentId: "bottom" });
      for (let e = 0; e <= 24; e++)
        u({ prop: `div#hour${e}.hour`, parentId: "hourly" }),
          u({ prop: `p#time${e}.phtime`, parentId: `hour${e}` }),
          u({ prop: `p#temp${e}.phtemp`, parentId: `hour${e}` }),
          u({ prop: `img#weatherInfo-icon_hour${e}`, parentId: `hour${e}` });
      const E = u({ prop: "div#week", parentId: "bottom" });
      for (let e = 0; e <= 7; e++)
        u({ prop: `div#week${e}.week`, parentId: "week" }),
          u({ prop: `p#weekday${e}.pwday`, parentId: `week${e}` }),
          u({ prop: `p#weekdaytemp${e}.pwtemp`, parentId: `week${e}` }),
          u({ prop: `img#weatherInfo-icon_week${e}`, parentId: `week${e}` });
      E.style.display = "none";
      const b = document.getElementById("location-search-btn"),
        C = document.getElementById("location-search").value;
      let x = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      x.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
        x.setAttribute("width", "16"),
        x.setAttribute("height", "16"),
        x.setAttribute("fill", "white"),
        x.setAttribute("class", "bi bi-search"),
        x.setAttribute("viewBox", "0 0 16 16");
      const v = document.createElementNS("http://www.w3.org/2000/svg", "path");
      v.setAttribute(
        "d",
        "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
      ),
        x.appendChild(v),
        b.appendChild(x),
        b.addEventListener("click", async () => {
          m(C);
        });
    })();
})();
//# sourceMappingURL=index.bundle.js.map
