console.log("%c Github %c", "background:#333333; color:#ffffff", "", "https://github.com/izhaoo/hexo-theme-zhaoo");
var mingyan=new Array();
mingyan.push("失眠就像是，一个无人认领的梦，一段言无所向的人生，和一场明知故犯的恋");
mingyan.push('如果不是真的喜欢，谁又愿意当一条舔狗呢。 <br></br>-- 梁志斌')
mingyan.push("有人。 <br></br>-- 乐爷");
mingyan.push("她98年的，我玩不过她。 <br></br> - 梁志斌");
mingyan.push("虽然心里面很不爽，但没有什么反驳的理由  <br></br>- ClearLove");
mingyan.push("一个十块钱的垫纸手表，和一个一百万的劳力士，时间都是一样的转动。 <br></br> - 药子");
mingyan.push("你妈妈和我的猫都很想你……骗你的啦哈哈哈，我没有猫，你也没有  <br></br>- 孙笑川");
mingyan.push("说到痛处就气急败坏，说到底还不是条懒狗  <br></br>- 孙笑川");
mingyan.push("如果手上没有剑，我就无法保护你，如果我一直握着剑，就无法抱紧你 <br></br> - 撕破伤口、");

function getMoto(){
    return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
  }
(function ($) {
  "use strict";

  var fn = {
    showMenu: function () {
      $(".menu").fadeIn(300);
      $("body").addClass("lock-screen");
      $("main").addClass("blur");
      $(".preview").addClass("blur");
      $(".footer").addClass("blur");
      fn.hideFab();
    },
    hideMenu: function () {
      $(".menu").fadeOut(300);
      $("body").removeClass("lock-screen");
      $("main").removeClass("blur");
      $(".preview").removeClass("blur");
      $(".footer").removeClass("blur");
    },
    activeFab: function () {
      $(".fab-up").addClass("fab-up-active");
      $(".fab-plus").addClass("fab-plus-active");
      $(".fab-daovoice").addClass("fab-daovoice-active");
    },
    freezeFab: function () {
      $(".fab-up").removeClass("fab-up-active");
      $(".fab-plus").removeClass("fab-plus-active");
      $(".fab-daovoice").removeClass("fab-daovoice-active");
    },
    showFab: function () {
      $(".fab").removeClass("fab-hide").addClass("fab-show");
    },
    hideFab: function () {
      $(".fab").addClass("fab-hide").removeClass("fab-show");
    },
    scroolFab: function () {
      var height = $(window).height();
      var scrollTop = $(window).scrollTop();
      if (scrollTop > height) {
        fn.showFab();
      } else {
        fn.freezeFab();
        fn.hideFab();
      }
    },
    scroolToTop: function () {
      $('body,html').animate({
        scrollTop: '0px'
      }, 800);
    },
    navbar: {
      mobile: function () {
        $(".navbar").addClass("hide");
        $(window).on("scroll", ZHAOO.utils.throttle(function () {
          var before = $(this).scrollTop();
          $(window).on("scroll", function () {
            var after = $(this).scrollTop();
            if (before > after && after > 300) {
              $(".navbar").removeClass("hide");
            } else if (before < after || after < 300) {
              $(".navbar").addClass("hide");
            }
            before = after;
          })
        }, 500));
      },
      desktop: function () {
        function center() {
          if ($(window).scrollTop() > 60) {
            $(".navbar .center").addClass("hide");
          } else {
            $(".navbar .center").removeClass("hide");
          }
        }
        center();
        $(window).on("scroll", ZHAOO.utils.throttle(function () {
          center();
          var before = $(this).scrollTop();
          $(window).on("scroll", function () {
            var after = $(this).scrollTop();
            if (before > after) {
              $(".navbar").removeClass("hide");
            } else if (before < after) {
              $(".navbar").addClass("hide");
            }
            before = after;
          })
        }, 500));
      },
    }
  }

  var action = {
    smoothScroll: function () {
      // a[href *=#], area[href *=#]
      $(".smooth-scroll").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var $target = $(decodeURIComponent(this.hash));
          $target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $("html,body").animate({
              scrollTop: targetOffset
            }, 500);
            location.hash = this.hash;
            return false;
          }
        }
      });
    },
    loading: function () {
      $(".loading").delay(500).fadeOut(300);
      $("body").removeClass("lock-screen");
    },
    fab: function () {
      $(".fab-plus").on("click", function () {
        if ($(this).hasClass("fab-plus-active")) {
          fn.freezeFab();
        } else {
          fn.activeFab();
        }
      });
      $(".fab-daovoice").on("click", function () {
        daovoice('openMessages');
        fn.freezeFab();
      });
      $(".fab-up .fab-daovoice").on("click", function () {
        fn.freezeFab();
      });
      if (CONFIG.fab.alwaysShow) {
        fn.showFab();
      } else {
        $(window).scroll(fn.scroolFab);
      }
    },
    menu: function () {
      $(".menu-close").on("click", function () {
        fn.hideMenu();
        $(".navbar").removeClass("hide");
      });
    },
    scroolToTop: function () {
      $(".fab-up").on("click", function () {
        fn.scroolToTop();
      })
    },
    fancybox: function () {
      $(".fancybox").fancybox();
      $(".article .content img").each(function () {
        var e = document.createElement("a");
        $(e).attr("data-fancybox", "images");
        $(e).attr("href", $(this).attr("src"));
        $(this).wrap(e);
      });
    },
    pjax: function () {
      $(function () {
        $(document).pjax("a:not(.menu *)", '#main', {
          fragment: '#main',
          timeout: 6000
        });
      });
      $(document).on('pjax:complete', function () {
        if (CONFIG.fancybox) {
          action.fancybox();
        }
      });
    },
    donate: function () {
      $(".donate .icon").on("mouseover", function () {
        $(".donate .qrcode").show();
      });
      $(".donate .icon").children("a").on("mouseover", function () {
        $(".donate .qrcode img").attr('src', eval('CONFIG.donate.' + $(this).attr('id')))
      });
      $(".donate .icon").on("mouseout", function () {
        $(".donate .qrcode").hide();
      });
    },
    motto: function () {

      var text = getMoto();
      $("#motto").html(text);
    },
    lazyload: function () {
      $("img.lazyload").lazyload({
        effect: "fadeIn",
        threshold: 200,
      });
    },
    fixLazyloadFancybox: function () {
      $(document).find('.article img[data-original]').each(function () {
        $(this).parent().attr("href", $(this).attr("data-original"));
      });
    },
    carrier: function () {
      $(".j-carrier-btn").on("click", ZHAOO.utils.throttle(function () {
        $(".j-carrier-data").select();
        document.execCommand("Copy");
        ZHAOO.zui.message({ text: '已复制到剪切板', type: 'success' });
      }, 1000));
    },
    navbar: function () {
      $(window).resize(ZHAOO.utils.throttle(function () {
        if (ZHAOO.utils.isDesktop()) {
          fn.navbar.desktop();
        }
        if (ZHAOO.utils.isMobile() && !CONFIG.isHome) {
          fn.navbar.mobile();
        }
      }, 1000)).resize();
      $(".j-navbar-menu").on("click", function () {
        fn.showMenu();
        $(".navbar").addClass("hide");
      });
    }
  }

  $(function () {
    action.smoothScroll();
    action.loading();
    action.fab();
    action.navbar();
    action.menu();
    action.scroolToTop();
    action.motto();
    if (CONFIG.fancybox) {
      action.fancybox();
    }
    if (CONFIG.pjax) {
      action.pjax();
    }
    if (CONFIG.lazyload.enable) {
      action.lazyload();
    }
    if (CONFIG.donate.enable) {
      action.donate();
    }
    if (CONFIG.lazyload && CONFIG.fancybox) {
      action.fixLazyloadFancybox();
    }
    if (CONFIG.carrier.enable) {
      action.carrier();
    }
  });

})(jQuery);