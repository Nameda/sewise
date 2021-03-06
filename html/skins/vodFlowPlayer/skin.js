(function (a) {
    a.SewisePlayerSkin = {
        version: "1.0.0"
    };
    a.SewisePlayer = a.SewisePlayer || {}
})(window);
(function (a) {
    a.SewisePlayer.IVodPlayer = a.SewisePlayer.IVodPlayer || {
        play: function () {}, pause: function () {}, stop: function () {}, seek: function () {}, changeClarity: function () {}, setVolume: function () {}, toPlay: function () {}, duration: function () {}, playTime: function () {}, type: function () {}, showTextTip: function () {}, hideTextTip: function () {}, muted: function () {}, bufferProgress: function () {}
    }
})(window);
(function (a) {
    a.SewisePlayerSkin.IVodSkin = a.SewisePlayerSkin.IVodSkin || {
        player: function () {}, started: function () {}, paused: function () {}, stopped: function () {}, seeking: function () {}, buffering: function () {}, bufferProgress: function () {}, loadedProgress: function () {}, loadedOpen: function () {}, loadedComplete: function () {}, programTitle: function () {}, duration: function () {}, playTime: function () {}, startTime: function () {}, loadSpeed: function () {}, initialClarity: function () {}, lang: function () {}, logo: function () {}, timeUpdate: function () {},
            volume: function () {}, clarityButton: function () {}, timeDisplay: function () {}, controlBarDisplay: function () {}, topBarDisplay: function () {}, customStrings: function () {}, customDatas: function () {}, fullScreen: function () {}, noramlScreen: function () {}, initialAds: function () {}, initialStatistics: function () {}
    }
})(window);
(function () {
    SewisePlayerSkin.Utils = {
        stringer: {
            time2FigFill: function (a) {
                var b, a = Math.floor(a);
                10 > a ? b = "0" + a : b = "" + a;
                return b
            }, secondsToHMS: function (a) {
                if (!(0 > a)) {
                    var b = this.time2FigFill(Math.floor(a / 3600)),
                        c = this.time2FigFill(a / 60 % 60),
                        a = this.time2FigFill(a % 60);
                    return b + ":" + c + ":" + a
                }
            }, secondsToMS: function (a) {
                if (!(0 > a)) {
                    var b = this.time2FigFill(a / 60),
                        a = this.time2FigFill(a % 60);
                    return b + ":" + a
                }
            }, dateToTimeString: function (a) {
                var b;
                b = a ? a : new Date;
                var a = b.getFullYear(),
                    c = b.getMonth() + 1,
                    k = b.getDate(),
                    i = this.time2FigFill(b.getHours()),
                    d = this.time2FigFill(b.getMinutes());
                b = this.time2FigFill(b.getSeconds());
                return a + "-" + c + "-" + k + " " + i + ":" + d + ":" + b
            }, dateToTimeStr14: function (a) {
                var b = a.getFullYear(),
                    c = this.time2FigFill(a.getMonth() + 1),
                    k = this.time2FigFill(a.getDate()),
                    i = this.time2FigFill(a.getHours()),
                    d = this.time2FigFill(a.getMinutes()),
                    a = this.time2FigFill(a.getSeconds());
                return b + c + k + i + d + a
            }, dateToStrHMS: function (a) {
                var b = this.time2FigFill(a.getHours()),
                    c = this.time2FigFill(a.getMinutes()),
                    a = this.time2FigFill(a.getSeconds());
                return b +
                    ":" + c + ":" + a
            }, dateToYMD: function (a) {
                var b = a.getFullYear(),
                    c = this.time2FigFill(a.getMonth() + 1),
                    a = this.time2FigFill(a.getUTCDate());
                return b + "-" + c + "-" + a
            }, hmsToDate: function (a) {
                var a = a.split(":"),
                    b = new Date;
                b.setHours(a[0] ? a[0] : 0, a[1] ? a[1] : 0, a[2] ? a[2] : 0);
                return b
            }, hmsToSeconds: function (a) {
                var b = a.split(":"),
                    a = b[0] ? parseInt(b[0]) : 0,
                    c = b[1] ? parseInt(b[1]) : 0,
                    b = b[2] ? parseInt(b[2]) : 0;
                return 3600 * a + 60 * c + b
            }
        },
        language: {
            zh_cn: {
                stop: "\u505c\u6b62\u64ad\u653e",
                pause: "\u6682\u505c",
                play: "\u64ad\u653e",
                fullScreen: "\u5168\u5c4f",
                normalScreen: "\u6062\u590d",
                soundOn: "\u6253\u5f00\u58f0\u97f3",
                soundOff: "\u5173\u95ed\u58f0\u97f3",
                clarity: "\u6e05\u6670\u5ea6",
                titleTip: "\u6b63\u5728\u64ad\u653e\uff1a",
                claritySetting: "\u6e05\u6670\u5ea6\u8bbe\u7f6e",
                clarityOk: "\u786e\u5b9a",
                clarityCancel: "\u53d6\u6d88",
                backToLive: "\u56de\u5230\u76f4\u64ad",
                loading: "\u6b63\u5728\u7f13\u51b2",
                subtitles: "\u5b57\u5e55",
                "default": "\u9ed8\u8ba4"
            },
            en_us: {
                stop: "Stop",
                pause: "Pause",
                play: "Play",
                fullScreen: "Full Screen",
                normalScreen: "Normal Screen",
                soundOn: "Sound On",
                soundOff: "Sound Off",
                clarity: "Clarity",
                titleTip: "Playing: ",
                claritySetting: "Definition Setting",
                clarityOk: "OK",
                clarityCancel: "Cancel",
                backToLive: "Back To Live",
                loading: "Loading",
                subtitles: "Subtitles",
                "default": "Default"
            },
            lang: {},
            init: function (a) {
                switch (a) {
                case "en_US":
                    this.lang = this.en_us;
                    break;
                case "zh_CN":
                    this.lang = this.zh_cn;
                    break;
                default:
                    this.lang = this.zh_cn
                }
            }, getString: function (a) {
                return this.lang[a]
            }
        }
    }
})();
(function (a) {
    SewisePlayerSkin.BannersAds = function (b, c) {
        function k() {
            F = SewisePlayerSkin.Utils.stringer.dateToYMD(new Date);
            m = c[F] || c["0000-00-00"];
            p = 0;
            if (void 0 != m) u = m.length
        }

        function i() {
            for (var a = (new Date).getTime(), b = 0; b < u; b++) {
                var g = SewisePlayerSkin.Utils.stringer.hmsToDate(m[b].time).getTime();
                if (b < u - 1) {
                    var c = SewisePlayerSkin.Utils.stringer.hmsToDate(m[b + 1].time).getTime();
                    if (a > g && a < c) {
                        p = b;
                        j(p);
                        break
                    }
                } else if (a > g) {
                    p = b;
                    j(p);
                    break
                }
            }
        }

        function d() {
            var a = (new Date).getTime();
            if (p < u - 1) {
                var b = SewisePlayerSkin.Utils.stringer.hmsToDate(m[p +
                    1].time).getTime();
                a > b && (p++, j(p))
            } else SewisePlayerSkin.Utils.stringer.dateToYMD(new Date) != F && (k(), i())
        }

        function j(a) {
            g = m[a].ads[0].picurl;
            h = m[a].ads[1].picurl;
            "" == g && "" == h || ("" == g && "" != h ? g = h : "" != g && "" == h && (h = g), f.attr("src", g), t.attr("src", h))
        }
        var l = a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:left; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');
        l.appendTo(b);
        var f = l.find("img"),
            l = a(' <div style="position:absolute; display:table; width:100%; height:100%;"><div style="display:table-cell; text-align:right; vertical-align:middle;"><img style="pointer-events:auto; cursor:pointer; width: auto; height: auto;"></div></div> ');
        l.appendTo(b);
        var t = l.find("img"),
            g, h, F, m, p, u;
        k();
        void 0 != m && (1 == u && "" == m[0].time ? j(0) : (i(), setInterval(d, 1E4)), f.click(function (a) {
            a.originalEvent.stopPropagation();
            a = m[p].ads[0].link_url;
            window.openAdsLink && "function" == typeof window.openAdsLink ?
                window.openAdsLink(a) : window.open(a, "_blank")
        }), t.click(function (a) {
            a.originalEvent.stopPropagation();
            a = m[p].ads[1].link_url;
            window.openAdsLink && "function" == typeof window.openAdsLink ? window.openAdsLink(a) : window.open(a, "_blank")
        }))
    }
})(window.jQuery);
(function (a) {
    SewisePlayerSkin.AdsContainer = function (b, c) {
        var k = b.$container,
            i = b.$sewisePlayerUi,
            d = c.banners;
        if (d) {
            var j = a("<div class='sewise-player-ads-banner'></div>");
            j.css({
                position: "absolute",
                width: "100%",
                height: "100%",
                left: "0px",
                top: "0px",
                overflow: "hidden",
                "pointer-events": "none"
            });
            j.appendTo(k);
            i.css("z-index", 1);
            SewisePlayerSkin.BannersAds(j, d)
        }
    }
})(window.jQuery);
(function (a) {
    SewisePlayerSkin.Statistics = function (b) {
        function c(b) {
            var c = b["request-url"],
                d = b["request-data"];
            setInterval(function () {
                a.ajax({
                    type: "post",
                    async: !1,
                    dataType: "json",
                    url: c,
                    data: d,
                    success: function () {}, error: function () {
                        console.log("play count ajax request fail!")
                    }
                })
            }, b["request-data"].intervallen ? b["request-data"].intervallen : 1E4)
        }(b = b.playCount) && c(b)
    }
})(window.jQuery);
(function (a) {
    SewisePlayerSkin.ElementObject = function () {
        this.$sewisePlayerUi = a(".sewise-player-ui");
        this.$container = this.$sewisePlayerUi.parent();
        this.$video = this.$container.find("video").get(0);
        this.$controlbar = this.$sewisePlayerUi.find(".controlbar");
        this.$playBtn = this.$sewisePlayerUi.find(".controlbar-btns-play");
        this.$pauseBtn = this.$sewisePlayerUi.find(".controlbar-btns-pause");
        this.$stopBtn = this.$sewisePlayerUi.find(".controlbar-btns-stop");
        this.$fullscreenBtn = this.$sewisePlayerUi.find(".controlbar-btns-fullscreen");
        this.$normalscreenBtn = this.$sewisePlayerUi.find(".controlbar-btns-normalscreen");
        this.$soundopenBtn = this.$sewisePlayerUi.find(".controlbar-btns-soundopen");
        this.$soundcloseBtn = this.$sewisePlayerUi.find(".controlbar-btns-soundclose");
        this.$volumelineVolume = this.$sewisePlayerUi.find(".controlbar-volumeline-volume");
        this.$volumelineDragger = this.$sewisePlayerUi.find(".controlbar-volumeline-dragger");
        this.$volumelinePoint = this.$sewisePlayerUi.find(".controlbar-volumeline-point");
        this.$playtime = this.$sewisePlayerUi.find(".controlbar-playtime");
        this.$totaltime = this.$sewisePlayerUi.find(".controlbar-totaltime");
        this.$controlBarProgress = this.$sewisePlayerUi.find(".controlbar-progress");
        this.$progressPlayedLine = this.$sewisePlayerUi.find(".controlbar-progress-playedline");
        this.$progressPlayedPoint = this.$sewisePlayerUi.find(".controlbar-progress-playpoint");
        this.$progressLoadedLine = this.$sewisePlayerUi.find(".controlbar-progress-loadedline");
        this.$progressSeekLine = this.$sewisePlayerUi.find(".controlbar-progress-seekline");
        this.$logo = this.$sewisePlayerUi.find(".logo");
        this.$logoIcon = this.$sewisePlayerUi.find(".logo-icon");
        this.$topbar = this.$sewisePlayerUi.find(".topbar");
        this.$programTip = this.$sewisePlayerUi.find(".topbar-program-tip");
        this.$programTitle = this.$sewisePlayerUi.find(".topbar-program-title");
        this.$topbarClock = this.$sewisePlayerUi.find(".topbar-clock");
        this.$buffer = this.$sewisePlayerUi.find(".buffer");
        this.$bufferTip = this.$sewisePlayerUi.find(".buffer-text-tip");
        this.$bigPlayBtn = this.$sewisePlayerUi.find(".big-play-btn");
        this.$claritySwitchBtn = this.$sewisePlayerUi.find(".clarity-switch-btn");
        this.$clarityBtnText = this.$sewisePlayerUi.find(".clarity-btn-text");
        this.defStageWidth = this.$container.width();
        this.defStageHeight = this.$container.height();
        this.defLeftValue = parseInt(this.$container.css("left"));
        this.defTopValue = parseInt(this.$container.css("top"));
        this.defOffsetX = this.$container.get(0).getBoundingClientRect().left;
        this.defOffsetY = this.$container.get(0).getBoundingClientRect().top;
        this.defOverflow = a("body").css("overflow")
    }
})(window.jQuery);
(function (a) {
    SewisePlayerSkin.ElementLayout = function (b) {
        var c = b.$container,
            k = b.$controlBarProgress,
            i = b.$playtime,
            d = b.defStageWidth,
            j = b.defLeftValue,
            l = b.defTopValue,
            f = b.defOffsetX,
            t = b.defOffsetY,
            g = b.defOverflow,
            h = parseInt(d) - 285;
        0 > h && (h += i.width(), i.hide());
        //k.css("width", h); 取消宽度设置
        this.fullScreen = function (b) {
            if ("not-support" == b) {
                a("body").css("overflow", "hidden");
                var b = a(window).width(),
                    g = a(window).height();
                c.css("width", b);
                c.css("height", g);
                b = a(document).scrollLeft();
                g = a(document).scrollTop();
                parseInt(a("body").css("margin-left"));
                var d = parseInt(a("body").css("margin-top")),
                    g = l - t + g - d + "px";
                c.css("left", j - f + b + "px");
                c.css("top", g)
            } else c.css("width", "100%"), c.css("height", "100%");
            b = parseInt(a(window).width()) - 285;
            0 > b ? (b += i.width(), i.hide()) : i.show();
            //k.css("width", b)
        };
        this.normalScreen = function () {
            c.css("width", "100%");
            c.css("height", "100%");
            c.css("left", j);
            c.css("top", l);
            a("body").css("overflow", g);
            h = parseInt(d) - 285;
            0 > h ? (h += i.width(), i.hide()) : i.show();
            //k.css("width", h)
        };
        this.resize = function () {
            d = c.width();
            c.height();
            h = parseInt(d) -
                285;
            0 > h ? (h += i.width(), i.hide()) : i.show();
            //k.css("width", h)
        }
    }
})(window.jQuery);
(function () {
    SewisePlayerSkin.LogoBox = function (a) {
        var b = a.$logoIcon;
        b.click(function (a) {
            a.originalEvent.stopPropagation()
        });
        var c = "http://www.sewise.com/";
        this.setLogo = function (a) {
            b.css("background", "url(" + a + ") 0px 0px no-repeat");
            b.attr("href", c)
        };
        this.setLink = function (a) {
            c = a;
            b.attr("href", c)
        }
    }
})(window.jQuery);
(function () {
    SewisePlayerSkin.TopBar = function (a) {
        var b = a.$topbar,
            c = a.$programTip,
            k = a.$programTitle,
            i = a.$topbarClock;
        setInterval(function () {
            var a = SewisePlayerSkin.Utils.stringer.dateToTimeString();
            i.text(a)
        }, 1E3);
        this.setTitle = function (a) {
            k.text(a)
        };
        this.show = function () {
            b.css("visibility", "visible")
        };
        this.hide = function () {
            b.css("visibility", "hidden")
        };
        this.hide2 = function () {
            b.hide()
        };
        this.initLanguage = function () {
            var a = SewisePlayerSkin.Utils.language.getString("titleTip");
            c.text(a)
        }
    }
})(window.jQuery);
(function (a) {
    SewisePlayerSkin.ClarityWindow = function (b) {
        var c = b.$container,
            k, i, d, j = "",
            l = "",
            f, t, g = 0,
            h = 0;
        this.setPlayer = function (a) {
            k = a
        };
        this.setControlBar = function (a) {
            i = a
        };
        this.initialClarities = function (b) {
            var m = SewisePlayerSkin.Utils.language.getString("claritySetting"),
                p = SewisePlayerSkin.Utils.language.getString("clarityOk"),
                u = SewisePlayerSkin.Utils.language.getString("clarityCancel");
            f = b;
            t = f.length;
            for (b = 0; b < t; b++) {
                var G;
                f[b].selected ? (G = ' checked = "checked" ', g = b, i.updateClarityBtnText(f[b].name)) :
                    G = " ";
                j += '<label style="cursor: pointer;display: inline-block;width:100%;" name="radio_clarity_label"><input id="'+b+'" style="display:none;vertical-align: -1px;" type="radio" name="radio_clarity"' + G + 'value=' + f[b].name + '>' + f[b].name + "</label>"
            }
            l = '<div style="position:absolute; bottom: 45px; right:32px;color: #FFF; background: rgba(74, 96, 115, 0.8); "><div>'+
                '<div class="clarityArea">' +
                j + '</div><div>';
            d = a("<div></div>");
            d.html(l);
            /*d.css({
                position: "absolute",
                left: "50%",
                top: "50%",
                "margin-left": "-162px",
                "margin-top": "-82px"
            });*/
            d.hide();
            d.appendTo(c);
            d.click(function (a) {
                a.originalEvent.stopPropagation()
            });
            /*d.find("[name = confirm_clarity]").click(function (a) {
                a.originalEvent.stopPropagation();
                d.hide();
                g != h && (g = h, i.updateClarityBtnText(f[g].name), k.changeClarity({
                    name: f[g].name,
                    videoUrl: f[g].videoUrl,
                    id: f[g].id,
                    selected: !0
                }))
            });*/
            /*d.find("[name = cancel_clarity]").click(function (a) {
                a.originalEvent.stopPropagation();
                d.hide();
                h = g
            });*/
            /*d.find("[name = radio_clarity_label]").click(function (b) {
                d.find("input[name = radio_clarity]").click();
            })*/
            d.find("[name = radio_clarity]").click(function (b) {
                $(".buffer-text-tip").text("正在切换清晰度，请稍候");
                b.originalEvent.stopPropagation();
                //h = a(b.target).index();
                h = a(b.target).attr("id");
                //console.log(a(b.target));

                //a.originalEvent.stopPropagation();
                d.hide();
                g != h && (g = h, i.updateClarityBtnText(f[g].name), k.changeClarity({
                    name: f[g].name,
                    videoUrl: f[g].videoUrl,
                    id: f[g].id,
                    selected: !0
                }))
                
            })
        };
        this.toggle = function () {
            d.toggle();
            d.find("[name = radio_clarity]").get(g).checked = !0;
            $("label").removeClass('checked');
            $("label:eq("+g+")").addClass('checked');
            //console.log(g);
            h = g
        }
    }
})(window.jQuery);
(function (a) {
    SewisePlayerSkin.ControlBar = function (b, c, k, i) {
        function d() {
            !1 == ea && (H.show(), I.css("visibility", "visible"), k.show(), ea = !0, D = setTimeout(f, fa))
        }

        function j() {
            0 != D && (clearTimeout(D), D = 0)
        }

        function l() {
            0 == D && (D = setTimeout(f, fa))
        }

        function f() {
            H.hide();
            I.css("visibility", "hidden");
            k.hide();
            ea = !1
        }

        function t(a) {
            a = q + (a.pageX - J);
            0 < a && a < x && (y.css("width", a), s.css("left", a - O / 2))
        }

        function g(b) {
            z.unbind("mousemove", t);
            a(document).unbind("mouseup", g);
            W = b.pageX;
            J != W && (q = y.width(), K = q / x, n.seek(K * L));
            P = !1
        }

        function h(a) {
            e = a.originalEvent;
            1 == e.targetTouches.length && (e.preventDefault(), a = q + (e.targetTouches[0].pageX - J), 0 < a && a < x && (y.css("width", a), s.css("left", a - O / 2)))
        }

        function F(a) {
            e = a.originalEvent;
            s.unbind("touchmove", h);
            s.unbind("touchend", F);
            if (1 == e.changedTouches.length) W = e.changedTouches[0].pageX, J != W && (q = y.width(), K = q / x, n.seek(K * L));
            P = !1
        }

        function m(a) {
            a = o + (a.pageX - M);
            0 < a && a < v && (w.css("width", a), r.css("left", a - E / 2))
        }

        function p(b) {
            z.unbind("mousemove", m);
            a(document).unbind("mouseup", p);
            X = b.pageX;
            M != X && (o = w.width(), A = o / v, n.setVolume(A), Y())
        }

        function u(a) {
            e = a.originalEvent;
            1 == e.targetTouches.length && (e.preventDefault(), a = o + (e.targetTouches[0].pageX - M), 0 < a && a < v && (w.css("width", a), r.css("left", a - E / 2)))
        }

        function G(a) {
            e = a.originalEvent;
            r.unbind("touchmove", u);
            r.unbind("touchend", G);
            if (1 == e.changedTouches.length) X = e.changedTouches[0].pageX, M != X && (o = w.width(), A = o / v, n.setVolume(A), Y())
        }

        function V() {
            null != document.fullscreenElement || null != document.msFullscreenElement || null != document.mozFullScreenElement ||
                null != document.webkitFullscreenElement ? (console.log("document to fullscreen"), c.fullScreen()) : c.normalScreen();
            B.timeUpdate(C)
        }

        function da() {
            c.resize();
            B.timeUpdate(C)
        }

        function ia() {
            c.fullScreen("not-support");
            B.timeUpdate(C)
        }

        function Y() {
            0 < A ? (n.muted(!1), Q.show(), N.hide()) : (n.muted(!0), Q.hide(), N.show())
        }
        var z = b.$container,
            Z = b.$video,
            I = b.$controlbar,
            $ = b.$playBtn,
            R = b.$pauseBtn,
            la = b.$stopBtn,
            aa = b.$fullscreenBtn,
            S = b.$normalscreenBtn,
            Q = b.$soundopenBtn,
            N = b.$soundcloseBtn,
            w = b.$volumelineVolume,
            T = b.$volumelineDragger,
            r = b.$volumelinePoint,
            ma = b.$playtime,
            na = b.$totaltime,
            y = b.$progressPlayedLine,
            s = b.$progressPlayedPoint,
            oa = b.$progressLoadedLine,
            U = b.$progressSeekLine,
            ga = b.$buffer,
            pa = b.$bufferTip,
            ba = b.$bigPlayBtn,
            H = b.$claritySwitchBtn,
            qa = b.$clarityBtnText,
            B = this,
            n, ha = "normal",
            L = 0.1,
            C = 0,
            ja = "00:00:00",
            ka = "00:00:00",
            O = 0,
            P = !1,
            J = 0,
            W = 0,
            q = 0,
            x = 0,
            K = 0,
            ea = !0,
            E = 0,
            v = 0,
            o = 0,
            A = 0,
            M = 0,
            X = 0,
            ca = !1,
            D, fa = 5E3,
            O = s.width(),
            x = U.width(),
            E = r.width(),
            v = T.width();
        R.hide();
        S.hide();
        N.hide();
        ga.hide();
        D = setTimeout(f, fa);
        a(Z).css("pointer-events", "none");
        z.click(function () {
            z.mousemove();
            ca ? n.pause() : n.play()
        });
        z.dblclick(function () {
            "normal" == ha ? B.fullScreen() : B.noramlScreen()
        });
        z.bind({
            mousemove: d,
            touchmove: d
        });
        I.bind({
            mouseover: j,
            touchstart: j
        });
        I.bind({
            mouseout: l,
            touchend: l
        });
        I.click(function (a) {
            a.originalEvent.stopPropagation()
        });
        $.click(function () {
            n.play()
        });
        R.click(function () {
            n.pause()
        });
        la.click(function () {
            n.stop()
        });
        ba.click(function (a) {
            a.originalEvent.stopPropagation();
            n.play()
        });
        aa.click(function () {
            B.fullScreen()
        });
        S.click(function () {
            B.noramlScreen()
        });
        Q.click(function () {
            n.muted(!0);
            Q.hide();
            N.show();
            w.css("width", 0);
            r.css("left", -E / 2)
        });
        N.click(function () {
            n.muted(!1);
            Q.show();
            N.hide();
            w.css("width", o);
            r.css("left", o - E / 2)
        });
        H.click(function (a) {
            a.originalEvent.stopPropagation();
            i.toggle()
        });
        U.mousedown(function (a) {
            q = a.pageX - a.target.getBoundingClientRect().left;
            x = U.width();
            y.css("width", q);
            s.css("left", q - O / 2);
            K = q / x;
            n.seek(K * L)
        });
        s.mousedown(function (b) {
            this.blur();
            P = !0;
            J = b.pageX;
            q = y.width();
            x = U.width();
            z.bind("mousemove", t);
            a(document).bind("mouseup",
                g)
        });
        s.bind("touchstart", function (a) {
            e = a.originalEvent;
            s.blur();
            a = e.targetTouches[0];
            P = !0;
            J = a.pageX;
            q = y.width();
            x = U.width();
            s.bind("touchmove", h);
            s.bind("touchend", F)
        });
        T.mousedown(function (a) {
            o = a.pageX - a.target.getBoundingClientRect().left;
            v = T.width();
            w.css("width", o);
            r.css("left", o - E / 2);
            A = o / v;
            n.setVolume(A);
            Y()
        });
        r.mousedown(function (b) {
            this.blur();
            M = b.pageX;
            o = w.width();
            v = T.width();
            z.bind("mousemove", m);
            a(document).bind("mouseup", p)
        });
        r.bind("touchstart", function (a) {
            e = a.originalEvent;
            r.blur();
            M =
                e.targetTouches[0].pageX;
            o = w.width();
            v = T.width();
            r.bind("touchmove", u);
            r.bind("touchend", G)
        });
        document.addEventListener("fullscreenchange", V);
        document.addEventListener("MSFullscreenChange", V);
        document.addEventListener("mozfullscreenchange", V);
        document.addEventListener("webkitfullscreenchange", V);
        a(window).bind("resize", da);
        this.setPlayer = function (a) {
            n = a
        };
        this.started = function () {
            $.hide();
            R.show();
            ba.hide();
            ca = !0
        };
        this.paused = function () {
            $.show();
            R.hide();
            ba.show();
            ca = !1
        };
        this.stopped = function () {
            $.show();
            R.hide();
            ba.show();
            ca = !1
        };
        this.setDuration = function (a) {
            L = Infinity != a ? a : 3600;
            1 < a && (ka = SewisePlayerSkin.Utils.stringer.secondsToMS(L));
            na.text(ka)
        };
        this.timeUpdate = function (a) {
            if (void 0 == a || Infinity == a) a = 0;
            C = a;
            ja = SewisePlayerSkin.Utils.stringer.secondsToMS(C);
            ma.text(ja);
            P || (q = 100 * (C / L) + "%", y.css("width", q), a = y.width() - O / 2, s.css("left", a))
        };
        this.loadProgress = function (a) {
            oa.css("width", 100 * a + "%")
        };
        this.initVolume = function (a) {
            A = a;
            o = v * A;
            w.css("width", o);
            r.css("left", o - E / 2);
            Y()
        };
        this.hide2 = function () {
            I.hide()
        };
        this.hideClarityBtn = function () {
            H.hide()
        };
        this.updateClarityBtnPosition = function () {
            H.css("top", "0%");
            H.css("margin-top", "-5px")
        };
        this.updateClarityBtnText = function (a) {
            qa.text(a)
        };
        this.fullScreen = function () {
            aa.hide();
            S.show();
            var b = z.get(0);
            a(window).unbind("resize", da);
            b.requestFullscreen ? b.requestFullscreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : Z.webkitEnterFullscreen ? (Z.play(), Z.webkitEnterFullscreen(),
                aa.show(), S.hide()) : (c.fullScreen("not-support"), B.timeUpdate(C), a(window).bind("resize", ia));
            ha = "full"
        };
        this.noramlScreen = function () {
            aa.show();
            S.hide();
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : (c.normalScreen(), B.timeUpdate(C), a(window).unbind("resize", ia));
            ha = "normal";
            a(window).bind("resize", da)
        };
        this.showBuffer = function () {
            ga.show()
        };
        this.hideBuffer = function () {
            ga.hide()
        };
        this.initLanguage = function () {
            var a = SewisePlayerSkin.Utils.language.getString("loading");
            pa.text(a)
        }
    }
})(window.jQuery);
(function (a, b) {
    b(document).ready(function () {
        var a = SewisePlayer.IVodPlayer,
            b = new SewisePlayerSkin.ElementObject,
            i = new SewisePlayerSkin.ElementLayout(b),
            d = new SewisePlayerSkin.LogoBox(b),
            j = new SewisePlayerSkin.TopBar(b),
            l = new SewisePlayerSkin.ClarityWindow(b),
            f = new SewisePlayerSkin.ControlBar(b, i, j, l);
        SewisePlayerSkin.IVodSkin.player = function (b) {
            a = b;
            f.setPlayer(a);
            l.setPlayer(a)
        };
        SewisePlayerSkin.IVodSkin.started = function () {
            f.started()
        };
        SewisePlayerSkin.IVodSkin.paused = function () {
            f.paused()
        };
        SewisePlayerSkin.IVodSkin.stopped =
            function () {
                f.stopped()
            };
        SewisePlayerSkin.IVodSkin.duration = function (a) {
            f.setDuration(a)
        };
        SewisePlayerSkin.IVodSkin.timeUpdate = function (a) {
            f.timeUpdate(a)
        };
        SewisePlayerSkin.IVodSkin.loadedProgress = function (a) {
            f.loadProgress(a)
        };
        SewisePlayerSkin.IVodSkin.loadedOpen = function () {
            f.showBuffer()
        };
        SewisePlayerSkin.IVodSkin.loadedComplete = function () {
            f.hideBuffer()
        };
        SewisePlayerSkin.IVodSkin.programTitle = function (a) {
            j.setTitle(a)
        };
        SewisePlayerSkin.IVodSkin.logo = function (a) {
            d.setLogo(a)
        };
        SewisePlayerSkin.IVodSkin.volume =
            function (a) {
                f.initVolume(a)
            };
        SewisePlayerSkin.IVodSkin.initialClarity = function (a) {
            l.setControlBar(f);
            l.initialClarities(a)
        };
        SewisePlayerSkin.IVodSkin.clarityButton = function (a) {
            "enable" != a && f.hideClarityBtn()
        };
        SewisePlayerSkin.IVodSkin.timeDisplay = function () {};
        SewisePlayerSkin.IVodSkin.controlBarDisplay = function (a) {
            "enable" != a && f.hide2()
        };
        SewisePlayerSkin.IVodSkin.topBarDisplay = function (a) {
            "enable" != a && (j.hide2(), f.updateClarityBtnPosition())
        };
        SewisePlayerSkin.IVodSkin.customStrings = function () {};
        SewisePlayerSkin.IVodSkin.customDatas =
            function (a) {
                a && a.logoLink && d.setLink(a.logoLink)
            };
        SewisePlayerSkin.IVodSkin.fullScreen = function () {
            f.fullScreen()
        };
        SewisePlayerSkin.IVodSkin.noramlScreen = function () {
            f.noramlScreen()
        };
        SewisePlayerSkin.IVodSkin.initialAds = function (a) {
            a && SewisePlayerSkin.AdsContainer(b, a)
        };
        SewisePlayerSkin.IVodSkin.initialStatistics = function (a) {
            a && SewisePlayerSkin.Statistics(a)
        };
        SewisePlayerSkin.IVodSkin.lang = function (a) {
            SewisePlayerSkin.Utils.language.init(a);
            f.initLanguage();
            j.initLanguage()
        };
        try {
            SewisePlayer.CommandDispatcher.dispatchEvent({
                type: SewisePlayer.Events.PLAYER_SKIN_LOADED,
                playerSkin: SewisePlayerSkin.IVodSkin
            })
        } catch (t) {
            console.log("No Main Player")
        }
    })
})(window, window.jQuery);