var API_URL = "/qzzj/api"
  , API_URL_ADMIN = API_URL + "/admin"
  , limitTime = 0
  , responseData = "ListData"
  , NAVISOBJ = !1
  , IMPORT = {
    userimportfields: "用户导入模板.xls",
    courseimportfields: "课程导入模板.xls",
    examimportlist: "试题导入模板.xls",
    traininguserimportlist: "培训班用户导入模板.xls",
    groupimportfieldlist: "单位导入模板.xls",
    coursenodeimportlist: "课程节点导入模板.xls",
    pointfieldimport: "字段导入模版",
    a: "用户排行设置导入模板.xls",
    courseurlimport: "课程地址模版.xls"
}
  , isIE = document.documentMode || +(navigator.userAgent.match(/MSIE (\d+)/) && RegExp.$1)
  , isWin = "Win32" == navigator.platform || "Windows" == navigator.platform
  , isMac = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform
  , debounce = function(e, a, i) {
    var s, n, l, r, o, d = function() {
        var t = (new Date).getTime() - r;
        t < a && 0 <= t ? s = setTimeout(d, a - t) : (s = null,
        i || (o = e.apply(l, n),
        s || (l = n = null)))
    };
    return function() {
        l = this,
        n = arguments,
        r = (new Date).getTime();
        var t = i && !s;
        return s || (s = setTimeout(d, a)),
        t && (o = e.apply(l, n),
        l = n = null),
        o
    }
}
  , throttle = function(a, i, s) {
    var n, l, r, o = null, d = 0;
    s || (s = {});
    var c = function() {
        d = !1 === s.leading ? 0 : (new Date).getTime(),
        o = null,
        r = a.apply(n, l),
        o || (n = l = null)
    };
    return function() {
        var t = (new Date).getTime();
        d || !1 !== s.leading || (d = t);
        var e = i - (t - d);
        return n = this,
        l = arguments,
        e <= 0 || i < e ? (o && (clearTimeout(o),
        o = null),
        d = t,
        r = a.apply(n, l),
        o || (n = l = null)) : o || !1 === s.trailing || (o = setTimeout(c, e)),
        r
    }
};
Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    for (var a in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
    e)
        new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[a] : ("00" + e[a]).substr(("" + e[a]).length)));
    return t
}
;
var changeTheme = function(t) {
    document.getElementById("global-css").setAttribute("href", "styles/" + t + ".css")
}
  , ORIGIN = "http://localhost:9000" === window.origin ? "hunan" : "changsha";
String.prototype.rsaEnscrypt = function(t) {
    t || (t = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCa4KHNwDX44gGmmIAtRu4gjVYtGWZzcm4t+1wjUD4dn7fMLPvuK7ai4UrfDeEJE1RPwudJw+lJ6crql8wSIg7/DbTlG3ihsCT6dT9H5B9OoeR7K9VWUesaW/iyVL6HXiYOANabW14pvJATDmdq91Tfgp6PSQyvdfiRdV4r07crpQIDAQAB");
    var e = new JSEncrypt;
    return e.setPublicKey(t),
    e.encrypt(this.replace(/\+/g, "%2B"))
}
,
$.ajaxSetup({
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    xhrFields: {
        withCredentials: !0
    }
});
var ueditorConfig = {
    toolbars: [["fullscreen", "source", "|", "undo", "redo", "|", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "removeformat", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "selectall", "cleardoc", "|", "rowspacingtop", "rowspacingbottom", "lineheight", "|", "customstyle", "paragraph", "fontfamily", "fontsize", "|", "directionalityltr", "directionalityrtl", "indent", "|", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "touppercase", "tolowercase", "|", "link", "unlink", "anchor", "|", "imagenone", "imageleft", "imageright", "imagecenter", "|", "simpleupload", "insertimage", "pagebreak", "|", "horizontal", "date", "time", "spechars", "|", "inserttable", "deletetable", "insertparagraphbeforetable", "insertrow", "deleterow", "insertcol", "deletecol", "mergecells", "mergeright", "mergedown", "splittocells", "splittorows", "splittocols", "charts", "|", "preview", "print", "searchreplace", "drafts", "template", "background"]],
    autoHeightEnabled: !1,
    elementPathEnabled: !1,
    initialContent: "",
    focus: !1,
    indentValue: "2em",
    initialFrameWidth: 1e3,
    initialFrameHeight: 320,
    readonly: !1,
    enableAutoSave: !0,
    saveInterval: 500,
    fullscreen: !1,
    imagePopup: !0,
    allHtmlEnabled: !1
}
  , paginationConf = {
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 12,
    pagesLength: 6,
    perPageOptions: [10, 20, 30, 40, 50]
}
  , ALL_PORT = {
    Authorization: {
        url: API_URL + "/Page/Authorization",
        data: {
            controller: "Do",
            action: ""
        }
    },
    KeepOnline: {
        url: API_URL + "/Page/KeepOnline"
    },
    ArticleCategory: {
        url: API_URL + "/Page/ArticleCategory",
        data: {
            titleNav: "文章分类",
            sort: "Sort",
            order: "desc"
        }
    },
    ArticleList: {
        url: API_URL + "/Page/ArticleList",
        data: {
            page: "1",
            rows: "7",
            sort: "Sort",
            order: "desc",
            wordLimt: "20",
            CategoryCode: "",
            categoryId: ""
        }
    },
    ArticleContent: {
        url: API_URL + "/Page/ArticleContent",
        data: {}
    },
    SearchAll: {
        url: API_URL + "/Page/SearchAll",
        data: {
            page: 1,
            rows: 15,
            key: ""
        }
    },
    noticeAnnouncement: {
        url: API_URL + "/Page/LeftNotice",
        data: {
            page: "1",
            rows: "4",
            sort: "Sort",
            order: "desc",
            wordLimt: "15"
        }
    },
    NoticeList: {
        url: API_URL + "/Page/NoticeList",
        data: {
            page: "1",
            rows: "10",
            sort: "Id",
            order: "desc",
            categoryId: 0,
            titleNav: "通告公告",
            wordLimt: "35"
        }
    },
    noticeContent: {
        url: API_URL + "/Page/NoticeContent",
        data: {
            Id: "",
            titleNav: "通知内容"
        }
    },
    Blogroll: {
        url: API_URL + "/Page/Blogroll",
        data: {}
    },
    TrainingClass: {
        url: API_URL + "/Page/TrainingClass",
        data: {
            sort: "Id",
            order: "desc"
        }
    },
    LoginShort: {
        url: API_URL + "/Page/LoginShort",
        data: {}
    },
    AntiForgeryToken: {
        url: API_URL + "/Page/AntiForgeryToken",
        data: {}
    },
    LoginOut: {
        url: API_URL + "/Page/LoginOut",
        data: {}
    },
    KickOut: {
        url: API_URL + "/Page/KickOut",
        data: {}
    },
    LoginMe: {
        url: API_URL + "/Page/LoginMe",
        data: {}
    },
    GetLink: {
        url: API_URL + "/Page/GetLink",
        data: {
            LinkType: "IndexBannerList"
        }
    },
    LoginCode: {
        url: API_URL + "/Page/LoginCode",
        data: {}
    },
    Login: {
        url: API_URL + "/Page/Login",
        data: {}
    },
    GetVerifyCode: {
        url: API_URL + "/common/GetVerifyCode",
        data: {}
    },
    GetLoginName: {
        url: API_URL + "/Page/GetLoginName",
        data: {}
    },
    LeftGroupRank: {
        url: API_URL + "/Page/LeftGroupRank",
        data: {
            page: 1,
            rows: 10,
            sort: "AvgCredit",
            order: "desc",
            titleNav: "单位排行",
            wordLimt: 9
        }
    },
    RankGroupList: {
        url: API_URL + "/Page/RankGroupList",
        data: {
            page: 1,
            rows: 15,
            sort: "AvgCredit",
            order: "desc",
            titleNav: "单位排行",
            wordLimt: 30
        }
    },
    LeftRealTimeData: {
        url: API_URL + "/Page/LeftRealTimeData",
        data: {}
    },
    GetUserSkill: {
        url: API_URL + "/Guid/GetUserSkill",
        data: {}
    },
    CourseCategory: {
        url: API_URL + "/Page/CourseCategory",
        data: {
            titleNav: "课程分类",
            sort: "Sort",
            order: "Desc"
        }
    },
    RecommendCourse: {
        url: API_URL + "/Guid/RecommendCourse",
        data: {
            page: 1,
            rows: 10
        }
    },
    RelatedCourse: {
        url: API_URL + "/Guid/RelatedCourse",
        data: {
            Page: 1,
            Rows: 6,
            CourseId: ""
        }
    },
    CourseList: {
        url: API_URL + "/Page/CourseList",
        data: {
            page: 1,
            rows: 10,
            sort: "Sort",
            order: "desc",
            courseType: "All",
            channelId: "",
            channelCode: "",
            title: "",
            titleNav: "课程中心",
            wordLimt: 35,
            teacher: ""
        }
    },
    CourseListForIndex: {
        url: API_URL + "/Page/CourseListForIndex",
        data: {
            page: 1,
            rows: 10,
            sort: "Sort",
            order: "desc",
            courseType: "All",
            channelId: "",
            channelCode: "",
            title: "",
            titleNav: "课程中心",
            wordLimt: 35,
            teacher: ""
        }
    },
    CourseClickRank: {
        url: API_URL + "/Page/CourseClickRank",
        data: {
            page: 1,
            rows: 19,
            sort: "ClickCount",
            order: "desc",
            courseType: "All",
            flag: "All",
            titleNav: "课程排行",
            wordLimt: 35
        }
    },
    CourseClickList: {
        url: API_URL + "/Page/CourseClickList",
        data: {
            page: 1,
            rows: 20,
            sort: "ClickCount",
            order: "desc",
            titleNav: "课程点击排行",
            wordLimt: 17
        }
    },
    LoginSumRank: {
        url: API_URL + "/Page/LoginSumRank",
        data: {
            page: 1,
            rows: 10,
            sort: "LoginTimes",
            order: "desc",
            titleNav: "登录次数排行",
            wordLimt: 6
        }
    },
    LoginSumList: {
        url: API_URL + "/Page/LoginSumList",
        data: {
            page: 1,
            rows: 15,
            sort: "LoginTimes",
            order: "desc",
            titleNav: "登录次数排行"
        }
    },
    AddStudyCourse: {
        url: API_URL + "/Page/AddStudyCourse",
        data: {
            checkValue: ""
        }
    },
    LoginLong: {
        url: API_URL + "/Page/LoginLong",
        data: {}
    },
    LeftUserRank: {
        url: API_URL + "/Page/LeftUserRank",
        data: {
            page: 1,
            rows: 10,
            sort: "TotalCredit",
            order: "desc",
            titleNav: "个人排行",
            wordLimt: 6
        }
    },
    RankUserList: {
        url: API_URL + "/Page/RankUserList",
        data: {
            page: 1,
            rows: 15,
            sort: "TotalCredit",
            order: "desc",
            titleNav: "个人排行"
        }
    },
    CourseFinishList: {
        url: API_URL + "/Page/CourseFinishList",
        data: {
            page: 1,
            rows: 15,
            sort: "FinishCourseCount",
            order: "desc",
            titleNav: "课程完成排行",
            wordLimt: 8
        }
    },
    MyCenter: {
        url: API_URL + "/Page/MyCenter",
        data: {
            page: 1,
            rows: 10,
            sort: "BrowseScore",
            order: "desc",
            titleNav: "个人中心",
            courseType: "Unfinish",
            title: ""
        }
    },
    ExamList: {
        url: API_URL + "/Page/ExamList",
        data: {
            page: 1,
            rows: 5,
            sort: "Id",
            order: "desc",
            titleNav: "在线考试",
            examType: "All",
            title: ""
        }
    },
    PollList: {
        url: API_URL + "/Page/PollList",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            titleNav: "问卷调查",
            examType: "All",
            title: "",
            trainingId: "",
            wordLimt: 30
        }
    },
    Poll: {
        url: API_URL + "/Exam/Poll",
        data: {
            parameter1: ""
        }
    },
    Poll2: {
        url: API_URL + "/Exam/Poll2",
        data: {
            pollId: ""
        }
    },
    PollReview: {
        url: API_URL + "/Exam/PollReview",
        data: {
            parameter1: "",
            parameter2: ""
        }
    },
    PollReview2: {
        url: API_URL + "/Exam/PollReview2",
        data: {
            parameter1: "",
            parameter2: ""
        }
    },
    GetTrainingClassTypeList: {
        url: API_URL + "/Page/GetTrainingClassTypeList",
        data: {
            titleNav: "培训班分类",
            sort: "Sort",
            order: "Desc"
        }
    },
    StudySpecial: {
        url: API_URL + "/Page/StudySpecial",
        data: {
            titleNav: "专题学习",
            sort: "Sort",
            order: "Desc"
        }
    },
    ClassMy: {
        url: API_URL + "/Page/ClassMy",
        data: {
            page: 1,
            rows: 7,
            sort: "Id",
            order: "desc",
            titleNav: "我的班级",
            title: ""
        }
    },
    ClassActive: {
        url: API_URL + "/Page/ClassActive",
        data: {
            page: 1,
            rows: 7,
            sort: "CurrentUser",
            order: "desc",
            titleNav: "活跃班级"
        }
    },
    ClassRecent: {
        url: API_URL + "/Page/ClassRecent",
        data: {
            page: 1,
            rows: 10,
            sort: "StartDate",
            order: "desc",
            titleNav: "近期班级"
        }
    },
    GetClassList: {
        url: API_URL + "/Page/GetClassList",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            title: "",
            type: "just",
            categoryId: 0
        }
    },
    ClassList: {
        url: API_URL + "/Page/ClassList",
        data: {
            page: 1,
            rows: 20,
            sort: "Id",
            order: "desc",
            title: "",
            type: "",
            wordLimt: 30
        }
    },
    CourseContent: {
        url: API_URL + "/Page/CourseContent",
        data: {
            Id: "",
            titleNav: "课程详情"
        }
    },
    MyStudyStat: {
        url: API_URL + "/Page/MyStudyStat",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            titleNav: "学习统计"
        }
    },
    MyExamStat: {
        url: API_URL + "/Page/MyExamStat",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            titleNav: "考试统计"
        }
    },
    MyFavorite: {
        url: API_URL + "/Page/MyFavorite",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            titleNav: "我的收藏"
        }
    },
    FavoriteAdd: {
        url: API_URL + "/Page/FavoriteAdd",
        data: {
            mainId: "",
            type: "",
            title: "",
            remark: ""
        }
    },
    FavoriteDelete: {
        url: API_URL + "/Page/FavoriteDelete",
        data: {
            id: ""
        }
    },
    MyStudyPlan: {
        url: API_URL + "/Page/MyStudyPlan",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            titleNav: "学习计划"
        }
    },
    NoteAdd: {
        url: API_URL + "/Home/NoteAdd",
        data: {
            courseId: ""
        }
    },
    AddNote: {
        url: API_URL + "/Page/AddNote",
        data: {
            Name: "",
            Content: "",
            CourseId: ""
        }
    },
    CourseNoteList: {
        url: API_URL + "/Page/CourseNoteList",
        data: {
            CourseId: ""
        }
    },
    NoteUpdate: {
        url: API_URL + "/Page/NoteUpdate",
        data: {}
    },
    DelNote: {
        url: API_URL + "/Page/DelNote",
        data: {
            Id: ""
        }
    },
    StudyPlanAdd: {
        url: API_URL + "/Home/StudyPlanAdd",
        data: {
            courseId: ""
        }
    },
    AddStudyPlan: {
        url: API_URL + "/Page/StudyPlanAdd",
        data: {
            PlanFinishDate: "",
            RemindDate: "",
            RemindCycle: "",
            Remark: "",
            CourseId: ""
        }
    },
    StudyPlanUpdate: {
        url: API_URL + "/Home/StudyPlanUpdate",
        data: {
            courseId: ""
        }
    },
    EditStudyPlanUpdate: {
        url: API_URL + "/Page/StudyPlanUpdate",
        data: {
            PlanFinishDate: "",
            RemindDate: "",
            RemindCycle: "",
            Remark: "",
            CourseId: "",
            Id: ""
        }
    },
    DelUserCourseReg: {
        url: API_URL + "/Page/DelUserCourseReg",
        data: {
            courseId: ""
        }
    },
    CourseExamList: {
        url: API_URL + "/Page/CourseExamList",
        data: {
            courseId: ""
        }
    },
    DelStudyPlan: {
        url: API_URL + "/Page/DelStudyPlan",
        data: {
            id: ""
        }
    },
    MessageList: {
        url: API_URL + "/Page/MessageList",
        data: {
            page: 1,
            rows: 13,
            sort: "CreateDate",
            order: "desc",
            titleNav: "留言板",
            wordLimt: "35"
        }
    },
    MessageDetail: {
        url: API_URL + "/Page/MessageDetail",
        data: {
            id: "",
            titleNav: "留言详情"
        }
    },
    GetMessageAdd: {
        url: API_URL + "/Page/GetMessageAdd",
        data: {
            Name: "",
            Class: "",
            Content: ""
        }
    },
    Exam: {
        url: API_URL + "/Exam/Exam",
        data: {
            parameter1: ""
        }
    },
    StudyStatistics: {
        url: API_URL + "/Page/StudyStatistics",
        data: {
            page: 1,
            rows: 5,
            sort: "Id",
            order: "desc",
            type: "",
            startDate: "",
            endDate: "",
            wordLimt: 24,
            titleNav: "个人学习档案"
        }
    },
    ExamDetailListItem: {
        url: API_URL + "/Exam/ExamDetailListItem",
        data: {
            page: 1,
            rows: 10,
            sort: "Id",
            order: "desc",
            examid: ""
        }
    },
    ExamReview: {
        url: API_URL + "/Exam/ExamReview",
        data: {
            parameter1: "",
            parameter2: ""
        }
    },
    UpdateTrainingStudentup: {
        url: API_URL + "/Guid/UpdateTrainingStudentup",
        data: {
            Id: ""
        }
    },
    UpdateTrainingStudentdown: {
        url: API_URL + "/Guid/UpdateTrainingStudentdown",
        data: {
            Id: ""
        }
    },
    UnReadNotice: {
        url: API_URL + "/Page/NoticeUnReadList",
        data: {
            page: 1,
            rows: 7,
            sort: "Id",
            order: "desc",
            titleNav: "个人通知",
            wordLimt: 30
        }
    },
    UpdatePwd: {
        url: API_URL + "/Page/UpdatePwd",
        data: {}
    },
    SetPasswordQuestion: {
        url: API_URL + "/Page/SetPasswordQuestion",
        data: {}
    },
    AddPasswordQuestion: {
        url: API_URL + "/Page/AddPasswordQuestion",
        data: {
            pwd: ""
        }
    },
    GetUserInfo: {
        url: API_URL + "/Page/GetUserInfo",
        data: {
            titleNav: "修改信息"
        }
    },
    GetGradeList: {
        url: API_URL + "/Common/GetGradeList",
        data: {}
    },
    UpdateUserInfo: {
        url: API_URL + "/Page/UpdateUserInfo",
        data: {}
    },
    ClassInformation: {
        url: API_URL + "/Page/ClassInformation",
        data: {
            titleNav: "个人学习信息",
            Id: ""
        }
    },
    ClassDetail: {
        url: API_URL + "/Page/ClassDetail",
        data: {
            titleNav: "培训班详情",
            page: 1,
            rows: 9,
            sort: "Id",
            order: "desc"
        }
    },
    ClassPlan: {
        url: API_URL + "/Page/ClassPlan",
        data: {
            titleNav: "教学计划"
        }
    },
    ClassStudent: {
        url: API_URL + "/Page/ClassStudent",
        data: {
            page: 1,
            rows: 12,
            sort: "Id",
            order: "desc",
            titleNav: "同学名录"
        }
    },
    ClassPaperList: {
        url: API_URL + "/Page/ClassPaperList",
        data: {
            page: 1,
            rows: 12,
            sort: "Id",
            order: "desc",
            titleNav: "班级论文",
            wordLimt: 30
        }
    },
    PhotoAlbumList: {
        url: API_URL + "/Page/PhotoAlbumList",
        data: {
            page: 1,
            rows: 9,
            sort: "Id",
            order: "desc",
            titleNav: "班级相册"
        }
    },
    ClassTopicList: {
        url: API_URL + "/Page/ClassTopicList",
        data: {
            page: 1,
            rows: 12,
            sort: "Id",
            order: "desc",
            titleNav: "班级话题",
            wordLimt: 30
        }
    },
    ClassCourse: {
        url: API_URL + "/Page/ClassCourse",
        data: {
            page: 1,
            rows: 12,
            sort: "Id",
            order: "desc",
            titleNav: "班级课程",
            wordLimt: 30
        }
    },
    ClassNoticeList: {
        url: API_URL + "/Page/ClassNoticeList",
        data: {
            page: 1,
            rows: 12,
            sort: "Id",
            order: "desc",
            titleNav: "班级公告",
            wordLimt: 30
        }
    },
    ClassExam: {
        url: API_URL + "/Page/ClassExam",
        data: {
            page: 1,
            rows: 12,
            sort: "Id",
            order: "desc",
            titleNav: "班级考试",
            wordLimt: 30
        }
    },
    ClassArticleDetail: {
        url: API_URL + "/Page/ClassArticleDetail",
        data: {}
    },
    CheckUserClass: {
        url: API_URL + "/Page/CheckUserClass",
        data: {}
    },
    GetPhotoAlbumAdd: {
        url: API_URL + "/Page/GetPhotoAlbumAdd",
        data: {}
    },
    PhotoAlbumAdd: {
        url: API_URL + "/Page/PhotoAlbumAdd",
        data: {
            titleNav: "添加相册"
        }
    },
    PhotoPreview: {
        url: API_URL + "/Page/PhotoPreview",
        data: {
            titleNav: "班级图片",
            page: 1,
            rows: 9,
            sort: "Id",
            order: "desc"
        }
    },
    GetPhotoUpFile: {
        url: API_URL + "/Page/GetPhotoUpFile",
        data: {}
    },
    ClassTopicAdd: {
        url: API_URL + "/Page/ClassTopicAdd",
        data: {
            page: 1,
            rows: 9,
            sort: "Id",
            order: "desc"
        }
    },
    ClassPaperAdd: {
        url: API_URL + "/Page/ClassPaperAdd",
        data: {
            page: 1,
            rows: 9,
            sort: "Id",
            order: "desc"
        }
    },
    AddOriginalArticle: {
        url: API_URL + "/Page/AddOriginalArticle",
        data: {
            Name: "",
            Content: ""
        }
    },
    OriginalArticleList: {
        url: API_URL + "/Page/OriginalArticleList",
        data: {
            page: 1,
            rows: 9,
            sort: "Id",
            order: "desc",
            titleNav: "学员心声列表"
        }
    },
    GetTrainingArticleCategory: {
        url: API_URL + "/Page/GetTrainingArticleCategory",
        data: {}
    },
    ClassPublishArticle: {
        url: API_URL + "/Page/ClassPublishArticle",
        data: {}
    },
    PostExam: {
        url: API_URL + "/Exam/PostExam",
        data: {}
    },
    GetPasswordEmail: {
        url: API_URL + "/Page/GetPasswordEmail",
        data: {}
    },
    GetQuestion: {
        url: API_URL + "/Page/GetQuestion",
        data: {
            account: ""
        }
    },
    Register: {
        url: API_URL + "/Page/Register",
        data: {
            account: "",
            name: "",
            password: "",
            mobile: "",
            idcard: "",
            email: "",
            groupid: "",
            smgcode: ""
        }
    },
    GetGroupList: {
        url: API_URL + "/common/GetGroupList",
        data: {
            id: ""
        }
    },
    SendMsg: {
        url: API_URL + "/Page/SendMsg",
        data: {
            mobileNo: ""
        }
    },
    GetPasswordByQuestion: {
        url: API_URL + "/Page/GetPasswordByQuestion",
        data: {
            account: "",
            question: "",
            answer: ""
        }
    },
    UnReadNotice2: {
        url: API_URL + "/Page/UnReadNotice",
        data: {}
    },
    Play: {
        url: API_URL + "/Home/Play",
        data: {
            id: ""
        }
    },
    TryPlay: {
        url: API_URL + "/Course/TryPlay",
        data: {
            id: ""
        }
    },
    Refresh: {
        url: API_URL + "/CourseProcess/Refresh",
        data: {
            PortalId: "",
            userId: "",
            courseid: ""
        }
    },
    CourseCommentAdd: {
        url: API_URL + "/Page/CourseCommentAdd",
        data: {
            mainId: "",
            parentId: "0",
            content: "",
            rate: ""
        }
    },
    CourseComment: {
        url: API_URL + "/Page/CourseComment",
        data: {
            id: "",
            page: "1",
            rows: "100",
            sort: "Id",
            order: "Desc"
        }
    },
    Refresh: {
        url: API_URL + "/CourseProcess/Refresh",
        data: {
            PortalId: "",
            userId: "",
            courseid: ""
        }
    },
    ClearPlayingCourse: {
        url: API_URL + "/Page/ClearPlayingCourse",
        data: {
            userid: ""
        }
    },
    PlayJwplay: {
        url: API_URL + "/Home/PlayJwplay",
        data: {
            courseid: ""
        }
    },
    SingleProcess: {
        url: API_URL + "/CourseProcess/SingleProcess",
        data: {
            PortalId: "",
            userid: "",
            courseid: "",
            positionen: ""
        }
    },
    PlayJY: {
        url: API_URL + "/Home/PlayJY",
        data: {
            courseId: ""
        }
    },
    PlayScorm: {
        url: API_URL + "/Home/PlayScorm",
        data: {}
    },
    PlayJyScorm: {
        url: API_URL + "/Home/PlayJyScorm",
        data: {
            id: ""
        }
    },
    PlaySingle: {
        url: API_URL + "/Home/PlaySingle",
        data: {
            courseId: ""
        }
    },
    PlayOffice: {
        url: API_URL + "/Home/PlayOffice",
        data: {
            courseId: ""
        }
    },
    ProcessOffice: {
        url: API_URL + "/CourseProcess/ProcessOffice",
        data: {
            course_id: "",
            lesson_id: "",
            user_id: "",
            total_id: ""
        }
    },
    BookCategory: {
        url: API_URL + "/Page/BookCategory",
        data: {
            sort: "Sort",
            categoryId: 0,
            titleNav: "图书分类"
        }
    },
    BookList: {
        url: API_URL + "/Page/BookList",
        data: {
            page: 1,
            rows: 8,
            sort: "Sort",
            order: "asc",
            categoryId: "",
            titleNav: "电子书",
            wordLimt: 35,
            ptitle: "",
            title: ""
        }
    },
    BookContent: {
        url: API_URL + "/Page/BookContent",
        data: {
            page: 1,
            rows: 8,
            sort: "Sort",
            order: "asc",
            id: "",
            titleNav: "图书详细",
            wordLimt: 35
        }
    },
    BookChapterList: {
        url: API_URL + "/Page/BookChapterList",
        data: {
            page: 1,
            rows: 8,
            sort: "Sort",
            order: "asc",
            bookId: "",
            titleNav: "图书章节"
        }
    },
    BookChapterContent: {
        url: API_URL + "/Page/BookChapterContent",
        data: {
            Id: ""
        }
    },
    BookCommentAdd: {
        url: API_URL + "/Page/BookCommentAdd",
        data: {
            bookId: "",
            content: ""
        }
    },
    BookCommentList: {
        url: API_URL + "/Page/BookCommentList",
        data: {
            page: 1,
            rows: 4,
            sort: "Sort",
            order: "desc",
            bookId: "",
            titleNav: "图书评论",
            wordLimt: 35
        }
    },
    CollegeInfo: {
        url: API_URL + "/page/CollegeInfo",
        data: {
            sort: "Sort"
        }
    },
    StudentStyle: {
        url: API_URL + "/Page/StudentStyle",
        data: {
            page: 1,
            rows: 9,
            sort: "Sort",
            order: "desc",
            titleNav: "学员风采"
        }
    },
    GetMyShoppingCart: {
        url: API_URL + "/shop/GetMyShoppingCart",
        data: {}
    },
    AddToCart: {
        url: API_URL + "/shop/AddToCart",
        data: {
            ids: ""
        }
    },
    DelFromCart: {
        url: API_URL + "/shop/DelFromCart",
        data: {
            id: ""
        }
    },
    AddOrder: {
        url: API_URL + "/shop/AddOrder",
        data: {}
    },
    DelOrder: {
        url: API_URL + "/shop/DelOrder",
        data: {
            orderId: ""
        }
    },
    CancelOrder: {
        url: API_URL + "/shop/CancelOrder",
        data: {
            orderId: ""
        }
    },
    RestoreOrder: {
        url: API_URL + "/shop/RestoreOrder",
        data: {
            orderId: ""
        }
    },
    GetMyOrder: {
        url: API_URL + "/shop/GetMyOrder",
        data: {
            page: 1,
            rows: 4,
            sort: "CreateTime",
            order: "desc",
            titleNav: "我的订单"
        }
    },
    GetOrderDetail: {
        url: API_URL + "/shop/GetOrderDetail",
        data: {
            page: 1,
            rows: 5,
            sort: "Sort",
            order: "desc",
            titleNav: "订单详细",
            orderId: ""
        }
    },
    BeginPay: {
        url: API_URL + "/shop/BeginPay",
        data: {
            orderId: "",
            payType: ""
        }
    },
    EndPay: {
        url: API_URL + "/shop/EndPay",
        data: {
            payType: ""
        }
    },
    EndPay2: {
        url: API_URL + "/shop/EndPay2",
        data: {
            payType: ""
        }
    },
    EndPay3: {
        url: API_URL + "/shop/EndPay3",
        data: {
            payType: ""
        }
    },
    InvoiceBeginPay: {
        url: API_URL + "/shop/InvoiceBeginPay",
        data: {
            orderId: "",
            payType: ""
        }
    },
    GetInvoice: {
        url: API_URL + "/shop/GetInvoice",
        data: {
            invoiceId: ""
        }
    },
    InvoiceFinishPay: {
        url: API_URL + "/shop/InvoiceFinishPay",
        data: {
            invoiceId: "",
            payCode: ""
        }
    },
    PayForInvoice: {
        url: API_URL + "/shop/PayForInvoice",
        data: {
            invoiceId: ""
        }
    },
    AddTrainingSay: {
        url: API_URL + "/page/AddTrainingSay",
        data: {
            mainId: 0,
            parentId: 0,
            content: ""
        }
    },
    DelTrainingSay: {
        url: API_URL + "/page/DelTrainingSay",
        data: {
            id: ""
        }
    },
    TrainingSayList: {
        url: API_URL + "/page/TrainingSayList",
        data: {
            mainId: "",
            sort: "sort",
            order: "desc",
            page: 1,
            rows: 5
        }
    },
    GetUserProfessionList: {
        url: API_URL + "/page/GetUserProfessionList",
        data: {}
    },
    UpdateUserProfession: {
        url: API_URL + "/page/UpdateUserProfession",
        data: {}
    },
    GetMyProfession: {
        url: API_URL + "/page/GetMyProfession",
        data: {}
    },
    GetBatchList: {
        url: API_URL + "/page/GetBatchList",
        data: {}
    },
    UpdateUserBatch: {
        url: API_URL + "/page/UpdateUserBatch",
        data: {}
    },
    GetUserPrintInfo: {
        url: API_URL + "/page/GetUserPrintInfo",
        data: {}
    },
    GetSFormList: {
        url: API_URL + "/Credit/GetSFormList",
        data: {}
    },
    GetSCategoryList: {
        url: API_URL + "/Credit/GetSCategoryList",
        data: {}
    },
    UploadDCredit: {
        url: API_URL + "/Credit/UploadDCredit",
        data: {}
    },
    EditDCredit: {
        url: API_URL + "/Credit/EditDCredit",
        data: {}
    },
    DeleteDCredit: {
        url: API_URL + "/Credit/DeleteDCredit",
        data: {}
    },
    GetDCreditList: {
        url: API_URL + "/Credit/GetDCreditList",
        data: {}
    },
    GetDCreditDetail: {
        url: API_URL + "/Credit/GetDCreditDetail",
        data: {}
    },
    GetAuditHistory: {
        url: API_URL + "/Credit/GetAuditHistory",
        data: {}
    },
    GetBatchSealImg: {
        url: API_URL + "/page/GetBatchSealImg",
        data: {}
    },
    GetUserStudyStatistics: {
        url: API_URL + "/page/GetUserStudyStatistics",
        data: {}
    }
};
angular.module("luZhouApp", ["ng", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "darthwade.dwLoading", "ng.ueditor", "ui.router", "ui-notification", "pdfjsViewer"]).config(["$routeProvider", "$httpProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider", "NotificationProvider", function(t, e, a, i, s, n) {
    a.state("error", {
        url: "/error",
        templateUrl: "views/error.html",
        controller: "ErrorCtrl",
        controllerAs: "error",
        data: {
            title: "没有此页面"
        }
    }).state("main", {
        url: "/",
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main",
        data: {
            title: "衢州市专业技术人员继续教育学习平台"
        }
    }).state("main2", {
        url: "",
        templateUrl: "views/main.html",
        controller: "MainCtrl",
        controllerAs: "main",
        data: {
            title: "衢州市专业技术人员继续教育学习平台"
        },
        onEnter: ["$state", function(t) {
            t.go("main")
        }
        ]
    }).state("courseCenter", {
        url: "/courseCenter?channelId&title&searchType",
        templateUrl: "views/coursecenter.html",
        controller: "CoursecenterCtrl",
        controllerAs: "courseCenter",
        data: {
            title: "课程中心"
        }
    }).state("noticelist", {
        url: "/noticelist",
        data: {
            title: "通知公告"
        },
        templateUrl: "views/noticelist.html",
        controller: "NoticelistCtrl",
        controllerAs: "noticeList"
    }).state("courseCenterBuy", {
        url: "/courseCenterBuy",
        data: {
            title: "课程中心"
        },
        templateUrl: "views/coursecenterbuy.html",
        controller: "CoursecenterbuyCtrl",
        controllerAs: "courseCenterBuy"
    }).state("personalCenter", {
        url: "/personalCenter",
        templateUrl: "views/personalcenter.html",
        controller: "PersonalcenterCtrl",
        controllerAs: "personalCenter",
        data: {
            title: "个人中心"
        }
    }).state("testCenter", {
        url: "/testCenter",
        templateUrl: "views/testcenter.html",
        controller: "TestcenterCtrl",
        controllerAs: "testCenter",
        data: {
            title: "在线考试"
        }
    }).state("trainingClass", {
        url: "/trainingClass",
        data: {
            title: "班级园地"
        },
        templateUrl: "views/trainingclass.html",
        controller: "TrainingclassCtrl",
        controllerAs: "trainingClass"
    }).state("csTrainingNews", {
        url: "/csTrainingNews",
        templateUrl: "views/news/cstrainingnews.html",
        controller: "csTrainingNewsCtrl",
        controllerAs: "csTrainingNews",
        data: {
            title: "公务员培训新闻"
        }
    }).state("patpTrainingNews", {
        url: "/patpTrainingNews",
        templateUrl: "views/news/patptrainingnews.html",
        controller: "patpTrainingNewsCtrl",
        controllerAs: "patpTrainingNews",
        data: {
            title: "专业技术人员培训新闻"
        }
    }).state("articleDetail", {
        url: "/articleDetail?ID",
        templateUrl: "views/news/articledetail.html",
        controller: "articleDetailCtrl",
        controllerAs: "articleDetail",
        data: {
            title: "文章内容"
        }
    }).state("newsinfo", {
        url: "/newsinfo?ID",
        data: {
            title: "新闻信息"
        },
        templateUrl: "views/news/newsinfo.html",
        controller: "newsInfoCtrl",
        controllerAs: "NewsInfo"
    }).state("noticeDetail", {
        url: "/noticeDetail?ID",
        data: {
            title: "通知内容"
        },
        templateUrl: "views/news/articledetail.html",
        controller: "noticeDetailCtrl",
        controllerAs: "noticeDetail"
    }).state("search", {
        url: "/search?text",
        data: {
            title: "搜索结果"
        },
        templateUrl: "views/news/searchresult.html",
        controller: "searchResultCtrl",
        controllerAs: "searchResult"
    }).state("courseDetails", {
        url: "/courseCenter/courseDetails?Id",
        data: {
            title: "课程详情"
        },
        templateUrl: "views/courseCenter/coursedetails.html",
        controller: "CoursedetailsCtrl",
        controllerAs: "courseDetails"
    }).state("personalCenter.studyStat", {
        url: "/studyStat",
        data: {
            title: "学习统计"
        },
        templateUrl: "views/personalCenter/studystat.html",
        controller: "StudystatCtrl",
        controllerAs: "studyStat"
    }).state("personalCenter.testStat", {
        url: "/testStat",
        data: {
            title: "考试统计"
        },
        templateUrl: "views/personalCenter/teststat.html",
        controller: "TeststatCtrl",
        controllerAs: "testStat"
    }).state("personalCenter.myFavorite", {
        url: "/myFavorite",
        data: {
            title: "我的收藏"
        },
        templateUrl: "views/personalCenter/myfavorite.html",
        controller: "MyfavoriteCtrl",
        controllerAs: "myFavorite"
    }).state("personalCenter.studyPlan", {
        url: "/studyPlan",
        data: {
            title: "学习计划"
        },
        templateUrl: "views/personalCenter/studyplan.html",
        controller: "StudyplanCtrl",
        controllerAs: "studyPlan"
    }).state("personalCenter.creditPost", {
        url: "/creditPost",
        data: {
            title: "学时上报"
        },
        templateUrl: "views/personalCenter/creditpost.html",
        controller: "CreditpostCtrl",
        controllerAs: "creditPost"
    }).state("personalCenter.gybPost", {
        url: "/gybPost",
        data: {
            title: "高研班申报"
        },
        templateUrl: "views/personalCenter/gybpost.html",
        controller: "GybpostCtrl",
        controllerAs: "gybPost"
    }).state("unReadNotice", {
        url: "/personalCenter/unReadNotice",
        data: {
            title: "个人通知"
        },
        templateUrl: "views/personalCenter/unreadnotice.html",
        controller: "unReadNoticeCtrl",
        controllerAs: "unReadNotice"
    }).state("modifyPassword", {
        url: "/personalCenter/modifyPassword",
        data: {
            title: "修改密码"
        },
        templateUrl: "views/personalCenter/modifypassword.html",
        controller: "modifyPasswordCtrl",
        controllerAs: "modifyPassword"
    }).state("securitySetting", {
        url: "/personalCenter/securitySetting",
        data: {
            title: "设置密保"
        },
        templateUrl: "views/personalCenter/securitysetting.html",
        controller: "securitySettingCtrl",
        controllerAs: "securitySetting"
    }).state("changeUser", {
        url: "/personalCenter/changeUser",
        data: {
            title: "个人信息修改"
        },
        templateUrl: "views/personalCenter/changeuserinfo.html",
        controller: "changeUserInfoCtrl",
        controllerAs: "changeUserInfo"
    }).state("classDetail", {
        url: "/trainingClass/classDetail?Id",
        data: {
            title: "班级详情"
        },
        templateUrl: "views/trainingClass/classdetail.html",
        controller: "classDetailCtrl",
        controllerAs: "classDetail"
    }).state("classPlan", {
        url: "/trainingClass/classPlan?Id",
        data: {
            title: "教学计划"
        },
        templateUrl: "views/trainingClass/classplan.html",
        controller: "classPlanCtrl",
        controllerAs: "classPlan"
    }).state("classStudent", {
        url: "/trainingClass/classStudent?Id",
        data: {
            title: "同学名录"
        },
        templateUrl: "views/trainingClass/classstudent.html",
        controller: "classStudentCtrl",
        controllerAs: "classStudent"
    }).state("classPaperList", {
        url: "/trainingClass/classPaperList?Id",
        data: {
            title: "班级论文"
        },
        templateUrl: "views/trainingClass/classpaperlist.html",
        controller: "classPaperListCtrl",
        controllerAs: "classPaperList"
    }).state("photoAlbumList", {
        url: "/trainingClass/photoAlbumList?Id",
        data: {
            title: "班级相册"
        },
        templateUrl: "views/trainingClass/photoalbumlist.html",
        controller: "photoAlbumListCtrl",
        controllerAs: "photoAlbumList"
    }).state("classTopicList", {
        url: "/trainingClass/classTopicList?Id",
        data: {
            title: "班级话题"
        },
        templateUrl: "views/trainingClass/classtopiclist.html",
        controller: "classTopicListCtrl",
        controllerAs: "classTopicList"
    }).state("classCourse", {
        url: "/trainingClass/classCourse?Id&Type",
        data: {
            title: "班级课程"
        },
        templateUrl: "views/trainingClass/classcourse.html",
        controller: "classCourseCtrl",
        controllerAs: "classCourse"
    }).state("classNotice", {
        url: "/trainingClass/classNotice?Id",
        data: {
            title: "班级公告"
        },
        templateUrl: "views/trainingClass/classnotice.html",
        controller: "classNoticeCtrl",
        controllerAs: "classNotice"
    }).state("classExam", {
        url: "/trainingClass/classExam?Id",
        data: {
            title: "班级考试"
        },
        templateUrl: "views/trainingClass/classexam.html",
        controller: "classExamCtrl",
        controllerAs: "classExam"
    }).state("classArticleDetail", {
        url: "/trainingClass/classArticleDetail?Id",
        data: {
            title: "班级文章内容"
        },
        templateUrl: "views/trainingClass/classarticledetail.html",
        controller: "classArticleDetailCtrl",
        controllerAs: "classArticleDetail"
    }).state("classTopicAdd", {
        url: "/trainingClass/classTopicAdd?Id",
        data: {
            title: "添加话题"
        },
        templateUrl: "views/trainingClass/classtopicadd.html",
        controller: "classTopicAddCtrl",
        controllerAs: "classTopicAdd"
    }).state("classPaperAdd", {
        url: "/trainingClass/classPaperAdd?Id",
        data: {
            title: "添加论文"
        },
        templateUrl: "views/trainingClass/classpaperadd.html",
        controller: "classPaperAddCtrl",
        controllerAs: "classPaperAdd"
    }).state("photoAlbumAdd", {
        url: "/trainingClass/photoAlbumAdd?Id",
        data: {
            title: "添加相册"
        },
        templateUrl: "views/trainingClass/photoalbumadd.html",
        controller: "photoAlbumAddCtrl",
        controllerAs: "photoAlbumAdd"
    }).state("photoPreview", {
        url: "/trainingClass/photoPreview?AlbumId&TrainingId",
        data: {
            title: "班级照片"
        },
        templateUrl: "views/trainingClass/photopreview.html",
        controller: "photoPreviewCtrl",
        controllerAs: "photoPreview"
    }).state("messageList", {
        url: "/personalCenter/messageList",
        data: {
            title: "留言板"
        },
        templateUrl: "views/personalCenter/messagelist.html",
        controller: "MessagelistCtrl",
        controllerAs: "messageList"
    }).state("messageDetail", {
        url: "/personalCenter/messageList/messageDetail?Id",
        data: {
            title: "留言板详情"
        },
        templateUrl: "views/personalCenter/messagedetail.html",
        controller: "MessagedetailCtrl",
        controllerAs: "messageDetail"
    }).state("exam", {
        url: "/exam/exam?Id",
        data: {
            title: "考试"
        },
        templateUrl: "views/exam/exam.html",
        controller: "ExamCtrl",
        controllerAs: "exam"
    }).state("personaLearningArchives", {
        url: "/personalCenter/personaLearningArchives",
        data: {
            title: "个人学习档案"
        },
        templateUrl: "views/personalCenter/personalearningarchives.html",
        controller: "PersonalearningarchivesCtrl",
        controllerAs: "personaLearningArchives"
    }).state("examDetailList", {
        url: "/exam/examDetailList?Id",
        data: {
            title: "考试记录列表"
        },
        templateUrl: "views/exam/examdetaillist.html",
        controller: "ExamdetaillistCtrl",
        controllerAs: "examDetailList"
    }).state("examReview", {
        url: "/exam/examReview?examId&recordId",
        data: {
            title: "考试详情"
        },
        templateUrl: "views/exam/examreview.html",
        controller: "ExamreviewCtrl",
        controllerAs: "examReview"
    }).state("play", {
        url: "/play/play?Id",
        data: {
            title: "课程播放"
        },
        templateUrl: "views/play/play.html",
        controller: "PlayCtrl",
        controllerAs: "play"
    }).state("tryplay", {
        url: "/play/tryplay?Id",
        data: {
            title: "课程试看"
        },
        templateUrl: "views/play/tryplay.html",
        controller: "TryplayCtrl",
        controllerAs: "tryPlay"
    }).state("forgetPassword", {
        url: "/personalCenter/forgetPassword",
        data: {
            title: "忘记密码"
        },
        templateUrl: "views/personalCenter/forgetpassword.html",
        controller: "ForgetpasswordCtrl",
        controllerAs: "forgetPassword"
    }).state("userRankingList", {
        url: "/rankingList/userRankingList",
        data: {
            title: "个人排行"
        },
        templateUrl: "views/rankingList/userrankinglist.html",
        controller: "UserrankinglistCtrl",
        controllerAs: "userRankingList"
    }).state("userLogin", {
        url: "/userLogin?name&params&page",
        data: {
            title: "登录"
        },
        templateUrl: "views/Do/login.html",
        controller: "LoginCtrl",
        controllerAs: "LoginCtrl"
    }).state("rankgroup", {
        url: "/rankingList/rankgroup",
        data: {
            title: "单位排行"
        },
        templateUrl: "views/rankingList/rankgroup.html",
        controller: "RankgroupCtrl",
        controllerAs: "rankGroup"
    }).state("rankcourseclick", {
        url: "/rankingList/rankcourseclick",
        data: {
            title: "课程点击排行"
        },
        templateUrl: "views/rankingList/rankcourseclick.html",
        controller: "RankcourseclickCtrl",
        controllerAs: "rankCourseClick"
    }).state("rankcoursefinish", {
        url: "/rankingList/rankcoursefinish",
        data: {
            title: "学完课程排行"
        },
        templateUrl: "views/rankingList/rankcoursefinish.html",
        controller: "RankcoursefinishCtrl",
        controllerAs: "rankCourseFinish"
    }).state("rankloginsum", {
        url: "/rankingList/rankloginsum",
        data: {
            title: "登录次数排行"
        },
        templateUrl: "views/rankingList/rankloginsum.html",
        controller: "RankloginsumCtrl",
        controllerAs: "rankLoginSum"
    }).state("software", {
        url: "/Do/software",
        data: {
            title: "必装软件"
        },
        templateUrl: "views/Do/software.html",
        controller: "SoftwareCtrl",
        controllerAs: "Software"
    }).state("originalarticle", {
        url: "/news/originalarticle",
        data: {
            title: "发表心声"
        },
        templateUrl: "views/news/originalarticle.html",
        controller: "OriginalarticleCtrl",
        controllerAs: "originalArticle"
    }).state("originalarticlelist", {
        url: "/news/originalarticlelist",
        data: {
            title: "学员心声列表"
        },
        templateUrl: "views/news/originalarticlelist.html",
        controller: "OriginalarticlelistCtrl",
        controllerAs: "originalArticleList"
    }).state("classlist", {
        url: "/trainingClass/classlist?type",
        data: {
            title: "我的班级"
        },
        templateUrl: "views/trainingClass/classlist.html",
        controller: "ClasslistCtrl",
        controllerAs: "classList"
    }).state("polllist", {
        url: "/exam/polllist",
        data: {
            title: "问卷列表"
        },
        templateUrl: "views/exam/polllist.html",
        controller: "PolllistCtrl",
        controllerAs: "pollList"
    }).state("poll", {
        url: "/exam/poll?Id",
        data: {
            title: "投票"
        },
        templateUrl: "views/exam/poll.html",
        controller: "PollCtrl",
        controllerAs: "poll"
    }).state("pollreview", {
        url: "/exam/pollreview?parameter1&parameter2",
        data: {
            title: "投票结果"
        },
        templateUrl: "views/exam/pollreview.html",
        controller: "PollreviewCtrl",
        controllerAs: "pollReview"
    }).state("userRegister", {
        url: "/Do/userRegister",
        data: {
            title: "注册"
        },
        templateUrl: "views/Do/register.html",
        controller: "RegisterCtrl"
    }).state("library", {
        url: "/library",
        data: {
            title: "电子书"
        },
        templateUrl: "views/library/library.html",
        controller: "LibraryCtrl",
        controllerAs: "library"
    }).state("bookdetail", {
        url: "/library/bookdetail?Id",
        data: {
            title: "图书详情"
        },
        templateUrl: "views/library/bookdetail.html",
        controller: "BookdetailCtrl",
        controllerAs: "bookDetail"
    }).state("bookchapter", {
        url: "/library/bookchapter?bookId",
        data: {
            title: "图书章节"
        },
        templateUrl: "views/library/bookchapter.html",
        controller: "BookchapterCtrl",
        controllerAs: "bookChapter"
    }).state("bookchaptercontent", {
        url: "/library/bookchaptercontent?Id",
        data: {
            title: "章节内容"
        },
        templateUrl: "views/library/bookchaptercontent.html",
        controller: "BookchaptercontentCtrl",
        controllerAs: "bookChapterContent"
    }).state("article", {
        url: "/news/article?categoryCode&title",
        data: {
            title: "文章"
        },
        templateUrl: "views/news/article.html",
        controller: "ArticleCtrl",
        controllerAs: "article"
    }).state("collegeinfo", {
        url: "/Do/collegeinfo",
        data: {
            title: "平台介绍"
        },
        templateUrl: "views/Do/collegeinfo.html",
        controller: "CollegeinfoCtrl",
        controllerAs: "collegeInfo"
    }).state("studentstyle", {
        url: "/Do/studentstyle",
        data: {
            title: "学员风采"
        },
        templateUrl: "views/Do/studentstyle.html",
        controller: "StudentstyleCtrl",
        controllerAs: "studentStyle"
    }).state("studentstyledetail", {
        url: "/Do/studentstyledetail?Id",
        data: {
            title: "我的风采"
        },
        templateUrl: "views/Do/studentstyledetail.html",
        controller: "StudentstyledetailCtrl",
        controllerAs: "studentStyleDetail"
    }).state("resultshow", {
        url: "/Do/resultshow",
        data: {
            title: "成果展示"
        },
        templateUrl: "views/Do/resultshow.html",
        controller: "ResultshowCtrl",
        controllerAs: "resultShow"
    }).state("speciallearning", {
        url: "/speciallearning",
        data: {
            title: "专题学习"
        },
        templateUrl: "views/specialLearning/speciallearning.html",
        controller: "SpeciallearningCtrl",
        controllerAs: "specialLearning"
    }).state("speciallearningone", {
        url: "/speciallearning/speciallearningone",
        data: {
            title: "习近平重要讲话精神"
        },
        templateUrl: "views/specialLearning/speciallearningone.html",
        controller: "SpeciallearningoneCtrl",
        controllerAs: "specialLearningOne"
    }).state("shoppingcart", {
        url: "/shopping/shoppingcart",
        data: {
            title: "购物车"
        },
        templateUrl: "views/shopping/shoppingcart.html",
        controller: "ShoppingcartCtrl",
        controllerAs: "ShoppingCart"
    }).state("orderdetaillist", {
        url: "/shopping/orderdetaillist?orderId",
        data: {
            title: "订单详细"
        },
        templateUrl: "views/shopping/orderdetaillist.html",
        controller: "OrderdetaillistCtrl",
        controllerAs: "orderDetailList"
    }).state("payconfirm", {
        url: "/shopping/payconfirm?orderId",
        data: {
            title: "支付确认"
        },
        templateUrl: "views/shopping/payconfirm.html",
        controller: "PayconfirmCtrl",
        controllerAs: "payConfirm"
    }).state("orderconfirm", {
        url: "/shopping/orderconfirm?invoiceId",
        data: {
            title: "订单确认"
        },
        templateUrl: "views/shopping/orderconfirm.html",
        controller: "OrderconfirmCtrl",
        controllerAs: "orderConfirm"
    }).state("orderlist", {
        url: "/shopping/orderlist",
        data: {
            title: "我的订单"
        },
        templateUrl: "views/shopping/orderlist.html",
        controller: "OrderlistCtrl",
        controllerAs: "orderList"
    }).state("invoicelist", {
        url: "/shopping/invoicelist",
        data: {
            title: "我的发票"
        },
        templateUrl: "views/shopping/invoicelist.html",
        controller: "InvoicelistCtrl",
        controllerAs: "invoiceList"
    }).state("applyinvoice", {
        url: "/shopping/applyinvoice",
        data: {
            title: "申请发票"
        },
        templateUrl: "views/shopping/applyinvoice.html",
        controller: "ApplyinvoiceCtrl",
        controllerAs: "applyInvoice"
    }).state("printcertificate", {
        url: "/Do/printcertificate",
        data: {
            title: "打印证书"
        },
        templateUrl: "views/Do/printcertificate.html",
        controller: "PrintcertificateCtrl",
        controllerAs: "printCertificate"
    }).state("gybClassList", {
        url: "/Do/gybClassList?Id&title",
        data: {
            title: "培训班列表"
        },
        templateUrl: "views/Do/gybclasslist.html",
        controller: "GybclasslistCtrl",
        controllerAs: "gybClassList"
    }),
    i.otherwise("/error"),
    e.defaults.headers.post = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    e.defaults.withCredentials = !0,
    n.setOptions({
        delay: 3e3,
        startTop: 20,
        startRight: 20
    })
}
]).run(["$rootScope", "$location", "$http", "$state", "$loading", "commonService", function(n, t, l, r, o, d) {
    var c = null;
    n.$on("$stateChangeStart", function(e, a, t, i, s) {
        clearInterval(c),
        n.rememberName = a.name,
        n.rememberParams = JSON.stringify(t),
        ga("set", "page", a.url),
        ga("send", "pageview"),
        "main" != a.name && "main2" != a.name && "userLogin" != a.name && "userRegister" != a.name && "forgetPassword" != a.name && $.ajax({
            type: "POST",
            async: !1,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            url: ALL_PORT.Authorization.url,
            data: $.extend({}, ALL_PORT.Authorization.data, {
                action: a.name
            }),
            success: function(t) {
                1 == t.isauth ? t.p && "modifyPassword" != a.name && d.alertMs("密码强度低，请修改密码！", function() {
                    e.preventDefault(),
                    r.go("modifyPassword")
                }) : 3 == t.Type ? (alert("在其他设备上已经登录"),
                e.preventDefault(),
                r.go("main")) : 9 == t.Type ? (alert("在其他平台登录或被其他人登录"),
                e.preventDefault(),
                r.go("main")) : 10 == t.Type ? (alert("您还不是本平台会员，将前往您所在的平台:" + t.Message),
                window.open("http://" + t.Message, "_blank")) : 11 == t.Type ? (alert(t.Message),
                e.preventDefault(),
                r.go("main")) : 13 == t.Type ? (e.preventDefault(),
                alert(t.Message),
                r.go("main")) : 15 == t.Type ? alert(t.Type + ":" + t.Message) : 20 == t.Type || (alert("请登录！"),
                e.preventDefault(),
                r.go("main"))
            },
            error: function() {
                alert("服务器出错！请等待！"),
                e.preventDefault(),
                r.go("main")
            }
        })
    }),
    n.$on("$stateChangeSuccess", function(t, e, a, i, s) {
        n.pageTitle = r.current.data.title,
        c = setInterval(function() {
            l({
                method: "GET",
                url: ALL_PORT.KeepOnline.url + "?_=" + +new Date
            }).success(function(t) {})
        }, 6e4),
        o.setDefaultOptions({
            text: ""
        })
    }),
    n.$on("$viewContentLoading", function(t, e) {
        r.current.data ? n.pageTitle = r.current.data.title : n.pageTitle = "衢州市专业技术人员继续教育学习平台"
    })
}
]),
angular.module("luZhouApp").controller("MainCtrl", ["$scope", "$timeout", "$interval", "$rootScope", "$cookieStore", "$state", "commonService", "$loading", "$location", "$stateParams", function(a, t, e, i, s, n, l, r, o, d) {
    var c = l.AntiForgeryToken();
    a.showNoClass = !1,
    a.showNoCourse = !1,
    a.showNoSpecialClass = !1,
    a.showLogin = !1,
    a.showError = !1,
    a.showError2 = !1,
    a.login = {
        Account: "",
        PassWord: "",
        RememberMe: !0
    };
    var p = l.getCookie
      , u = l.setCookie
      , m = l.delCookie;
    if (a.disableAlert = p("disableAlert-main") || 0,
    p("RM")) {
        var g = TBase64.decode(p("RM")).split("|")
          , v = (g[0],
        g[1])
          , f = g[2];
        a.login.Account = v,
        a.login.PassWord = f,
        a.login.RememberMe = !0
    } else
        a.login = {
            Account: "",
            PassWord: "",
            RememberMe: !0
        };
    function h() {
        if (a.login.RememberMe) {
            var t = a.login.RememberMe + "|" + a.login.Account + "|" + a.login.PassWord;
            u("RM", TBase64.encode(t), 7)
        } else
            m("RM")
    }
    a.getInfoMessage = function() {
        l.getData(ALL_PORT.LoginShort.url, "POST", ALL_PORT.LoginShort.data).then(function(t) {
            if (a.userMessage = t.Data.Model,
            a.userAllMessage = t.Data,
            a.userMessage.Name ? (a.showLogin = !1,
            "管理员" == a.userAllMessage.UserType ? a.userMessage.GroupName && "请选择" != a.userMessage.GroupName || l.alertMs("请选择主管行业", function() {
                n.go("changeUser")
            }) : 0 != a.userMessage.BatchId && "请选择" != a.userMessage.BatchName && a.userMessage.GroupName && "请选择" != a.userMessage.GroupName ? 0 <= [2, 3, 5, 6, 7, 8, 9].indexOf(a.userMessage.GroupId) && l.alertMs("当前主管行业错误，请选择子级主管行业", function() {
                n.go("changeUser")
            }) : l.alertMs("请选择主管行业和专业序列", function() {
                n.go("changeUser")
            })) : a.showLogin = !0,
            a.showLogin && !Number(a.disableAlert))
                var e = setInterval(function() {
                    0 < $(".alert_modal").length && (clearInterval(e),
                    $(".alert_modal").modal({
                        backdrop: "static",
                        show: !0
                    }))
                }, 100)
        })
    }
    ,
    a.getInfoMessage(),
    a.closeAlertModal = function() {
        var t = Number(a.disableAlert) ? 1 : 0;
        u("disableAlert-main", t),
        $(".alert_modal").modal("hide")
    }
    ,
    a.inputChange = function() {}
    ,
    a.inputFocus = function() {
        a.showError = !1,
        a.showError2 = !1
    }
    ,
    a.loginOut = l.loginOut,
    a.clickLogin = function() {
        l.limitSubmit(function() {
            ga("send", "event", "login", "click", "首页登录");
            var t = $.extend({}, a.login);
            t.PassWord = SM4encrypt(t.PassWord);
            if (!a.login.Account || !a.login.PassWord)
                return a.showError2 = !0,
                void (a.showError = !1);
            r.start("userLogin"),
            l.getData(API_URL + "/Page/LoginCode", "POST", $.extend({}, t, c)).then(function(t) {
                if (r.finish("userLogin"),
                0 == t.Type && "账号或密码错误" != t.Message)
                    a.showError = !0,
                    a.showError2 = !1,
                    l.alertMs(t.Message);
                else if (0 == t.Type)
                    a.showError = !0,
                    a.showError2 = !1;
                else if (1 == t.Type)
                    h(),
                    window.location.reload();
                else if (2 == t.Type)
                    h(),
                    l.alertMs("首次登录，请设置密保！"),
                    n.go("securitySetting");
                else {
                    if (3 == t.Type)
                        return !!window.confirm("帐号在别的地方登录，是否踢出？") && (function e(t) {
                            l.getData(API_URL + "/Page/KickOut", "POST", $.extend({}, ALL_PORT.LoginOut.data, {
                                kickUserId: t
                            }, c)).then(function(t) {
                                1 == t.Type && a.clickLogin()
                            })
                        }(t.Message),
                        !0);
                    if (4 == t.Type)
                        l.alertMs("此电脑已经有用户登录，您不能用其他帐号再次登录！");
                    else if (5 == t.Type)
                        l.alertMs("平台当前在线人数到达上限，请稍后再试！");
                    else if (6 == t.Type)
                        l.alertMs(t.Message);
                    else if (7 == t.Type)
                        ;
                    else {
                        if (10 == t.Type)
                            return void l.alertMs("您还不是本平台成员，将为您转向您所在的平台：" + t.Message, 2);
                        11 == t.Type ? l.alertMs(t.Message) : 12 == t.Type || 13 == t.Type ? l.alertMs(t.Message) : 14 == t.Type ? l.alertMs(t.Message, 2, function() {
                            n.go("modifyPassword")
                        }, function() {
                            h(),
                            window.location.reload()
                        }) : l.alertMs(t.Message)
                    }
                }
            })["catch"](function(t) {
                r.finish("userLogin"),
                alert("登陆异常")
            })
        })
    }
    ,
    a.closeAlertModal1 = function(t) {
        $(".alert_modal1").modal("hide"),
        t && window.open("https://portal.zjzwfw.gov.cn/uc/sso/login?appId=A330801395944202106014821_1&sp=")
    }
    ,
    a.openAlertModal1 = function(t) {
        var e = setInterval(function() {
            0 < $(".alert_modal1").length && (clearInterval(e),
            $(".alert_modal1").modal({
                backdrop: "static",
                show: !0
            }))
        }, 100)
    }
    ,
    r.start("noticeAnnouncement"),
    l.getData(ALL_PORT.noticeAnnouncement.url, "POST", $.extend({}, ALL_PORT.noticeAnnouncement.data, {
        rows: 8
    })).then(function(t) {
        r.finish("noticeAnnouncement"),
        a.noticeData = t.Data
    });
    var y = {
        page: "1",
        rows: 6,
        sort: "Sort",
        order: "desc",
        flag: "All",
        courseType: "All",
        wordLimt: "35",
        channelId: "",
        title: "",
        classTypeId: 1
    };
    a.courseCenterData = {},
    a.imageCourse = "",
    a.showNoCourse = !1,
    a.searchCourseList = function(t) {
        r.start("courseList"),
        y.channelId = t || "",
        a.channelId = t,
        l.getData(ALL_PORT.CourseListForIndex.url, "POST", y).then(function(t) {
            r.finish("courseList"),
            a.courseCenterData = t.Data.ListData,
            a.imageCourse = t.Data.ImageCourse,
            a.showNoCourse = 0 == t.Data.ListData.length
        })
    }
    ,
    a.searchCourseList(),
    a.renderFinish = function() {
        $(".courseLink>.btn").on("click", function() {
            $(this).addClass("active").siblings("a").removeClass("active")
        })
    }
    ,
    a.getNewsContent = function(e) {
        r.start("articleList"),
        l.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
            rows: 8,
            CategoryCode: e
        })).then(function(t) {
            r.finish("articleList"),
            a.articleListData = t.Data,
            a.articleListUrl = e
        })
    }
    ,
    a.getNewsContent("zczx"),
    a.getArticles = function(e) {
        l.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
            rows: 11,
            CategoryCode: e
        })).then(function(t) {
            a[e] = t.Data.ListData
        })
    }
    ,
    a.getArticles("zcfg"),
    l.getData(ALL_PORT.GetLink.url, "POST", ALL_PORT.GetLink.data).then(function(t) {
        a.linkData = t.Data
    }),
    a.startBannerSlide = function() {
        setTimeout(function() {
            $(".banner_slider").bxSlider({
                auto: !0,
                autoHover: !0,
                controls: !0,
                height: "100%"
            })
        }, 0)
    }
    ,
    a.bannerClick = function(t) {}
    ;
    var b, C, L, P;
    b = new Date,
    C = b.getFullYear(),
    L = b.getMonth() + 1,
    P = b.getDate(),
    2020 !== C || 4 !== L || 4 !== P && 5 !== P && 6 !== P || $("body").css({
        filter: "grayscale(100%)",
        "-webkit-filter": "grayscale(100%)",
        "-moz-filter": "grayscale(100%)",
        "-ms-filter": "grayscale(100%)",
        "-o-filter": "grayscale(100%)",
        filter: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")",
        filter: "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "-webkit-filter": "grayscale(1)"
    }),
    a.$on("$destroy", function() {
        $("body").removeAttr("style")
    })
}
]),
angular.module("luZhouApp").controller("CoursecenterCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", "$http", function(s, t, e, n, a, i, l, r) {
    s.showInput1 = !0,
    s.showInput2 = !1,
    s.showInput3 = !1,
    s.recommendApi = !1,
    i.start("courseClassify"),
    s.courseClassify = [],
    n.getData(ALL_PORT.CourseCategory.url, "POST", ALL_PORT.CourseCategory.data).then(function(t) {
        i.finish("courseClassify");
        t.Data.ListData[0].state = "open",
        n.loop(t.Data.ListData[0].children),
        s.courseClassify = [{
            SunFlag: !1,
            children: null,
            id: 0,
            state: "open",
            text: "全部课程"
        }].concat(t.Data.ListData)
    });
    var o = l.title ? l.title : ""
      , d = l.channelId ? l.channelId : ""
      , c = ""
      , p = "";
    "title" === l.searchType ? p = o : "teacher" === l.searchType && (c = o),
    s.selectText = [{
        name: "课程名称",
        id: "1"
    }, {
        name: "课程类型",
        id: "2"
    }, {
        name: "主讲人",
        id: "3"
    }],
    s.videoType = [{
        name: "所有类型",
        id: "All"
    }, {
        name: "三分屏",
        id: "ThreeScreenCourse"
    }, {
        name: "单视频",
        id: "SingleCourse"
    }, {
        name: "动画类",
        id: "AnimationCourse"
    }];
    var u = {
        page: 1,
        rows: 10,
        sort: "Sort",
        order: "desc",
        courseType: "All",
        channelId: d,
        title: p,
        titleNav: "课程中心",
        wordLimt: 35,
        teacher: c,
        flag: "all",
        classTypeId: 1
    };
    s.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: u.rows
    }),
    s.searchCourse = function(t, e) {
        i.start("courseSupermarket"),
        e ? "desc" == u.order ? u.order = "Asc" : "Asc" == u.order && (u.order = "desc") : u.order = "desc";
        var a = {};
        "1" == s.selectedName ? $.extend(a, {
            teacher: "",
            title: s.searchTitle,
            courseType: s.selectedType
        }, t) : "2" == s.selectedName ? $.extend(a, {
            teacher: "",
            title: s.searchTitle,
            courseType: s.selectedType
        }, t) : "3" == s.selectedName ? $.extend(a, {
            teacher: s.searchTeacher,
            title: "",
            courseType: s.selectedType
        }, t) : $.extend(a, {
            teacher: "",
            title: "",
            courseType: ""
        }, t),
        s.recommendApi = !1,
        $.extend(u, a),
        s.paginationConf.currentPage = u.page,
        n.getData(ALL_PORT.CourseList.url, "POST", u).then(function(t) {
            i.finish("courseSupermarket"),
            s.courseSupermarketData = t.Data,
            s.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    s.judgement = function() {
        s.searchTitle = "",
        s.searchTeacher = "",
        s.selectedType = "All",
        "1" == s.selectedName ? (s.showInput1 = !0,
        s.showInput2 = !1,
        s.showInput3 = !1) : "2" == s.selectedName ? (s.showInput1 = !1,
        s.showInput2 = !0,
        s.showInput3 = !1) : "3" == s.selectedName && (s.showInput1 = !1,
        s.showInput2 = !1,
        s.showInput3 = !0)
    }
    ,
    s.getRecommendCourse = function(t) {
        s.recommendApi = !0,
        i.start("courseSupermarket"),
        n.getData(ALL_PORT.RecommendCourse.url, "POST", $.extend({}, ALL_PORT.RecommendCourse.data, {
            page: 1,
            rows: 10
        }, t)).then(function(t) {
            i.finish("courseSupermarket"),
            s.courseSupermarketData = t.Data,
            s.courseSupermarketData.ChannelName = "智能推荐",
            s.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    s.$watch("paginationConf.currentPage", function() {
        var t = {
            page: s.paginationConf.currentPage
        };
        s.recommendApi ? s.getRecommendCourse(t) : s.searchCourse(t)
    }),
    s.selectClass = {};
    var m = n.AntiForgeryToken();
    s.checkAll = function() {
        $(":checkbox").each(function() {
            "disabled" != $(this).attr("disabled") && $(this).prop("checked", !0)
        })
    }
    ,
    s.selectInvert = function() {
        $(":checkbox").each(function() {
            "disabled" != $(this).attr("disabled") && ($(this).prop("checked") ? $(this).prop("checked", !1) : $(this).prop("checked", !0))
        })
    }
    ,
    s.ckBatch = function(t, e, a) {
        $(".block1 input[type='checkbox'][name='subcheck']:checked").length;
        var i = "";
        $(".block1 input[type='checkbox'][name='subcheck']:checked").each(function() {
            0 !== $(this).val() && (i += $(this).val() + ",")
        }),
        "" !== (s.selectClass.checkValue = i) ? n.getData(ALL_PORT.AddStudyCourse.url, "POST", $.extend({}, ALL_PORT.AddStudyCourse.data, s.selectClass, m)).then(function(t) {
            0 < t.Type && (n.alertMs(t.Message),
            s.recommendApi ? s.getRecommendCourse() : s.searchCourse())
        }) : n.alertMs("您没有选择可添加的课程！")
    }
    ,
    i.start("courseRankingList"),
    n.getData(ALL_PORT.CourseClickRank.url, "POST", $.extend({}, ALL_PORT.CourseClickRank.data, {
        rows: 15
    })).then(function(t) {
        i.finish("courseRankingList"),
        s.courseRankingList = t.Data
    })
}
]),
angular.module("luZhouApp").controller("PersonalcenterCtrl", ["$scope", "$http", "$state", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(s, e, n, t, a, i, l, r, o) {
    s.$on("$stateChangeSuccess", function() {
        if (s.stateName = n.current.name,
        "personalCenter" == s.stateName) {
            s.token = l.AntiForgeryToken(),
            s.selectedName = {},
            s.searchTitle = "",
            s.courseStatus = [{
                name: "所有",
                id: "All"
            }, {
                name: "正在学习课程",
                id: "Unfinish"
            }, {
                name: "指定课程",
                id: "Appointed"
            }, {
                name: "已完成课程",
                id: "Finish"
            }],
            s.vm = {};
            var a = {
                page: 1,
                rows: 10,
                sort: "BrowseScore",
                order: "desc",
                titleNav: "个人中心",
                courseType: "Unfinish",
                title: ""
            };
            s.paginationConf = $.extend({}, paginationConf, {
                itemsPerPage: a.rows
            }),
            s.searchMyCenterCourse = function(t) {
                o.start("myCenter");
                var e = $.extend(a, t);
                t && t.page && (s.paginationConf.currentPage = e.page),
                l.getData(ALL_PORT.MyCenter.url, "POST", e).then(function(t) {
                    o.finish("myCenter"),
                    s.TotalData = t.Data,
                    "Unfinish" == e.courseType ? (s.vm.activeTab = 1,
                    s.paginationConf.totalItems = t.Data.UnfinishCount) : "Appointed" == e.courseType ? (s.vm.activeTab = 2,
                    s.paginationConf.totalItems = t.Data.AppointedCount) : "Finish" == e.courseType ? (s.vm.activeTab = 3,
                    s.paginationConf.totalItems = t.Data.FinishCount) : "All" == e.courseType && (1 == s.vm.activeTab ? s.paginationConf.totalItems = t.Data.UnfinishCount : 2 == s.vm.activeTab ? s.paginationConf.totalItems = t.Data.AppointedCount : 3 == s.vm.activeTab && (s.paginationConf.totalItems = t.Data.FinishCount))
                })
            }
            ,
            s.learningProgress = function(t) {
                "▼" == $(".getorder span").html() ? ($(".getorder span").html("▲"),
                s.searchMyCenterCourse({
                    order: "asc",
                    courseType: t
                })) : ($(".getorder span").html("▼"),
                s.searchMyCenterCourse({
                    order: "desc",
                    courseType: t
                }))
            }
            ,
            s.$watch("paginationConf.currentPage", function() {
                var t = {
                    page: s.paginationConf.currentPage,
                    title: s.searchTitle
                };
                s.searchMyCenterCourse(t)
            }),
            s.judgementTab = function() {
                1 == s.vm.activeTab ? s.searchMyCenterCourse({
                    courseType: "Unfinish",
                    title: s.searchTitle
                }) : 2 == s.vm.activeTab ? s.searchMyCenterCourse({
                    courseType: "Appointed",
                    title: s.searchTitle
                }) : s.searchMyCenterCourse({
                    courseType: "Finish",
                    title: s.searchTitle
                })
            }
            ,
            s.modalBody1 = !0,
            s.modalBody2 = !1,
            s.modalBody21 = !0,
            s.courseId = "",
            s.nodeAdd = function(t) {
                s.courseId = t,
                s.modalBody1 = !0,
                s.modalBody2 = !1,
                l.getData(ALL_PORT.NoteAdd.url, "POST", $.extend({}, ALL_PORT.NoteAdd.data, {
                    courseId: t
                })).then(function(t) {
                    s.nodeAddData = t.Data,
                    s.noteName = "",
                    s.noteContent = ""
                })
            }
            ,
            s.editNote = function(e) {
                l.limitSubmit(function() {
                    var t = $.extend({}, ALL_PORT.AddNote.data, s.token, e);
                    t.Name.length < 2 ? l.alertMs("笔记名称字数不能少于2个字！") : t.Content.length < 7 ? l.alertMs("笔记内容字数不能少于7个字") : 249 <= t.Content.length ? l.alertMs("笔记内容字数不能超过249个字") : 2 <= t.Name.length && t.Content.length < 249 && l.getData(ALL_PORT.AddNote.url, "POST", t).then(function(t) {
                        $(".modal").modal("hide"),
                        l.alertMs("添加完成！"),
                        s.judgementTab()
                    })
                })
            }
            ,
            s.courseName = "",
            s.seeNote = function(t, e) {
                s.courseId = t,
                s.courseName = e,
                s.modalBody1 = !1,
                s.modalBody2 = !0,
                s.modalBody21 = !0,
                l.getData(ALL_PORT.CourseNoteList.url, "POST", $.extend({}, ALL_PORT.CourseNoteList.data, {
                    CourseId: t
                })).then(function(t) {
                    t.Data.CourseName = e,
                    s.seeNoteData = t.Data
                })
            }
            ,
            s.noteid = "",
            s.noteUpdate = function(t) {
                s.noteid = t,
                s.modalBody1 = !1,
                s.modalBody2 = !0,
                s.modalBody21 = !1,
                e.get(ALL_PORT.NoteUpdate.url, {
                    params: {
                        noteid: t
                    }
                }).success(function(t) {
                    s.noteName = t.Name,
                    s.noteContent = t.Content
                })
            }
            ,
            s.addNoteUpdate = function(t) {
                l.limitSubmit(function() {
                    l.getData(ALL_PORT.NoteUpdate.url, "POST", $.extend({}, ALL_PORT.NoteUpdate.data, s.token, t, {
                        Id: s.noteid
                    })).then(function(t) {
                        1 == t.Type && (l.alertMs("更新成功"),
                        $(".modal").modal("hide"))
                    })
                })
            }
            ,
            s.delNote = function(t) {
                l.limitSubmit(function() {
                    l.getData(ALL_PORT.DelNote.url, "POST", $.extend({}, ALL_PORT.DelNote.data, s.token, {
                        Id: t
                    })).then(function(t) {
                        1 == t.Type && (l.alertMs("删除成功！"),
                        s.seeNote(s.courseId, s.courseName),
                        s.judgementTab())
                    })
                })
            }
            ,
            s.remindCycle = ["每天一次", "每周一次", "每月一次"],
            s.planAdd = function(t) {
                s.modalBody1 = !0,
                s.modalBody2 = !1,
                l.getData(ALL_PORT.StudyPlanAdd.url, "POST", $.extend({}, ALL_PORT.StudyPlanAdd.data, {
                    courseId: t
                })).then(function(t) {
                    s.selectedName2 = s.remindCycle[0],
                    s.planAddData = t.Data,
                    s.PlanFinishDate = l.dateFilter(t.Data.PlanFinishDate, "yyyy-MM-dd"),
                    s.RemindDate = l.dateFilter(t.Data.RemindDate, "yyyy-MM-dd")
                })
            }
            ,
            s.addPlan = function(e) {
                l.limitSubmit(function() {
                    var t = $.extend({}, ALL_PORT.AddStudyPlan.data, s.token, e);
                    t.Remark.length < 7 ? l.alertMs("计划内容字数不能少于7个字！") : 249 <= t.Remark.length ? l.alertMs("计划内容字数不能超过249个字") : l.getData(ALL_PORT.AddStudyPlan.url, "POST", t).then(function(t) {
                        $(".modal").modal("hide"),
                        l.alertMs("添加完成！"),
                        s.judgementTab()
                    })
                })
            }
            ,
            s.seePlan = function(t, e) {
                s.courseId = t,
                s.courseName = e,
                s.modalBody1 = !1,
                s.modalBody2 = !0,
                l.getData(ALL_PORT.StudyPlanUpdate.url, "POST", $.extend({}, ALL_PORT.StudyPlanUpdate.data, {
                    courseId: t
                })).then(function(t) {
                    t.Data.CourseName = e,
                    s.seePlanData = t.Data,
                    s.selectedName3 = t.Data.RemindCycle,
                    s.PlanFinishDate2 = l.dateFilter(t.Data.PlanFinishDate, "yyyy-MM-dd"),
                    s.RemindDate2 = l.dateFilter(t.Data.RemindDate, "yyyy-MM-dd")
                })
            }
            ,
            s.addPlanUpdate = function(e) {
                l.limitSubmit(function() {
                    var t = $.extend({}, ALL_PORT.EditStudyPlanUpdate.data, s.token, e);
                    t.Remark.length < 7 ? l.alertMs("计划内容字数不能少于7个字！") : 249 <= t.Remark.length ? l.alertMs("计划内容字数不能超过249个字") : l.getData(ALL_PORT.EditStudyPlanUpdate.url, "POST", t).then(function(t) {
                        $(".modal").modal("hide"),
                        l.alertMs(t.Message),
                        s.judgementTab()
                    })
                })
            }
            ,
            s.deleatUserCourse = function(t) {
                l.limitSubmit(function() {
                    l.getData(ALL_PORT.DelUserCourseReg.url, "POST", $.extend({}, ALL_PORT.DelUserCourseReg.data, s.token, {
                        courseId: t
                    })).then(function(t) {
                        1 == t.Type ? (l.alertMs(t.Message),
                        s.judgementTab()) : 0 == t.Type && l.alertMs(t.Message)
                    })
                })
            }
            ,
            s.courseExamList = function(t) {
                l.getData(ALL_PORT.CourseExamList.url, "POST", $.extend({}, ALL_PORT.CourseExamList.data, {
                    courseId: t
                })).then(function(t) {
                    s.courseExamListData = t.Data
                })
            }
            ,
            s.havTest = function(a) {
                var i = window.open("about:blank", "_blank")
                  , t = $.extend({}, ALL_PORT.Exam.data, s.token, {
                    parameter1: a
                });
                l.getData(ALL_PORT.Exam.url, "POST", t).then(function(t) {
                    if (t.Type)
                        i.close(),
                        l.alertMs(t.Message);
                    else {
                        var e = n.href("exam", {
                            Id: a
                        });
                        i.location.href = e
                    }
                })
            }
        }
    })
}
]),
angular.module("luZhouApp").controller("TestcenterCtrl", ["$scope", "$timeout", "$rootScope", "$state", "$cookieStore", "commonService", "$location", "$loading", function(e, t, a, s, i, n, l, r) {
    e.token = n.AntiForgeryToken(),
    e.selectedName = {},
    e.searchTitle = "",
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 5
    }),
    e.courseStatus = [{
        name: "全部",
        id: "All"
    }, {
        name: "已完成",
        id: "Finish"
    }, {
        name: "未完成",
        id: "UnFinish"
    }],
    e.vm = {
        activeTab: 1
    };
    var o = {
        page: 1,
        rows: 5,
        examType: "All",
        title: "",
        sort: "Id",
        order: "desc",
        titleNav: "在线考试"
    };
    e.searchMyCenterCourse = function(t) {
        r.start("examList"),
        $.extend(o, t),
        e.vm.activeTab = "Finish" == o.examType ? 3 : 1,
        n.getData(ALL_PORT.ExamList.url, "POST", o).then(function(t) {
            r.finish("examList"),
            e.TotalData = t.Data,
            e.paginationConf.currentPage = "Finish" == o.examType ? (e.paginationConf.totalItems = null == t.Data.FinishCount ? 0 : t.Data.FinishCount,
            t.Data.FinishPage) : (e.paginationConf.totalItems = null == t.Data.UnFinishCount ? 0 : t.Data.UnFinishCount,
            t.Data.UnFinishPage)
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage,
            title: e.searchTitle
        };
        e.searchMyCenterCourse(t)
    }),
    e.havTest = function(a) {
        var i = window.open("about:blank", "_blank")
          , t = $.extend({}, ALL_PORT.Exam.data, e.token, {
            parameter1: a
        });
        n.getData(ALL_PORT.Exam.url, "POST", t).then(function(t) {
            if (t.Type)
                i.close(),
                n.alertMs(t.Message);
            else {
                var e = s.href("exam", {
                    Id: a
                });
                i.location.href = e
            }
        })
    }
}
]),
angular.module("luZhouApp").filter("dateFilter", function() {
    return function(t) {
        return t ? t = -1 < t.indexOf("Date") ? t.match(/\d+/gi)[0] : (t = t.replace("-", "/"),
        new Date(t)) : ""
    }
}).filter("wordLimit", function() {
    return function(t, e) {
        if ("string" == typeof t)
            return t.length > e ? t.substring(0, e) + "..." : t
    }
}).filter("trustHtml", ["$sce", function(e) {
    return function(t) {
        return e.trustAsHtml(t)
    }
}
]).filter("formatSeconds", function() {
    return function(t) {
        if (t) {
            var e = parseInt(t)
              , a = 0
              , i = 0;
            60 < e && (a = parseInt(e / 60),
            e = parseInt(e % 60),
            60 < a && (i = parseInt(a / 60),
            a = parseInt(a % 60)));
            var s = parseInt(e) + "秒";
            return 0 < a && (s = parseInt(a) + "分" + s),
            0 < i && (s = parseInt(i) + "小时" + s),
            s
        }
    }
}).filter("delHtmlTag", function() {
    return function(t) {
        if (t)
            return t.replace(/<[^>]+>|&nbsp;| /gi, "")
    }
}),
angular.module("luZhouApp").service("commonService", ["$http", "$cookies", "$cookieStore", "$timeout", "$location", "$loading", "$q", "$interval", "antiForgeryToken", "$state", "Notification", function(r, t, e, a, i, s, o, n, l, d, c) {
    this.alertMs = function(t, e, s, n) {
        var a = {
            warnType: 1,
            Title: "消息",
            Message: "错误",
            theme: "blue"
        }
          , i = {
            HTML: function(t) {
                var e = '<div id="msOut">    <div id="msBox">        <div class="msTitle">' + t.Title + '</div>        <div class="msMessage">' + t.Message + '</div>        <div class="msBtn">            <span class="msConfirm">确定</span>' + (2 == t.warnType ? '<span class="msReject">取消</span>' : "") + '        </div>    </div>    <div class="msLayer"></div></div>';
                $("body").append(e),
                this.CSS(t)
            },
            CSS: function(t) {
                var e = {
                    red: "#db1011",
                    blue: "#57a9ef",
                    green: "#8bb166",
                    yellow: "#FFFF66"
                }
                  , a = e[t.theme];
                for (var i in e)
                    if (i == t.theme) {
                        a = e[i];
                        break
                    }
                $("#msOut").css({
                    width: "100%",
                    height: "100%",
                    zIndex: "99999",
                    position: "fixed",
                    top: "0",
                    left: "0"
                }),
                $(".msLayer").css({
                    width: "100%",
                    height: "100%",
                    filter: "Alpha(opacity=40)",
                    backgroundColor: "#000",
                    opacity: "0.4"
                }),
                $("#msBox").css({
                    width: "500px",
                    height: "300px",
                    zIndex: "99999",
                    position: "absolute",
                    opacity: "0"
                }),
                $(".msTitle").css({
                    display: "block",
                    fontSize: "14px",
                    color: "#333",
                    padding: "10px 15px",
                    backgroundColor: "#f0f4f7",
                    borderRadius: "10px 10px 0 0",
                    borderBottom: "3px solid " + a,
                    fontWeight: "bold"
                }),
                $(".msMessage").css({
                    padding: " 50px",
                    "line-height": " 22px",
                    "background-color": "#393D49",
                    color: "#fff",
                    "font-weight": "300",
                    overflow: "hidden",
                    "text-overflow": "ellipsis"
                }),
                $(".msBtn").css({
                    padding: "15px 0 10px 0",
                    borderRadius: "0 0 10px 10px",
                    textAlign: "center",
                    "background-color": "#f0f4f7"
                }),
                $(".msConfirm").css({
                    display: "inline-block",
                    height: "28px",
                    "line-height": "28px",
                    margin: "0 6px",
                    padding: "0 15px",
                    border: "1px solid" + a,
                    "background-color": a,
                    color: " #fff",
                    "border-radius": "2px",
                    "font-weight": "400",
                    cursor: "pointer",
                    "text-decoration": "none"
                }),
                $(".msReject").css({
                    display: "inline-block",
                    height: "28px",
                    "line-height": "28px",
                    margin: "0 6px",
                    padding: "0 15px",
                    border: "1px solid #dedede",
                    "background-color": "#f1f1f1",
                    color: "#333",
                    "border-radius": "2px",
                    "font-weight": "400",
                    cursor: "pointer",
                    "text-decoration": "none"
                }),
                this.Event(s, n)
            },
            Event: function(t, e) {
                var a = document.documentElement.clientWidth
                  , i = document.documentElement.clientHeight
                  , s = $("#msBox").width()
                  , n = $("#msBox").height();
                $("#msBox").css({
                    left: (a - s) / 2 + "px"
                }),
                $("#msBox").stop().animate({
                    top: (i - n) / 2 + "px",
                    opacity: "1"
                }, 250),
                $(".msConfirm").click(function() {
                    $("#msBox").stop().animate({
                        top: "0",
                        opacity: "0"
                    }, 250, function() {
                        $("#msOut").remove()
                    }),
                    "function" == typeof t && (t(),
                    $(".msOut").remove())
                }),
                $(".msReject").click(function() {
                    $("#msBox").stop().animate({
                        top: "0",
                        opacity: "0"
                    }, 250, function() {
                        $("#msOut").remove()
                    }),
                    "function" == typeof e && (e(),
                    $(".msOut").remove())
                })
            }
        };
        "string" == typeof t ? (a.Message = t,
        "number" == typeof e ? 3 != e ? (a = $.extend(a, {
            warnType: e
        }),
        i.HTML(a)) : alert(a.Message) : ("function" == typeof e && (s = e),
        i.HTML(a))) : "object" == typeof t && (a = $.extend(a, t),
        "number" == typeof e ? 3 != e ? (a = $.extend(a, {
            warnType: e
        }),
        i.HTML(a)) : alert(a.Message) : ("function" == typeof e && (a = $.extend(a, t),
        s = e),
        i.HTML(a)))
    }
    ,
    this.getCookie = function(t) {
        var e, a = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
        return (e = document.cookie.match(a)) ? unescape(e[2]) : null
    }
    ,
    this.setCookie = function(t, e, a) {
        var i = new Date;
        i.setDate(i.getDate() + a),
        document.cookie = t + "=" + escape(e) + (null == a ? "" : ";expires=" + i.toGMTString())
    }
    ,
    this.delCookie = function(t) {
        var e = new Date;
        e.setTime(e.getTime() - 1);
        var a = function i(t) {
            var e, a = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
            return (e = document.cookie.match(a)) ? unescape(e[2]) : null
        }(t);
        null != a && (document.cookie = t + "=" + a + ";expires=" + e.toGMTString())
    }
    ,
    this.keepOnline = function() {
        setInterval(function() {
            r({
                method: "GET",
                url: ALL_PORT.KeepOnline.url
            }).success(function(t) {})
        }, 6e4)
    }
    ,
    this.loginOut = function(t) {
        s.start("loginOut"),
        r({
            method: "POST",
            url: ALL_PORT.LoginOut.url,
            data: $.param($.extend({}, ALL_PORT.LoginOut.data, l.AntiForgeryToken())),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        }).success(function(t) {
            s.finish("loginOut"),
            window.open("https://portal.zjzwfw.gov.cn/uc/unifiedLogout")
        }).error(function(t, e) {})
    }
    ,
    this.AntiForgeryToken = function() {
        var i = new Object;
        return r({
            method: "POST",
            url: ALL_PORT.AntiForgeryToken.url,
            data: ALL_PORT.AntiForgeryToken.data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        }).success(function(t) {
            $("body").append('<div class="preventorgery"></div>'),
            $(".preventorgery").html(t.html);
            var e = $(".preventorgery input").val()
              , a = $(".preventorgery input").attr("name");
            return i[a] = e,
            $("div.preventorgery").remove(),
            i
        }),
        i
    }
    ,
    this.dateFilter = function(t, e) {
        if (!t)
            return "";
        function a(t) {
            return t < 10 ? "0" + t.toString() : t
        }
        if (t = t.match(/\d+/gi)[0],
        "yyyy-MM-dd hh:mm:ss" == e) {
            for (var i = [(n = new Date(Number(t))).getFullYear(), n.getMonth() + 1, n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()], s = 0; s < i.length; s++)
                i[s] = a(i[s]);
            return i.slice(0, 3).join("-") + " " + i.slice(3).join(":")
        }
        if ("yyyy-MM-dd" == e) {
            var n;
            for (i = [(n = new Date(Number(t))).getFullYear(), n.getMonth() + 1, n.getDate()],
            s = 0; s < i.length; s++)
                i[s] = a(i[s]);
            return i.join("-")
        }
    }
    ,
    this.examAllCount = function(t) {
        return t.length
    }
    ,
    this.examAllScore = function(t) {
        for (var e = 0, a = 0; a < t.length; a++)
            e += t[a].Score;
        return e
    }
    ,
    this.examAllScore2 = function(t) {
        for (var e = 0, a = 0; a < t.length; a++)
            e += t[a].Question.Score;
        return e
    }
    ,
    this.countIf = function(t) {
        for (var e = 0, a = 0; a < t.length; a++)
            0 < t[a].UserScore && e++;
        return e
    }
    ,
    this.rightScore = function(t) {
        for (var e = 0, a = 0; a < t.length; a++)
            e += t[a].UserScore;
        return e
    }
    ,
    this.JudgeStatus = function(t) {
        var e = "";
        if ("null" != t)
            switch (t) {
            case "Normal":
                e += "已报名";
                break;
            case "UnAudit":
                e += "等待审核";
                break;
            case "UnApprove":
                e += "审核未通过"
            }
        return e
    }
    ,
    this.refresh = function(e, a, i) {
        var s = 0
          , n = setInterval(function() {
            var t = (new Date).format("yyyy-MM-dd hh:mm:ss");
            r({
                method: "POST",
                url: ALL_PORT.Refresh.url,
                timeout: 1e4,
                data: $.param($.extend({}, ALL_PORT.Refresh.data, {
                    PortalId: e,
                    userId: a,
                    courseid: i,
                    time: t
                }))
            }).success(function(t) {
                if (s = 0,
                t)
                    if (401 === t.Type)
                        clearTimeout(n),
                        document.body.innerHTML = "",
                        confirm("消息：用户已登出，是否登陆？  点击取消将关闭页面") ? d.go("main") : window.close();
                    else {
                        if (1 == t.Type)
                            return;
                        clearTimeout(n),
                        document.body.innerHTML = "",
                        alert(t.Message),
                        d.go("main")
                    }
                else
                    clearTimeout(n),
                    document.body.innerHTML = "",
                    alert("出现错误 将返回首页"),
                    d.go("main")
            }).error(function(t, e) {
                3 == ++s && (s = 0,
                alert("和平台通讯出错！"))
            })
        }, 1e4);
        return n
    }
    ,
    this.beforeUnload = function(e) {
        $(window).bind("beforeunload", function(t) {
            r({
                method: "POST",
                url: ALL_PORT.ClearPlayingCourse.url + "?" + Math.round(1e4 * Math.random()),
                data: $.param($.extend({}, ALL_PORT.ClearPlayingCourse.data, {
                    userid: e
                }))
            }).success(function(t) {})
        })
    }
    ;
    var p = !0
      , u = !1;
    this.getData = function(t, e, a) {
        var i, l = o.defer();
        return i = "string" != $.type(a) || $.isEmptyObject(a) ? "object" != $.type(a) || $.isEmptyObject(a) ? null : $.param(a) : a,
        r({
            url: t,
            method: e,
            timeout: 6e4,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            data: i
        }).success(function(t) {
            t.Type && 401 === t.Type && (u || (u = !0,
            d.go("main"),
            alert("请登录!"))),
            l.resolve(t)
        }).error(function(t, e, a, i) {
            var s = e.toString();
            if (p) {
                p = !1,
                -1 != s.indexOf("40") ? alert("网络请求异常") : -1 != s.indexOf("50") && alert("服务器异常");
                var n = setTimeout(function() {
                    p = !0
                }, 1e3);
                clearTimeout(n)
            }
            l.reject(t)
        }),
        l.promise
    }
    ,
    this.getArticleCategory = function() {
        var e = [];
        return $.ajax({
            type: "POST",
            async: !1,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            xhrFields: {
                withCredentials: !0
            },
            url: ALL_PORT.ArticleCategory.url,
            data: $.extend({}, ALL_PORT.ArticleCategory.data),
            success: function(t) {
                return e = t.Data.ListData
            }
        }),
        e
    }
    ,
    this.getVerifyCode = function() {
        r({
            method: "GET",
            url: ALL_PORT.GetVerifyCode.url,
            params: 10 * Math.random()
        }).success(function(t) {
            $("#codeImg")[0] && ($("#codeImg")[0].src = "data:image/png;base64," + t.img)
        })
    }
    ,
    this.AddFavorite = function(t, e) {
        t = t || document.title,
        e = e || location.href;
        try {
            window.external.addFavorite(e, t)
        } catch (a) {
            try {
                window.sidebar.addPanel(t, e, "")
            } catch (a) {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    }
    ,
    this.SetHome = function(t, e) {
        e = e || location.href;
        try {
            t.style.behavior = "url(#default#homepage)",
            t.setHomePage(e)
        } catch (a) {
            if (window.netscape)
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (a) {
                    alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'")
                }
            else
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + e + "】设置为首页。")
        }
    }
    ,
    this.closeWindow = function() {
        0 < navigator.userAgent.indexOf("MSIE") ? 0 < navigator.userAgent.indexOf("MSIE 6.0") ? (window.opener = null,
        window.close()) : (window.open("", "_top"),
        window.top.close()) : (0 < navigator.userAgent.indexOf("Chrome") ? window.location.href = "about:blank" : 0 < navigator.userAgent.indexOf("Firefox") ? window.location.href = "about:blank " : (window.opener = null,
        window.open("", "_self", "")),
        window.close())
    }
    ,
    this.limitSubmit = function(t) {
        limitTime ? alert("提交过于频繁，请稍后再试！") : (limitTime = 1,
        a(function() {
            limitTime = 0
        }, 1e3),
        t())
    }
    ,
    this.loop = function(t) {
        if (!t)
            return t;
        var e = this;
        t.map(function(t) {
            return t.children ? ($.extend(t, {
                state: "open"
            }),
            e.loop(t.children)) : t
        })
    }
    ,
    this.checkType = function(t, e) {
        var a = {
            mobile: /^1\d{10}$/,
            zipcode: /^\d{6}$/,
            email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
            tel: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/,
            business: /^[a-zA-Z\u4e00-\u9fa5]+$/,
            idcard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
        };
        return a[t.toLowerCase()] ? a[t.toLowerCase()].test(e) : void 0
    }
    ,
    this.print = function(t) {
        t ? t instanceof jQuery ? t.jqprint() : $(t).jqprint() : $("body").jqprint()
    }
    ,
    this.uploadFile = function(r) {
        return r = $.extend({
            type: "",
            method: 1,
            url: API_URL_ADMIN + "/Common/ToLead",
            data: {}
        }, r),
        function(t) {
            var e = t.target
              , a = (e.files || [{
                name: e.value,
                size: 1e6
            }])[0]
              , i = a.name
              , s = i.substring(i.lastIndexOf(".") + 1, i.length)
              , n = ""
              , l = o.defer();
            switch (r.type) {
            case "Image":
            case "ImageTraining":
                n = "jpeg,jpg,png,gif,bmp";
                break;
            case "Attachment":
                n = "zip,rar,txt,doc,docx,xls,xlsx,ppt,pptx";
                break;
            case "WorkFlow":
                n = "jpeg,jpg,png,gif,bmp,pdf";
                break;
            default:
                n = "jpeg,jpg,png,gif,bmp,zip,rar,txt,doc,docx,xls,xlsx,ppt,pptx"
            }
            if (!(-1 < n.indexOf(s.toLowerCase())))
                return l.reject({
                    message: "文件后缀应为以下类型" + n + ",而不是" + s + ",请重新选择文件"
                }),
                l.promise;
            if (a) {
                1048576 < a.size ? (Math.round(100 * a.size / 1048576) / 100).toString() + "MB" : (Math.round(100 * a.size / 1024) / 100).toString() + "KB"
            }
            return 1 == r.method && $(e).ajaxUpload({
                url: r.url,
                data: $.extend(r.data, {
                    fileType: r.type
                }),
                dataType: "text",
                onComplate: function(t) {
                    /^{.*}$/.test(t) && (t = t.replace("error", '"error"'),
                    t = JSON.parse(t)),
                    l.resolve(t)
                },
                onError: function(t) {
                    var e;
                    switch (typeof t) {
                    case "string":
                        e = {
                            message: t
                        };
                        break;
                    default:
                        e = t
                    }
                    l.reject(e)
                }
            }),
            l.promise
        }
    }
}
]),
angular.module("luZhouApp").directive("tmPagation", ["$state", function(t) {
    return {
        templateUrl: "components/tmPagation.html",
        restrict: "EA",
        scope: {
            conf: "="
        },
        link: function(l, t, e) {
            if (l.conf) {
                var r = l.conf;
                r.pagesLength ? (r.pagesLength = parseInt(r.pagesLength, 10),
                r.pagesLength || (r.pagesLength = 9),
                r.pagesLength % 2 == 0 && (r.pagesLength += 1)) : r.pagesLength = 9,
                r.perPageOptions || (r.perPageOptions = 9),
                l.prevPage = function() {
                    1 < r.currentPage && (r.currentPage -= 1),
                    a(),
                    r.onChange && r.onChange()
                }
                ,
                l.nextPage = function() {
                    r.currentPage < r.numberOfPages && (r.currentPage += 1),
                    a(),
                    r.onChange && r.onChange()
                }
                ,
                l.changeCurrentPage = function(t) {
                    "..." != t && (r.currentPage = t,
                    a(),
                    r.onChange && r.onChange())
                }
                ,
                l.changeItemsPerPage = function() {
                    r.currentPage = 1,
                    a(),
                    r.onChange && r.onChange()
                }
                ,
                l.jumpToPage = function() {
                    var t = l.jumpPageNum;
                    t.match(/\d+/) && (t = parseInt(t, 10)) && t != r.currentPage && (t > r.numberOfPages && (t = r.numberOfPages),
                    r.currentPage = t,
                    a(),
                    r.onChange && r.onChange(),
                    l.jumpPageNum = "")
                }
                ,
                l.jumpPageKeyUp = function(t) {
                    13 == (window.event ? t.keyCode : t.which) && l.jumpToPage()
                }
                ,
                l.$watch("conf.totalItems", function(t, e) {
                    t && t != e || r.onChange && r.onChange(),
                    a()
                })
            }
            function a(t, e) {
                if (r.currentPage && (r.currentPage = parseInt(l.conf.currentPage, 10)),
                r.currentPage || (r.currentPage = 1),
                r.totalItems && (r.totalItems = parseInt(r.totalItems, 10)),
                r.totalItems) {
                    r.itemsPerPage && (r.itemsPerPage = parseInt(r.itemsPerPage, 10)),
                    r.itemsPerPage || (r.itemsPerPage = 15),
                    r.numberOfPages = Math.ceil(r.totalItems / r.itemsPerPage),
                    0 < l.conf.numberOfPages && l.conf.currentPage > l.conf.numberOfPages && (l.conf.currentPage = l.conf.numberOfPages);
                    for (var a, i = l.conf.perPageOptions.length, s = 0; s < i; s++)
                        r.perPageOptions[s] == r.itemsPerPage && (a = !0);
                    if (a || r.perPageOptions.push(r.itemsPerPage),
                    r.perPageOptions.sort(function(t, e) {
                        return t - e
                    }),
                    l.pageList = [],
                    r.numberOfPages <= r.pagesLength)
                        for (s = 1; s <= r.numberOfPages; s++)
                            l.pageList.push(s);
                    else {
                        var n = (r.pagesLength - 1) / 2;
                        if (r.currentPage <= n) {
                            for (s = 1; s <= n + 1; s++)
                                l.pageList.push(s);
                            l.pageList.push("..."),
                            l.pageList.push(r.numberOfPages)
                        } else if (r.currentPage > r.numberOfPages - n) {
                            for (l.pageList.push(1),
                            l.pageList.push("..."),
                            s = n + 1; 1 <= s; s--)
                                l.pageList.push(r.numberOfPages - s);
                            l.pageList.push(r.numberOfPages)
                        } else {
                            for (l.pageList.push(1),
                            l.pageList.push("..."),
                            s = Math.ceil(n / 2); 1 <= s; s--)
                                l.pageList.push(r.currentPage - s);
                            for (l.pageList.push(r.currentPage),
                            s = 1; s <= n / 2; s++)
                                l.pageList.push(r.currentPage + s);
                            l.pageList.push("..."),
                            l.pageList.push(r.numberOfPages)
                        }
                    }
                    l.$parent.conf = r
                } else
                    r.totalItems = 0
            }
        }
    }
}
]),
angular.module("luZhouApp").directive("tmHeader", function() {
    return {
        templateUrl: "components/tmHeader.html",
        restrict: "EA",
        scope: {},
        controller: ["$scope", "$http", "$loading", "commonService", "$state", "$stateParams", "$element", "$attrs", function(t, e, a, i, s, n, l, r) {
            t.addFavorite = i.AddFavorite,
            t.setHome = i.SetHome
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmFooter", function() {
    return {
        templateUrl: "components/tmFooter.html",
        restrict: "EA",
        transclude: !0,
        controller: ["$scope", "$http", "$loading", "commonService", "$element", "$attrs", function(e, t, a, i, s, n) {
            i.getData(ALL_PORT.Blogroll.url, "POST", ALL_PORT.Blogroll.data).then(function(t) {
                e.firenlyLinkData = t.Data.ListData
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmNoticeAnnouncement", function() {
    return {
        templateUrl: "components/tmNoticeAnnouncement.html",
        restrict: "EA",
        scope: {
            noticeData: "=",
            repeatFinish: "="
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmSpecialTraining", function() {
    return {
        templateUrl: "components/tmSpecialTraining.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            a.start("specialTraining"),
            t.getData(ALL_PORT.StudySpecial.url, "POST", $.extend({}, ALL_PORT.StudySpecial.data, {
                rows: 3
            })).then(function(t) {
                a.finish("specialTraining"),
                e.studySpecialData = t.Data,
                e.showNoSpecialClass = 0 == t.Data.ListData.length
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmUserLogin", function() {
    return {
        templateUrl: "components/tmUserLogin.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmCourseCenter", function() {
    return {
        templateUrl: "components/tmCourseCenter.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmGovernmentRanking", function() {
    return {
        templateUrl: "components/tmGovernmentRanking.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmRealTimeData", function() {
    return {
        templateUrl: "components/tmRealTimeData.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            a.start("realTimeList"),
            t.getData(ALL_PORT.LeftRealTimeData.url, "POST", ALL_PORT.LeftRealTimeData.data).then(function(t) {
                a.finish("realTimeList"),
                e.realTimeData = t.Data
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmNavBars", function() {
    return {
        templateUrl: "components/tmNavbars.html",
        restrict: "EA",
        controller: ["$scope", "$state", function(t, e) {
            t.findNews = function() {
                e.go("search", {
                    text: t.searchNewsField
                })
            }
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmImportantNotice", ["$timeout", function(i) {
    return {
        templateUrl: "components/tmImportantNotice.html",
        restrict: "EA",
        link: function(t, e, a) {
            i(function() {
                var t, e = $("#slide"), a = 0, i = e.children("li").length, s = e.children("li").height();
                function n() {
                    parseFloat(e.css("margin-top")) > -i * s ? (a++,
                    e.animate({
                        marginTop: -s * a + "px"
                    }, "slow")) : (a = 0,
                    e.css("margin-top", "0px"))
                }
                e.html(e.html() + e.html()),
                t = setInterval(n, 4e3),
                e.hover(function() {
                    clearInterval(t)
                }, function() {
                    clearInterval(t),
                    t = setInterval(n, 4e3)
                })
            }, 1e3)
        }
    }
}
]),
angular.module("luZhouApp").directive("tmNewsInformation", function() {
    return {
        templateUrl: "components/tmNewsInformation.html",
        restrict: "EA",
        scope: {
            newsData: "=",
            type: "=",
            title: "=",
            more: "=?"
        },
        controller: ["$scope", "$state", function(e, a) {
            e.getDetail = function(t) {
                "notice" === e.type ? a.go("noticeDetail", {
                    ID: t.Id
                }) : "article" === e.type && a.go("articleDetail", {
                    ID: t.Id
                })
            }
            ,
            e.getMore = function() {
                "notice" === e.type ? a.go("noticelist") : "article" === e.type && a.go("article", {
                    categoryCode: e.more
                })
            }
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmGuideEntry", function() {
    return {
        templateUrl: "components/tmGuideEntry.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmCivilServiceTrainingLink", function() {
    return {
        templateUrl: "components/tmCivilServiceTrainingLink.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmTechnicianTrainingLink", function() {
    return {
        templateUrl: "components/tmTechnicianTrainingLink.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmFriendlyLink", function() {
    return {
        templateUrl: "components/tmFriendlyLink.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("repeatFinish", function() {
    return {
        link: function(t, e, a) {
            1 == t.$last && t.$eval(a.repeatFinish)
        }
    }
}),
angular.module("luZhouApp").directive("errSrc", function() {
    return {
        link: function(t, e, a) {
            setTimeout(function() {
                a.src && a.ngSrc || a.$set("src", a.errSrc)
            }),
            e.bind("error", function() {
                a.src != a.errSrc && a.$set("src", a.errSrc)
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmCourseClassify", function() {
    return {
        templateUrl: "components/tmcourseclassify.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmCourseSupermarket", function() {
    return {
        templateUrl: "components/tmCourseSupermarket.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {
            $(".title_bar a").click(function() {
                "▼" == $(this).children("span").html() ? ($(this).children("span").html("▲"),
                $(this).parent("span").siblings("span").children().children("span").html("▼")) : "▲" == $(this).children("span").html() && $(this).children("span").html("▼")
            }),
            $(".searchBtn").click(function() {
                $(".title_bar .arrow").html("▼")
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmCourseRankingList", function() {
    return {
        templateUrl: "components/tmCourseRankingList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmLocation", function() {
    return {
        templateUrl: "components/tmLocation.html",
        restrict: "EA",
        controller: ["$scope", function(t) {
            t.reg = new RegExp("内容")
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmNewsWithoutPhoto", function() {
    return {
        templateUrl: "components/tmNewsWithoutPhoto.html",
        restrict: "EA",
        scope: {
            myNewsData: "=myData"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmNewsPhoto", function() {
    return {
        templateUrl: "components/tmNewsPhoto.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("csTrainingNewsCtrl", ["$scope", "commonService", "$location", "$loading", "$state", function(a, t, e, i, s) {
    i.start("tmnewsphoto"),
    i.start("tmpolicyandnotify"),
    a.isNews = !0,
    a.newsData = {
        photoNews: {
            data: [],
            ID: null
        },
        policies: {
            data: [],
            ID: null
        },
        notifies: {
            data: [],
            ID: null
        }
    },
    a.newsData.newsCenterTitle = ["政策法规", "公告通知"];
    var n = t.getArticleCategory();
    $.each(n, function(t, e) {
        "公务员培训" == e.Name && (a.categoryId = e.Id,
        $.each(e.Nodes, function(t, e) {
            "公告通知" == e.Name && (a.newsData.notifies.ID = e.Id),
            "图片新闻" == e.Name && (a.newsData.photoNews.ID = e.Id),
            "政策法规" == e.Name && (a.newsData.policies.ID = e.Id)
        }))
    }),
    a.findNews = function() {
        s.go("search", {
            ID: a.categoryId,
            text: a.searchNewsField
        })
    }
    ,
    a.goThere = function(t) {
        document.getElementById(t).scrollIntoView(!0)
    }
    ,
    t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        page: 1,
        rows: 7,
        categoryId: a.newsData.photoNews.ID
    })).then(function(t) {
        i.finish("tmnewsphoto"),
        0 !== t.Data.ListData.length && (a.ImgSrc = t.Data.Path + "/" + t.Data.ListData[0].Img),
        a.newsData.photoNews.data = t.Data.ListData
    }),
    t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        page: 1,
        rows: 7,
        categoryId: a.newsData.policies.ID
    })).then(function(t) {
        i.finish("tmpolicyandnotify"),
        a.newsData.policies.data = t.Data.ListData
    }),
    t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        page: 1,
        rows: 7,
        categoryId: a.newsData.notifies.ID
    })).then(function(t) {
        i.finish("tmpolicyandnotify"),
        a.newsData.notifies.data = t.Data.ListData
    })
}
]),
angular.module("luZhouApp").controller("patpTrainingNewsCtrl", ["$scope", "commonService", "$location", "$loading", "$state", function(a, t, e, i, s) {
    i.start("tmnewsphoto"),
    i.start("tmpolicyandnotify"),
    a.searchNewsField = "",
    a.isNews = !0,
    a.newsData = {
        photoNews: {
            data: [],
            ID: null
        },
        policies: {
            data: [],
            ID: null
        },
        notifies: {
            data: [],
            ID: null
        }
    },
    a.newsData.newsCenterTitle = ["政策法规", "公告通知"];
    var n = t.getArticleCategory();
    $.each(n, function(t, e) {
        "专业技术人员培训" == e.Name && (a.categoryId = e.Id,
        $.each(e.Nodes, function(t, e) {
            "公告通知" == e.Name && (a.newsData.notifies.ID = e.Id),
            "图片新闻" == e.Name && (a.newsData.photoNews.ID = e.Id),
            "政策法规" == e.Name && (a.newsData.policies.ID = e.Id)
        }))
    }),
    a.findNews = function() {
        s.go("search", {
            ID: a.categoryId,
            text: a.searchNewsField
        })
    }
    ,
    a.goThere = function(t) {
        document.getElementById(t).scrollIntoView(!0)
    }
    ,
    t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        page: 1,
        rows: 7,
        categoryId: a.newsData.photoNews.ID
    })).then(function(t) {
        i.finish("tmnewsphoto"),
        0 !== t.Data.ListData.length && (a.ImgSrc = t.Data.Path + "/" + t.Data.ListData[0].Img),
        a.newsData.photoNews.data = t.Data.ListData
    }),
    t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        page: 1,
        rows: 7,
        categoryId: a.newsData.policies.ID
    })).then(function(t) {
        i.finish("tmpolicyandnotify"),
        a.newsData.policies.data = t.Data.ListData
    }),
    t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        page: 1,
        rows: 7,
        categoryId: a.newsData.notifies.ID
    })).then(function(t) {
        i.finish("tmpolicyandnotify"),
        a.newsData.notifies.data = t.Data.ListData
    })
}
]),
angular.module("luZhouApp").controller("searchResultCtrl", ["$scope", "$location", "$loading", "$stateParams", "commonService", function(e, t, a, i, s) {
    e.searchTitle = i.text,
    e.isResult = !0,
    e.selectTypes = [{
        type: "Article",
        name: "文章"
    }, {
        type: "Course",
        name: "课程"
    }, {
        type: "Notice",
        name: "通知"
    }],
    e.selectedType = "",
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 20
    }),
    e.search = function() {
        a.start("tmsearchresult"),
        s.getData(ALL_PORT.SearchAll.url, "POST", $.extend({}, ALL_PORT.SearchAll.data, {
            page: e.paginationConf.currentPage,
            rows: e.paginationConf.itemsPerPage,
            type: e.selectedType,
            key: e.searchTitle
        })).then(function(t) {
            a.finish("tmsearchresult"),
            e.Data = t.Data,
            e.newsData = t.Data.ListData,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        e.search()
    })
}
]),
angular.module("luZhouApp").directive("tmSearchResult", function() {
    return {
        templateUrl: "components/tmSearchResult.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmUserInformation", function() {
    return {
        templateUrl: "components/tmUserInformation.html",
        restrict: "EA",
        controller: ["$scope", "$rootScope", "commonService", "$loading", function(e, a, t, i) {
            e.out = t.loginOut,
            i.start("loginOut"),
            t.getData(ALL_PORT.LoginLong.url, "POST", ALL_PORT.LoginLong.data).then(function(t) {
                i.finish("loginOut"),
                e.info = t.Data,
                a.userInfo = t.Data
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPersonalCenterNav", function() {
    return {
        templateUrl: "components/tmPersonalCenterNav.html",
        restrict: "EA",
        scope: {
            navList: "="
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmStudentsHourRanking", function() {
    return {
        templateUrl: "components/tmStudentsHourRanking.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            a.start("studentsHourRanking"),
            t.getData(ALL_PORT.LeftUserRank.url, "POST", ALL_PORT.LeftUserRank.data).then(function(t) {
                a.finish("studentsHourRanking"),
                e.studentHourRanking = t.Data
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmMyCenter", function() {
    return {
        templateUrl: "components/tmMyCenter.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("newsInfoCtrl", ["$scope", "commonService", "$location", "$stateParams", "$loading", "$state", function(i, t, e, a, s, n) {
    s.start("tmnewswithphoto"),
    s.start("tmnewswithoutphoto"),
    i.searchNewsField = "",
    i.isNews = !0,
    i.isNewsInfo = !0,
    i.findNews = function() {
        n.go("search", {
            ID: a.ID,
            text: i.searchNewsField
        })
    }
    ,
    i.ID = a.ID;
    var l = t.getArticleCategory();
    $.each(l, function(t, a) {
        a.Id == i.ID ? i.titleName = a.Name : $.each(a.Nodes, function(t, e) {
            e.Id == i.ID && (i.titleName = a.Name)
        })
    }),
    i.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 20
    }),
    i.$watch("paginationConf.currentPage", function() {
        t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
            page: i.paginationConf.currentPage,
            rows: i.paginationConf.itemsPerPage,
            categoryId: i.ID
        })).then(function(t) {
            s.finish("tmnewswithphoto"),
            s.finish("tmnewswithoutphoto"),
            i.paginationConf.totalItems = t.Data.Count,
            i.newsData = t.Data;
            var e = i.newsData.CategoryName;
            "公务员培训" == e || "专业技术人员培训" == e || "新闻资讯" == e ? i.classStyle = "blue" : "政策法规" == e ? i.classStyle = "green" : "公告通知" == e ? i.classStyle = "cyan" : e && (i.classStyle = "blue")
        })
    })
}
]),
angular.module("luZhouApp").directive("tmPolicyAndNotify", ["$compile", "$location", function(t, e) {
    return {
        templateUrl: "components/tmPolicyAndNotify.html",
        restrict: "EA",
        scope: {
            myNewsData: "=myData",
            title: "=myTitle"
        },
        link: function(t, e, a) {}
    }
}
]),
angular.module("luZhouApp").directive("tmNewsWithPhoto", function() {
    return {
        templateUrl: "components/tmNewsWithPhoto.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmShowArticleDetail", function() {
    return {
        templateUrl: "components/tmShowArticleDetail.html",
        restrict: "EA",
        controller: ["commonService", "$scope", function(t, e) {
            e.print = function() {
                t.print($(".article-detail-content"))
            }
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("articleDetailCtrl", ["$scope", "$http", "$stateParams", "$loading", "commonService", function(s, t, e, n, i) {
    n.start("tmshowarticledetail"),
    s.location = "文章内容",
    s.isNews = !0;
    var a = e.ID;
    s.favoriteAdd = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteAdd.data, t, e);
        i.getData(ALL_PORT.FavoriteAdd.url, "POST", a).then(function(t) {
            1 === t.Type ? (s.articleData.FavoriteId = t.Value,
            i.alertMs(t.Message)) : 0 === t.Type && i.alertMs(t.Message)
        })
    }
    ,
    s.favoriteDelete = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteDelete.data, t, e);
        i.getData(ALL_PORT.FavoriteDelete.url, "POST", a).then(function(t) {
            1 === t.Type ? (s.articleData.FavoriteId = 0,
            i.alertMs(t.Message)) : 0 === t.Type && i.alertMs(t.Message)
        })
    }
    ,
    i.getData(ALL_PORT.ArticleContent.url, "POST", $.extend({}, ALL_PORT.ArticleContent.data, {
        Id: a
    })).then(function(t) {
        n.finish("tmshowarticledetail"),
        s.articleData = t.Data,
        s.content = t.Data.Content,
        s.articleData.Type = "Article";
        for (var e = s.content.split("font-size:"), a = /^(?=.*\d.*\b)/, i = 0; i < e.length; i++)
            a.test(e[i].split(";")[0]) && (s.fontSize = parseInt(e[i].split(";")[0]));
        s.fontSize || (s.fontSize = 14)
    })["catch"](function() {
        n.finish("tmshowarticledetail")
    }),
    s.reduceFont = function() {
        s.fontSize--,
        s.fontSize < 12 && (s.fontSize = 12),
        $("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        $("#setFont").find("p,div").css({
            fontSize: s.fontSize + "px",
            lineHeight: s.fontSize + 10 + "px"
        })
    }
    ,
    s.increaseFont = function() {
        s.fontSize++,
        $("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        $("#setFont").find("p,div").css({
            fontSize: s.fontSize + "px",
            lineHeight: s.fontSize + 10 + "px"
        })
    }
}
]),
angular.module("luZhouApp").directive("tmExamList", function() {
    return {
        templateUrl: "components/tmExamList.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmTrainingCenter", function() {
    return {
        templateUrl: "components/tmTrainingCenter.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassMy", function() {
    return {
        templateUrl: "components/tmClassMy.html",
        restrict: "EA",
        scope: {
            classMyData: "=",
            classType: "="
        },
        link: function(t, e, a) {
            t.classUrl = "classlist({type:'" + t.classType + "'})"
        }
    }
}),
angular.module("luZhouApp").directive("tmCourseDetails", function() {
    return {
        templateUrl: "components/tmCourseDetails.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("CoursedetailsCtrl", ["$scope", "$rootScope", "$state", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", "$location", function(s, t, n, e, l, a, r, i, o) {
    s.Id = i.Id,
    r.start("courseDetails"),
    s.token = l.AntiForgeryToken(),
    s.showFav = !0;
    var d;
    d = i.Id,
    l.getData(ALL_PORT.CourseContent.url, "POST", $.extend({}, ALL_PORT.CourseContent.data, {
        Id: d
    })).then(function(t) {
        r.finish("courseDetails"),
        s.courseDetailsData = t.Data
    }),
    s.favoriteAdd = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteAdd.data, t, e);
        l.getData(ALL_PORT.FavoriteAdd.url, "POST", a).then(function(t) {
            1 == t.Type && (s.courseDetailsData.CourseModel.FavoriteId = t.Value,
            l.alertMs(t.Message))
        })
    }
    ,
    s.favoriteDelete = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteDelete.data, t, e);
        l.getData(ALL_PORT.FavoriteDelete.url, "POST", a).then(function(t) {
            1 == t.Type && (s.courseDetailsData.CourseModel.FavoriteId = 0,
            l.alertMs(t.Message))
        })
    }
    ,
    s.selectClass = function(a) {
        var i = window.open("about:blank", "_blank")
          , t = $.extend({}, ALL_PORT.AddStudyCourse.data, {
            checkValue: a
        }, s.token);
        l.getData(ALL_PORT.AddStudyCourse.url, "POST", t).then(function(t) {
            if (1 == t.Type) {
                var e = n.href("play", {
                    Id: a
                });
                i.location.href = e
            } else
                i.close()
        })
    }
    ,
    s.havTest = function(a) {
        var i = window.open("about:blank", "_blank")
          , t = $.extend({}, ALL_PORT.Exam.data, s.token, {
            parameter1: a
        });
        l.getData(ALL_PORT.Exam.url, "POST", t).then(function(t) {
            if (r.finish("exam"),
            t.Type)
                i.close(),
                l.alertMs(t.Message);
            else {
                var e = n.href("exam", {
                    Id: a
                });
                i.location.href = e
            }
        })
    }
    ,
    s.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 10
    }),
    s.getComment = function(t) {
        var e = $.extend({}, ALL_PORT.CourseComment.data, {
            id: s.Id,
            page: 1,
            rows: 10
        }, t);
        l.getData(ALL_PORT.CourseComment.url, "POST", e).then(function(t) {
            s.resultComment = t.Data,
            s.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    s.$watch("paginationConf.currentPage", function() {
        var t = {
            page: s.paginationConf.currentPage
        };
        s.getComment(t)
    }),
    s.getRelatedCourse = function() {
        var t = $.extend({}, ALL_PORT.RelatedCourse.data, {
            Page: 1,
            Rows: 10,
            CourseId: s.Id,
            classTypeId: 1
        });
        l.getData(ALL_PORT.RelatedCourse.url, "POST", t).then(function(t) {
            s.relatedCourseData = t.Data
        })
    }
    ,
    s.getRelatedCourse()
}
]),
angular.module("luZhouApp").directive("tmStudyStat", function() {
    return {
        templateUrl: "components/tmStudyStat.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("StudystatCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(e, t, a, i, s, n, l) {
    e.yearHistory = [{
        name: "2018",
        value: ""
    }, {
        name: "2017",
        value: "2017"
    }],
    e.selectYearValue = "",
    e.studyStateUrl = "/api" + e.selectYearValue + "/Page/MyStudyStat",
    e.yearChange = function() {
        e.studyStateUrl = "/api" + e.selectYearValue + "/Page/MyStudyStat",
        e.requestMyStudyStat({
            page: 1
        })
    }
    ,
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 10
    });
    var r = $.extend({}, ALL_PORT.MyStudyStat.data);
    e.requestMyStudyStat = function(t) {
        l.start("studyStat"),
        $.extend(r, t),
        s.getData(e.studyStateUrl, "POST", r).then(function(t) {
            l.finish("studyStat"),
            e.paginationConf.currentPage = t.Data.Page,
            e.paginationConf.totalItems = t.Data.Count,
            e.studyStatData = t.Data,
            e.startTime = t.Data.StartDate,
            e.endTime = t.Data.EndDate
        }, function() {
            l.finish("studyStat")
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = e.paginationConf.currentPage,
        e.requestMyStudyStat(t)
    })
}
]),
angular.module("luZhouApp").controller("TeststatCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(e, t, a, i, s, n, l) {
    e.yearHistory = [{
        name: "2018",
        value: ""
    }, {
        name: "2017",
        value: "2017"
    }],
    e.selectYearValue = "",
    e.examStateUrl = "/api" + e.selectYearValue + "/Page/MyExamStat",
    e.yearChange = function() {
        e.examStateUrl = "/api" + e.selectYearValue + "/Page/MyExamStat",
        e.requestMyStudyStat({
            page: 1
        })
    }
    ,
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.MyExamStat.data.rows
    });
    var r = $.extend({}, ALL_PORT.MyExamStat.data);
    e.requestMyStudyStat = function(t) {
        l.start("examStat"),
        $.extend(r, t),
        s.getData(e.examStateUrl, "POST", r).then(function(t) {
            l.finish("examStat"),
            e.paginationConf.currentPage = t.Data.Page,
            e.paginationConf.totalItems = t.Data.Count,
            e.examStatData = t.Data,
            e.startTime = t.Data.StartDate,
            e.endTime = t.Data.EndDate
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = e.paginationConf.currentPage,
        e.requestMyStudyStat(t)
    }),
    e.printTestStat = function() {
        window.print()
    }
}
]),
angular.module("luZhouApp").directive("tmTestStat", function() {
    return {
        templateUrl: "components/tmTestStat.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("MyfavoriteCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(i, t, e, a, s, n, l) {
    i.token = s.AntiForgeryToken(),
    i.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.MyFavorite.data.rows
    }),
    i.requestMyStudyStat = function(t) {
        l.start("myFavorite");
        var e = $.extend({}, ALL_PORT.MyFavorite.data, t);
        s.getData(ALL_PORT.MyFavorite.url, "POST", e).then(function(t) {
            l.finish("myFavorite"),
            i.paginationConf.totalItems = t.Data.Count,
            i.myFavoriteData = t.Data
        })
    }
    ,
    i.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = i.paginationConf.currentPage,
        i.requestMyStudyStat(t)
    }),
    i.favoriteDelete = function(e, a) {
        s.limitSubmit(function() {
            var t = $.extend({}, ALL_PORT.FavoriteDelete.data, e, a);
            s.getData(ALL_PORT.FavoriteDelete.url, "POST", t).then(function(t) {
                1 == t.Type && (s.alertMs(t.Message),
                i.requestMyStudyStat())
            })
        })
    }
}
]),
angular.module("luZhouApp").directive("tmMyFavorite", function() {
    return {
        templateUrl: "components/tmMyFavorite.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("noticeDetailCtrl", ["$scope", "commonService", "$stateParams", "$loading", function(s, i, t, n) {
    s.location = "通知内容",
    s.isNotice = !0,
    s.Id = t.ID,
    n.start("tmshowarticledetail"),
    i.getData(ALL_PORT.noticeContent.url, "POST", $.extend({}, ALL_PORT.noticeContent.data, {
        Id: s.Id
    })).then(function(t) {
        n.finish("tmshowarticledetail"),
        s.articleData = t.Data.Model,
        s.articleData.Type = "Notice",
        s.content = t.Data.Model.Content;
        for (var e = s.content.split("font-size:"), a = /^(?=.*\d.*\b)/, i = 0; i < e.length; i++)
            a.test(e[i].split(";")[0]) && (s.fontSize = parseInt(e[i].split(";")[0]));
        s.fontSize || (s.fontSize = 14)
    }),
    s.favoriteAdd = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteAdd.data, t, e);
        i.getData(ALL_PORT.FavoriteAdd.url, "POST", a).then(function(t) {
            1 == t.Type && (s.articleData.FavoriteId = t.Value,
            i.alertMs(t.Message))
        })
    }
    ,
    s.favoriteDelete = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteDelete.data, t, e);
        i.getData(ALL_PORT.FavoriteDelete.url, "POST", a).then(function(t) {
            1 == t.Type && (s.articleData.FavoriteId = 0,
            i.alertMs(t.Message))
        })
    }
    ,
    s.reduceFont = function() {
        s.fontSize--,
        s.fontSize < 12 && (s.fontSize = 12),
        angular.element("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        $("#setFont").find("p,div").css({
            fontSize: s.fontSize + "px",
            lineHeight: s.fontSize + 10 + "px"
        })
    }
    ,
    s.increaseFont = function() {
        s.fontSize++,
        angular.element("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        $("#setFont").find("p,div").css({
            fontSize: s.fontSize + "px",
            lineHeight: s.fontSize + 10 + "px"
        })
    }
}
]),
angular.module("luZhouApp").controller("StudyplanCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(a, t, e, i, s, n, l) {
    a.token = s.AntiForgeryToken(),
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 10
    }),
    a.requestStudyPlan = function(t) {
        l.start("studyPlan");
        var e = $.extend({}, ALL_PORT.MyStudyPlan.data, t);
        s.getData(ALL_PORT.MyStudyPlan.url, "POST", e).then(function(t) {
            l.finish("studyPlan"),
            a.paginationConf.totalItems = t.Data.Count,
            a.stydyPlanData = t.Data
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = a.paginationConf.currentPage,
        a.requestStudyPlan(t)
    }),
    a.remindCycle = ["每天一次", "每周一次", "每月一次"],
    a.planAdd = function(t) {
        s.getData(ALL_PORT.StudyPlanAdd.url, "POST", $.extend({}, ALL_PORT.StudyPlanAdd.data, {
            courseId: t
        })).then(function(t) {
            a.planAddData = t.Data,
            a.PlanFinishDate = s.dateFilter(t.Data.PlanFinishDate, "yyyy-MM-dd"),
            a.RemindDate = s.dateFilter(t.Data.RemindDate, "yyyy-MM-dd"),
            a.selectCycle = "" == t.Data.RemindCycle ? "每天一次" : t.Data.RemindCycle
        })
    }
    ,
    a.addPlanUpdate = function(t) {
        var e = $.extend({}, ALL_PORT.EditStudyPlanUpdate.data, a.token, t);
        s.getData(ALL_PORT.EditStudyPlanUpdate.url, "POST", e).then(function(t) {
            $(".modal").modal("hide"),
            s.alertMs(t.Message),
            a.requestStudyPlan()
        })
    }
    ,
    a.delStudyPlan = function(t) {
        s.getData(ALL_PORT.DelStudyPlan.url, "POST", $.extend({}, ALL_PORT.DelStudyPlan.data, a.token, {
            id: t
        })).then(function(t) {
            s.alertMs(t.Message),
            a.requestStudyPlan()
        })
    }
}
]),
angular.module("luZhouApp").directive("tmStudyPlan", function() {
    return {
        templateUrl: "components/tmStudyPlan.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("unReadNoticeCtrl", ["$scope", "$timeout", "$loading", "$rootScope", "$cookieStore", "commonService", function(e, t, a, i, s, n) {
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.UnReadNotice.data.rows
    }),
    e.queryUnReadNotice = function(t) {
        n.getData(ALL_PORT.UnReadNotice.url, "POST", $.extend({}, ALL_PORT.UnReadNotice.data, t)).then(function(t) {
            e.noticeData = t.Data,
            e.paginationConf.totalItems = e.noticeData.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = e.paginationConf.currentPage,
        e.queryUnReadNotice(t)
    })
}
]),
angular.module("luZhouApp").directive("tmUnReadNotice", function() {
    return {
        templateUrl: "components/tmUnReadNotice.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("modifyPasswordCtrl", ["$scope", "commonService", "$loading", function(t, e, a) {
    t.token = e.AntiForgeryToken(),
    t.txtNewPwd = "",
    t.txtOldPwd = "",
    t.txtRepeatNewPwd = "",
    t.modifyPwd = function() {
        e.limitSubmit(function() {
            t.txtNewPwd !== t.txtRepeatNewPwd ? e.alertMs("新密码不一致！") : "" === t.txtNewPwd || null === t.txtNewPwd || "" === t.txtOldPwd || null === t.txtOldPwd ? e.alertMs("请填写信息！") : t.txtNewPwd === t.txtOldPwd ? e.alertMs("新旧密码不能一致！") : e.getData(ALL_PORT.UpdatePwd.url, "POST", $.extend({}, ALL_PORT.UpdatePwd.data, {
                NewPwd: t.txtNewPwd,
                OldPwd: t.txtOldPwd
            }, t.token)).then(function(t) {
                e.alertMs(t.Message)
            })
        })
    }
}
]),
angular.module("luZhouApp").directive("tmModifyPassword", function() {
    return {
        templateUrl: "components/tmModifyPassword.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmSecuritySetting", function() {
    return {
        templateUrl: "components/tmSecuritySetting.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("securitySettingCtrl", ["$scope", "commonService", "$loading", function(a, i, t) {
    a.isVisible = !0,
    a.validatePwd = function() {
        i.getData(ALL_PORT.SetPasswordQuestion.url, "POST", {
            pwd: a.myPwd
        }).then(function(t) {
            0 == t.Type ? i.alertMs(t.Message) : (a.questionData = t.Data.Question,
            a.isVisible = !1)
        })
    }
    ;
    var s = i.AntiForgeryToken();
    a.addQuestion = function() {
        var t = angular.toJson(a.questionData)
          , e = JSON.parse(t);
        i.getData(ALL_PORT.AddPasswordQuestion.url, "POST", $.extend({}, ALL_PORT.AddPasswordQuestion.data, {
            pwd: a.myPwd,
            questions: e
        }, s)).then(function(t) {
            i.alertMs(t.Message)
        })
    }
}
]),
angular.module("luZhouApp").controller("changeUserInfoCtrl", ["$scope", "$interval", "$state", "commonService", "$loading", "$q", "Notification", "$rootScope", "$cookieStore", function(s, t, n, l, e, r, o, a, i) {
    var d = !1
      , c = null
      , p = null
      , u = []
      , m = null
      , g = []
      , v = null
      , f = []
      , h = !1;
    s.currentLevel1 = "",
    s.currentLevel2 = "",
    s.currentLevel3 = "",
    s.listLevel1 = [],
    s.listLevel2 = [],
    s.listLevel3 = [],
    s.getList = function(t, e) {
        return l.getData(ALL_PORT.GetUserProfessionList.url, "POST", {
            Id: t
        }).then(function(t) {
            s[e] = t.Data
        })
    }
    ,
    s.$watch("currentLevel1", function(t, e) {
        h || t && d && (s.currentLevel2 = "",
        s.currentLevel3 = "",
        s.listLevel2 = [],
        s.listLevel3 = [],
        s.getList(t, "listLevel2"))
    }),
    s.$watch("currentLevel2", function(t, e) {
        h ? h = !1 : t && d && (s.currentLevel3 = "",
        s.getList(t, "listLevel3"))
    }),
    s.changeUserProfessional = function() {
        s.currentLevel1 ? s.currentLevel2 ? s.currentLevel3 ? l.getData(ALL_PORT.UpdateUserProfession.url, "POST", {
            Id: s.currentLevel3
        }).then(function(t) {
            o.success(t.Message),
            1 == t.Type && (p = s.currentLevel1,
            m = s.currentLevel2,
            v = s.currentLevel3,
            s.professionalName = "",
            angular.forEach(s.listLevel1, function(t) {
                p == t.Id && (s.professionalName += t.Name)
            }),
            angular.forEach(s.listLevel2, function(t) {
                m == t.Id && (s.professionalName += t.Name)
            }),
            angular.forEach(s.listLevel3, function(t) {
                v == t.Id && (s.professionalName += t.Name)
            }),
            $(".professionalModal").modal("hide"))
        }) : o.warning("请选择职称") : o.warning("请选择职称级别") : o.warning("请选择专业系列")
    }
    ,
    s.getProfessional = function() {
        l.getData(ALL_PORT.GetMyProfession.url, "POST").then(function(t) {
            if (3 === t.Data.length) {
                s.currentLevel1 = t.Data[2].Id,
                s.currentLevel2 = t.Data[1].Id,
                s.currentLevel3 = t.Data[0].Id,
                s.professionalName = t.Data[2].Name + t.Data[1].Name + t.Data[0].Name;
                var e = s.getList(0, "listLevel1")
                  , a = s.getList(s.currentLevel1, "listLevel2")
                  , i = s.getList(s.currentLevel2, "listLevel3");
                r.all([e, a, i]).then(function() {
                    d = !0
                })
            } else
                d = !0,
                s.professionalName = "",
                s.getList(0, "listLevel1")
        })
    }
    ,
    s.getProfessional(),
    s.openProfessionalModal = function() {
        p = s.currentLevel1,
        u = s.listLevel1,
        m = s.currentLevel2,
        g = s.listLevel2,
        v = s.currentLevel3,
        f = s.listLevel3,
        $(".professionalModal").modal("show")
    }
    ,
    s.closeProfessionalModal = function() {
        h = !0,
        s.currentLevel1 = p,
        s.listLevel1 = u,
        s.currentLevel2 = m,
        s.listLevel2 = g,
        s.currentLevel3 = v,
        s.listLevel3 = f,
        $(".professionalModal").modal("hide")
    }
    ,
    s.userBatch = "",
    s.userBatchName = "";
    var y = l.getData(ALL_PORT.GetBatchList.url, "POST").then(function(t) {
        s.batchData = t.Data
    });
    s.$watch("userInfo", function(t, e) {
        t && (s.userBatch = t.BatchId || s.userBatch,
        r.all([y]).then(function() {
            angular.forEach(s.batchData, function(t) {
                s.userBatch == t.Id && (s.userBatchName = t.Name)
            })
        }))
    }),
    s.changeUserBatch = function() {
        s.userBatch ? l.getData(ALL_PORT.UpdateUserBatch.url, "POST", {
            Id: s.userBatch
        }).then(function(t) {
            o.success(t.Message),
            1 == t.Type && (angular.forEach(s.batchData, function(t) {
                s.userBatch == t.Id && (s.userBatchName = t.Name)
            }),
            $(".batchModal").modal("hide"))
        }) : o.warning("请选择专业系列")
    }
    ,
    s.openBatchModal = function() {
        c = s.userBatch,
        $(".batchModal").modal("show")
    }
    ,
    s.closeBatchModal = function() {
        s.userBatch = c,
        $(".batchModal").modal("hide")
    }
    ,
    e.start("changeUserInfo"),
    l.getData(ALL_PORT.GetUserInfo.url, "POST", ALL_PORT.GetUserInfo.data).then(function(t) {
        e.finish("changeUserInfo"),
        s.userInfo = t.Data.Model,
        s.sex = t.Data.Model.Sex,
        s.Grade = t.Data.Model.GradeId,
        s.GroupId = t.Data.Model.GroupId,
        s.GroupName = t.Data.Model.GroupName,
        s.Business = t.Data.Model.Business,
        s.Tel = t.Data.Model.Tel,
        s.Email = t.Data.Model.Email,
        s.Mobile = t.Data.Model.Mobile,
        s.DepartmentName = t.Data.Model.DepartmentName,
        s.Degree = t.Data.Model.Degree
    });
    var b = l.AntiForgeryToken()
      , C = {
        mobile: /^1\d{10}$/,
        email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        tel: /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/,
        business: /^[a-zA-Z\u4e00-\u9fa5]+$/
    };
    s.changeUser = function() {
        l.limitSubmit(function() {
            1 != s.sex && 0 != s.sex || (s.sex = 1 == s.sex ? "男" : "女");
            var t = {
                Grade: s.Grade,
                Sex: s.sex,
                Email: s.Email,
                Mobile: s.Mobile,
                Tel: s.Tel,
                GroupId: s.GroupId,
                DepartmentName: s.DepartmentName,
                Degree: s.Degree
            }
              , e = !1
              , a = !1
              , i = !1;
            e = !t.Tel || C.tel.test(t.Tel),
            a = !t.Mobile || C.mobile.test(t.Mobile),
            i = !t.Email || C.email.test(t.Email),
            t.GroupId && 507 != t.GroupId ? "admin" === s.userRole || s.userBatchName ? e && a && i ? l.getData(ALL_PORT.UpdateUserInfo.url, "POST", $.extend({}, ALL_PORT.UpdateUserInfo.data, t, b)).then(function(t) {
                l.alertMs(t.Message, function() {
                    1 == t.Type && n.go("main")
                })
            }) : a ? e ? i || l.alertMs("请输入正确格式的邮箱") : l.alertMs("请输入正确格式的电话") : l.alertMs("请输入正确格式的手机号") : o.error("请选择专业序列") : o.error("请选择主管行业")
        })
    }
    ,
    a.$watch("userInfo", function(t, e) {
        t && (s.userRole = "管理员" === t.UserType ? "admin" : "user")
    }),
    s.$watch("GroupId", function(t, e) {
        console.log("groupId", t)
    }),
    s.$watch("GroupName", function(t, e) {
        console.log("GroupName", t)
    }),
    l.getData("api/page/UserEnumComboTree?type=Degree", "POST", {}).then(function(t) {
        s.degreeList = t
    })
}
]),
angular.module("luZhouApp").directive("tmChangeUserInfo", function() {
    return {
        templateUrl: "components/tmChangeUserInfo.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "Notification", "$q", "$rootScope", function(t, e, a, i, s) {}
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classDetailCtrl", ["$scope", "$loading", "commonService", "$stateParams", "$state", function(s, e, n, t, l) {
    s.Id = t.Id,
    e.start("classMy"),
    e.start("classDetail"),
    e.start("personalLearningInfo"),
    s.checkUserClass = function() {
        n.getData(ALL_PORT.CheckUserClass.url, "POST", $.extend({}, ALL_PORT.CheckUserClass.data, {
            trainingId: s.Id
        })).then(function(t) {
            0 == t.Type && (alert("请先加入培训班!"),
            window.history.go(-1))
        })
    }
    ,
    s.checkUserClass(),
    n.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        e.finish("classMy"),
        s.classMyData = t.Data
    }),
    n.getData(ALL_PORT.ClassDetail.url, "POST", $.extend({}, ALL_PORT.ClassDetail.data, {
        Id: s.Id
    })).then(function(t) {
        e.finish("classDetail"),
        s.classDetailData = t.Data,
        s.ImgPath = t.Data.ImagePath
    }),
    s.havTest = function(i) {
        var t = $.extend({}, ALL_PORT.Exam.data, s.token, {
            parameter1: i
        });
        n.getData(ALL_PORT.Exam.url, "POST", t).then(function(t) {
            if (t.Type)
                n.alertMs(t.Message);
            else {
                var e = window.open("about:blank", "_blank")
                  , a = l.href("exam", {
                    Id: i
                });
                e.location.href = a
            }
        })
    }
    ,
    s.textNum = 140,
    s.inputChange = function() {
        s.textNum = 140 - parseInt(s.description.length)
    }
    ,
    s.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 5
    }),
    s.getTrainingSayList = function(t) {
        n.getData(ALL_PORT.TrainingSayList.url, "POST", $.extend({}, ALL_PORT.TrainingSayList.data, {
            rows: 5,
            mainId: s.Id
        }, t)).then(function(t) {
            s.trainingSayList = t.Data.List,
            s.paginationConf.totalItems = t.Data.TotalCount
        })
    }
    ,
    s.$watch("paginationConf.currentPage", function() {
        var t = {
            page: s.paginationConf.currentPage
        };
        s.getTrainingSayList(t)
    }),
    s.addTrainingReply = function(t, e, a) {
        var i = {
            content: t,
            mainId: e,
            parentId: a
        };
        140 < t.length ? alert("评论字数超出140字！") : n.getData(ALL_PORT.AddTrainingSay.url, "POST", $.extend({}, ALL_PORT.AddTrainingSay.data, i)).then(function(t) {
            1 == t.Type ? (alert("评论成功！"),
            s.getTrainingSayList()) : alert(t.Message)
        })
    }
    ,
    s.delTrainingSay = function(t) {
        n.getData(ALL_PORT.DelTrainingSay.url, "POST", $.extend({}, ALL_PORT.DelTrainingSay.data, {
            id: t
        })).then(function(t) {
            1 == t.Type ? (alert(t.Message),
            s.getTrainingSayList()) : alert(t.Message)
        })
    }
}
]),
angular.module("luZhouApp").directive("tmPersonalLearningInfo", function() {
    return {
        templateUrl: "components/tmPersonalLearningInfo.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            t.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
                Id: e.Id
            })).then(function(t) {
                a.finish("personalLearningInfo"),
                e.classInfoData = t.Data
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassNavigation", function() {
    return {
        templateUrl: "components/tmClassNavigation.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classPlanCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    a.start("classMy"),
    a.start("classPlan"),
    a.start("personalLearningInfo"),
    i.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    i.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    i.getData(ALL_PORT.ClassPlan.url, "POST", $.extend({}, ALL_PORT.ClassPlan.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("classPlan"),
        e.classPlanData = t.Data
    })
}
]),
angular.module("luZhouApp").directive("tmClassPlan", function() {
    return {
        templateUrl: "components/tmClassPlan.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classStudentCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    a.start("classMy"),
    a.start("classStudent"),
    a.start("personalLearningInfo"),
    i.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    i.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ClassStudent.data.rows
    }),
    e.queryClassStudent = function(t) {
        i.getData(ALL_PORT.ClassStudent.url, "POST", $.extend({}, ALL_PORT.ClassStudent.data, {
            Id: e.Id
        }, t)).then(function(t) {
            a.finish("classStudent"),
            e.classStudentData = t.Data,
            e.paginationConf.totalItems = t.Data.Pass
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryClassStudent(t)
    })
}
]),
angular.module("luZhouApp").directive("tmClassStudent", function() {
    return {
        templateUrl: "components/tmClassStudent.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassPaperList", function() {
    return {
        templateUrl: "components/tmClassPaperList.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classPaperListCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    a.start("classMy"),
    a.start("classPaperList"),
    a.start("personalLearningInfo"),
    i.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    i.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ClassPaperList.data.rows
    }),
    e.queryClassPaperList = function(t) {
        i.getData(ALL_PORT.ClassPaperList.url, "POST", $.extend({}, ALL_PORT.ClassPaperList.data, {
            Id: e.Id
        }, t)).then(function(t) {
            a.finish("classPaperList"),
            e.classPaperListData = t.Data,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryClassPaperList(t)
    })
}
]),
angular.module("luZhouApp").controller("photoAlbumListCtrl", ["$scope", "$location", "$loading", "$stateParams", "commonService", function(e, t, a, i, s) {
    e.Id = i.Id,
    a.start("personalLearningInfo"),
    a.start("classMy"),
    a.start("photoAlbumList"),
    s.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    s.getData(ALL_PORT.ClassMy.url, "POST", $.extend({}, ALL_PORT.ClassMy.data)).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.PhotoAlbumList.data.rows
    }),
    e.queryPhotoAlbumList = function(t) {
        s.getData(ALL_PORT.PhotoAlbumList.url, "POST", $.extend({}, ALL_PORT.PhotoAlbumList.data, {
            Id: e.Id
        }, t)).then(function(t) {
            a.finish("photoAlbumList"),
            e.Data = t.Data,
            e.paginationConf.totalItems = t.Data.Count,
            e.ImgSrc = t.Data.ImagePath
        })
    }
    ,
    e.getPhotoAlbumAdd = function() {
        e.hidValueImage = $("#hidValueImage").val(),
        s.getData(ALL_PORT.GetPhotoAlbumAdd.url, "POST", $.extend({}, ALL_PORT.GetPhotoAlbumAdd.data, {
            Name: e.name,
            Description: e.description,
            ImgUrl: e.hidValueImage,
            TrainingId: e.Id
        })).then(function(t) {
            alert(t.Message),
            0 < t.Type && ($(".modal").modal("hide"),
            e.queryPhotoAlbumList({
                page: 1
            }))
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryPhotoAlbumList(t)
    })
}
]),
angular.module("luZhouApp").directive("tmPhotoAlbumList", function() {
    return {
        templateUrl: "components/tmPhotoAlbumList.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassTopicList", function() {
    return {
        templateUrl: "components/tmClassTopicList.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classTopicListCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    a.start("classMy"),
    a.start("classTopicList"),
    a.start("personalLearningInfo"),
    i.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    i.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ClassTopicList.data.rows
    }),
    e.queryClassTopicList = function(t) {
        i.getData(ALL_PORT.ClassTopicList.url, "POST", $.extend({}, ALL_PORT.ClassTopicList.data, {
            Id: e.Id
        }, t)).then(function(t) {
            a.finish("classTopicList"),
            e.Data = t.Data,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryClassTopicList(t)
    })
}
]),
angular.module("luZhouApp").controller("classCourseCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    e.type = t.Type,
    "required" == e.type ? e.couseTypeText = "必修" : "electives" == e.type ? e.couseTypeText = "选修" : e.couseTypeText = "",
    a.start("classMy"),
    a.start("classCourse"),
    a.start("personalLearningInfo"),
    i.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    i.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ClassCourse.data.rows
    }),
    e.queryClassCourse = function(t) {
        i.getData(ALL_PORT.ClassCourse.url, "POST", $.extend({}, ALL_PORT.ClassCourse.data, {
            Id: e.Id,
            type: e.type
        }, t)).then(function(t) {
            a.finish("classCourse"),
            e.Data = t.Data,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryClassCourse(t)
    })
}
]),
angular.module("luZhouApp").directive("tmClassCourse", function() {
    return {
        templateUrl: "components/tmClassCourse.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassNotice", function() {
    return {
        templateUrl: "components/tmClassNotice.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classNoticeCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    a.start("classMy"),
    a.start("classNotice"),
    a.start("personalLearningInfo"),
    i.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    i.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ClassNoticeList.data.rows
    }),
    e.queryClassNotice = function(t) {
        i.getData(ALL_PORT.ClassNoticeList.url, "POST", $.extend({}, ALL_PORT.ClassNoticeList.data, {
            Id: e.Id
        }, t)).then(function(t) {
            a.finish("classNotice"),
            e.Data = t.Data,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryClassNotice(t)
    })
}
]),
angular.module("luZhouApp").controller("classExamCtrl", ["$scope", "$loading", "$stateParams", "commonService", "$state", function(e, a, t, s, n) {
    e.Id = t.Id,
    a.start("classMy"),
    a.start("classDetail"),
    a.start("personalLearningInfo"),
    s.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    s.getData(ALL_PORT.ClassMy.url, "POST", ALL_PORT.ClassMy.data).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ClassExam.data.rows
    }),
    e.queryClassExam = function(t) {
        s.getData(ALL_PORT.ClassExam.url, "POST", $.extend({}, ALL_PORT.ClassExam.data, {
            Id: e.Id
        }, t)).then(function(t) {
            a.finish("classDetail"),
            e.Data = t.Data,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryClassExam(t)
    }),
    e.havTest = function(i) {
        var t = $.extend({}, ALL_PORT.Exam.data, e.token, {
            parameter1: i
        });
        s.getData(ALL_PORT.Exam.url, "POST", t).then(function(t) {
            if (t.Type)
                s.alertMs(t.Message);
            else {
                var e = window.open("about:blank", "_blank")
                  , a = n.href("exam", {
                    Id: i
                });
                e.location.href = a
            }
        })
    }
}
]),
angular.module("luZhouApp").directive("tmClassExam", function() {
    return {
        templateUrl: "components/tmClassExam.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("classArticleDetailCtrl", ["$scope", "$loading", "$stateParams", "commonService", function(e, a, t, i) {
    e.Id = t.Id,
    e.isshow = !0,
    a.start("tmshowarticledetail"),
    i.getData(ALL_PORT.ClassArticleDetail.url, "POST", $.extend({}, ALL_PORT.ClassArticleDetail.data, {
        Id: e.Id
    })).then(function(t) {
        a.finish("tmshowarticledetail"),
        e.articleData = t.Data.Model,
        e.Data = t.Data.Model,
        e.CreatedDate = t.Data.Model.CreatedDate
    })
}
]),
angular.module("luZhouApp").directive("dateTimePicker", ["$timeout", function(n) {
    return {
        restrict: "A",
        require: "?ngModel",
        scope: {
            select: "&"
        },
        link: function(e, a, t, i) {
            if (i) {
                var s = {};
                n(function() {
                    function t() {
                        var t = a.val();
                        i.$setViewValue(t)
                    }
                    s = {
                        language: "zh-CN",
                        format: "yyyy-mm-dd",
                        weekStart: 1,
                        todayBtn: !0,
                        autoclose: !0,
                        todayHighlight: !0,
                        startView: "month",
                        forceParse: !1,
                        minView: "month",
                        initialDate: new Date
                    },
                    $(a).datetimepicker(s),
                    i.$render = function() {
                        a.val(i.$viewValue || "")
                    }
                    ,
                    a.on("blur change", function() {
                        e.$apply(t)
                    })
                }, 0)
            }
        }
    }
}
]),
angular.module("luZhouApp").controller("MessagelistCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(a, t, e, i, s, n, l) {
    a.token = s.AntiForgeryToken(),
    l.start("messageList"),
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.MessageList.data.rows
    }),
    a.requestMessageList = function(t) {
        var e = $.extend({}, ALL_PORT.MessageList.data, t);
        s.getData(ALL_PORT.MessageList.url, "POST", e).then(function(t) {
            l.finish("messageList"),
            a.paginationConf.totalItems = t.Data.Count,
            a.messageListData = t.Data
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = a.paginationConf.currentPage,
        a.requestMessageList(t)
    }),
    a.allClass = [{
        name: "课程建设",
        value: "Curricula"
    }, {
        name: "支持服务",
        value: "Support"
    }, {
        name: "平台功能",
        value: "Platform"
    }],
    a.messageClass = "Curricula",
    a.messageName = "",
    a.messageContent = "",
    a.addMessage = function(t) {
        s.limitSubmit(function() {
            t.Name.length < 2 ? s.alertMs("标题字数不能少于2个字！") : 249 <= t.Content.length ? s.alertMs("留言说明字数不能超过249个字") : t.Content.length < 7 ? s.alertMs("留言说明字数不能少于7个字") : s.getData(ALL_PORT.GetMessageAdd.url, "POST", $.extend({}, ALL_PORT.GetMessageAdd.data, a.token, t)).then(function(t) {
                $(".notemodal").modal("hide"),
                s.alertMs(t.Message)
            })
        })
    }
}
]),
angular.module("luZhouApp").directive("tmMessageList", function() {
    return {
        templateUrl: "components/tmMessageList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("MessagedetailCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", function(e, t, a, i, s, n, l, r) {
    l.start("messageListDetail");
    var o = r.Id
      , d = $.extend({}, ALL_PORT.MessageDetail.data, {
        id: o
    });
    s.getData(ALL_PORT.MessageDetail.url, "POST", d).then(function(t) {
        l.finish("messageListDetail"),
        e.messageDetailData = t.Data
    })
}
]),
angular.module("luZhouApp").directive("tmMessageDetail", function() {
    return {
        templateUrl: "components/tmMessageDetail.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ExamCtrl", ["$scope", "$http", "$rootScope", "$cookieStore", "commonService", "$state", "$location", "$loading", "$stateParams", "$interval", function(c, t, e, a, i, p, s, n, l, r) {
    c.token = i.AntiForgeryToken(),
    n.start("exam");
    var u = l.Id
      , o = $.extend({}, ALL_PORT.Exam.data, {
        parameter1: u
    })
      , m = null;
    localStorage && localStorage.getItem("exam" + u) || i.getData(ALL_PORT.Exam.url, "POST", o).then(function(t) {
        if (n.finish("exam"),
        t.Type)
            return i.alertMs(t.Message),
            void window.open("about:blank", "_top").close();
        0 != t.Data.Exam.TimeLimit && (c.seconds = 60 * parseInt(t.Data.Exam.TimeLimit)),
        c.examData = t.Data,
        m = t.Data.Ticket,
        c.checkingQuestions = t.Data.Type0Questions,
        c.singleQuestions = t.Data.Type1Questions,
        c.multipleQuestions = t.Data.Type2Questions,
        c.adviseQuestions = t.Data.Type3Questions,
        c.gapFillingQuestions = t.Data.Type4Questions,
        c.examAllScore1 = i.examAllScore
    });
    var d = r(function() {
        c.seconds -= 1,
        0 == c.seconds && (r.cancel(d),
        i.alertMs("考试时间到,系统将自动提交！"),
        c.submitForm(1))
    }, 1e3);
    c.submitForm = function(t) {
        var s = "判断题第"
          , n = "单选题第"
          , l = "多选题第"
          , r = "意见题第"
          , o = "填空题第"
          , d = [];
        $("input:hidden[name^='questionid']").each(function(t, e) {
            var a = $(this).data("type")
              , i = {
                QuestionId: this.value,
                Answer: "",
                Content: ""
            };
            0 < $("input[name='radio" + this.value + "']").length && (0 < $("input[name='radio" + this.value + "']:checked").length ? i.Answer = $("input[name='radio" + this.value + "']:checked").val() : ("0" == $(this).siblings(".tibg").children(".questionNum").attr("type") && (s += $(this).siblings(".tibg").children(".questionNum").html()),
            "1" == $(this).siblings(".tibg").children(".questionNum").attr("type") && (n += $(this).siblings(".tibg").children(".questionNum").html()))),
            0 < $("input[name='checkbox" + this.value + "']").length && (0 < $("input[name='checkbox" + this.value + "']:checked").length ? $("input[name='checkbox" + this.value + "']:checked").each(function(t, e) {
                i.Answer += $(e).val()
            }) : "2" == $(this).siblings(".tibg").children(".questionNum").attr("type") && (l += $(this).siblings(".tibg").children(".questionNum").html())),
            0 < $("textarea[name='textbox" + this.value + "']").length && ($("textarea[name='textbox" + this.value + "']").val() ? i.Content = $("textarea[name='textbox" + this.value + "']").val() : "3" == $(this).siblings(".tibg").children(".questionNum").attr("type") && (r += $(this).siblings(".tibg").children(".questionNum").html())),
            "type4" != a && d.push(i)
        }),
        "判断题第题、" == (s += "题、") && (s = ""),
        "单选题第题、" == (n += "题、") && (n = ""),
        "多选题第题、" == (l += "题、") && (l = ""),
        "意见题第题、" == (r += "题、") && (r = "");
        $("#editForm").serialize();
        if ($(".blankName").each(function(t) {
            var e = c.gapFillingQuestions[t].Id
              , a = "&blanktext" + e + "="
              , i = $(this).find("input").length - 1
              , s = {
                QuestionId: e,
                Answer: "",
                Content: ""
            }
              , n = [];
            $(this).find("input").each(function(t) {
                n.push($(this).val()),
                $(this).val() && (a += t < i ? $(this).val() + "♩" : $(this).val())
            }),
            a == "&blanktext" + e + "=" && (o += t + 1 + " 题"),
            a,
            s.Content = JSON.stringify(n),
            d.push(s)
        }),
        "填空题第" == o && (o = ""),
        "1" == t || s + n + l + r + o === "" || s + n + l + r + o !== "" && confirm(s + n + l + r + o + "未答,是否提交?")) {
            var e = {
                ExamId: u,
                PassExam: "",
                Ticket: m,
                Data: d
            };
            i.getData(ALL_PORT.PostExam.url, "POST", e).then(function(t) {
                1 == t.Type ? (i.alertMs(t.Message),
                p.go("examReview", {
                    examId: u,
                    recordId: t.Value
                })) : -1 !== t.Message.indexOf("等待阅卷") ? i.alertMs(t.Message, function() {
                    i.closeWindow()
                }) : i.alertMs(t.Message)
            }, function(t) {
                i.alertMs("提交失败", function() {
                    i.closeWindow()
                })
            })
        }
    }
    ,
    c.replaceInput = function(t) {
        return t.replace(/\[@*\]+/g, "<input type='text' class='form-control'/>")
    }
}
]),
angular.module("luZhouApp").directive("tmExam", function() {
    return {
        templateUrl: "components/tmExam.html",
        restrict: "A",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("PersonalearningarchivesCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$q", "Notification", function(i, t, e, a, s, n, l, r, o) {
    i.startDate = "",
    i.endDate = "",
    i.yearHistory = [];
    for (var d, c, p, u = (new Date).getFullYear(), m = u; 2017 <= m; m--) {
        var g = m + "";
        i.yearHistory.push({
            name: g,
            value: g
        })
    }
    i.selectYearValue = u + "",
    i.yearChange = function() {
        i.getUserInfo(),
        i.timeSearch(),
        i.getPrintInfo()
    }
    ,
    i.tableShowOne = !1,
    i.tableShowTwo = !1,
    i.showTable = function(t) {
        "one" == t ? i.tableShowOne = !i.tableShowOne : "two" == t && (i.tableShowTwo = !i.tableShowTwo)
    }
    ,
    i.paginationConf = [{
        currentPage: 1,
        totalItems: 0,
        itemsPerPage: 10,
        pagesLength: 6,
        perPageOptions: [10, 20, 30, 40, 50]
    }, {
        currentPage: 1,
        totalItems: 0,
        itemsPerPage: 10,
        pagesLength: 6,
        perPageOptions: [10, 20, 30, 40, 50]
    }],
    i.getUserInfo = function() {
        l.start("personalArchive");
        var t = $.extend({}, {
            year: i.selectYearValue
        });
        s.getData(ALL_PORT.GetUserStudyStatistics.url, "post", t).then(function(t) {
            l.finish("personalArchive"),
            i.userInfo = t.Data,
            i.userInfo.SumCredit = i.userInfo.ComCredit + i.userInfo.PubCredit + i.userInfo.ProCredit
        })["catch"](function() {
            l.finish("personalArchive")
        })
    }
    ,
    i.getUserInfo(),
    i.getBatchInfo = function(t) {
        var e = $.extend({
            typeId: 1,
            page: 1,
            rows: 10,
            year: i.selectYearValue
        }, t);
        s.getData(ALL_PORT.GetUserPrintInfo.url, "POST", e).then(function(t) {
            i.comInfo = t.Data,
            i.paginationConf[0].totalItems = t.Data.Count
        })
    }
    ,
    i.getBatchProInfo = function(t) {
        var e = $.extend({
            typeId: 2,
            page: 1,
            rows: 10,
            year: i.selectYearValue
        }, t);
        s.getData(ALL_PORT.GetUserPrintInfo.url, "POST", e).then(function(t) {
            i.proInfo = t.Data,
            i.paginationConf[1].totalItems = t.Data.Count
        })
    }
    ,
    i.timeSearch = function() {
        i.getBatchInfo(),
        i.getBatchProInfo()
    }
    ,
    i.$watch("paginationConf[0].currentPage", function(t, e) {
        var a = {
            page: i.paginationConf[0].currentPage,
            startDate: i.startDate,
            endDate: i.endDate
        };
        i.getBatchInfo(a)
    }),
    i.$watch("paginationConf[1].currentPage", function(t, e) {
        var a = {
            page: i.paginationConf[1].currentPage,
            startDate: i.startDate,
            endDate: i.endDate
        };
        i.getBatchProInfo(a)
    }),
    i.today = new Date,
    i.getPrintInfo = function() {
        d = s.getData(ALL_PORT.GetUserPrintInfo.url, "POST", {
            typeId: 1,
            page: 1,
            rows: 1e4,
            year: i.selectYearValue
        }).then(function(t) {
            i.batchFlag = t.IsSuccess,
            i.batchMessage = t.Message,
            i.batchData = t.Data
        }),
        c = s.getData(ALL_PORT.GetUserPrintInfo.url, "POST", {
            typeId: 2,
            page: 1,
            rows: 1e4,
            year: i.selectYearValue
        }).then(function(t) {
            i.batchProFlag = t.IsSuccess,
            i.batchProMessage = t.Message,
            i.batchProData = t.Data
        })
    }
    ,
    i.getPrintInfo(),
    s.getData(ALL_PORT.GetBatchSealImg.url, "POST").then(function(t) {
        i.sealImg = t.Data.SealImg
    });
    var v = setInterval(function() {
        0 < $("#qrcode").length && (clearInterval(v),
        p = new QRCode("qrcode"))
    }, 500);
    i.openModal = function(t) {
        switch (i.printType = t) {
        case "batch":
            r.all([d]).then(function() {
                i.batchFlag ? (i.printData = i.batchData,
                i.totalCredit = 0,
                i.printData.QRCode && (p.clear(),
                p.makeCode(i.printData.QRCode)),
                angular.forEach(i.printData.CourseList, function(t) {
                    i.totalCredit += t.Credit
                }),
                $(".printModal").modal("show")) : o.error(i.batchMessage)
            });
            break;
        case "batchPro":
            r.all([c]).then(function() {
                i.batchProFlag ? (i.printData = i.batchProData,
                i.totalCredit = 0,
                i.printData.QRCode && (p.clear(),
                p.makeCode(i.printData.QRCode)),
                angular.forEach(i.printData.CourseList, function(t) {
                    i.totalCredit += t.Credit
                }),
                $(".printModal").modal("show")) : o.error(i.batchProMessage)
            })
        }
    }
    ,
    i.print = function(t) {
        s.print($(".printModal .modal-body"))
    }
}
]),
angular.module("luZhouApp").directive("tmPersonalArchives", function() {
    return {
        templateUrl: "components/tmPersonalArchives.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ExamdetaillistCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", function(a, t, e, i, s, n, l, r) {
    l.start("examDetail"),
    a.Id = r.Id,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.ExamDetailListItem.data.rows
    }),
    a.requestExamDetail = function(t) {
        var e = $.extend({}, ALL_PORT.ExamDetailListItem.data, t, {
            examid: a.Id
        });
        s.getData(ALL_PORT.ExamDetailListItem.url, "POST", e).then(function(t) {
            l.finish("examDetail"),
            a.paginationConf.totalItems = t.Data.Count,
            a.examDetailData = t.Data
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = a.paginationConf.currentPage,
        a.requestExamDetail(t)
    })
}
]),
angular.module("luZhouApp").directive("tmExamDetail", function() {
    return {
        templateUrl: "components/tmExamDetail.html",
        restrict: "A",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ExamreviewCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", function(e, t, a, i, s, n, l, r) {
    var o = r.examId
      , d = r.recordId;
    l.start("examReview"),
    s.getData(ALL_PORT.ExamReview.url, "POST", $.extend({}, ALL_PORT.ExamReview.data, {
        parameter1: o,
        parameter2: d
    })).then(function(t) {
        l.finish("examReview"),
        e.examReviewData = t.Data,
        e.checkingQuestions = t.Data.Type0Questions,
        e.singleQuestions = t.Data.Type1Questions,
        e.multipleQuestions = t.Data.Type2Questions,
        e.adviseQuestions = t.Data.Type3Questions,
        e.gapFillingQuestions = t.Data.Type4Questions,
        e.examAllScore = s.examAllScore2,
        e.countIf = s.countIf,
        e.rightScore = s.rightScore
    }),
    e.replaceInput = function(t) {
        return t.replace(/\[@*\]+/g, "______")
    }
    ,
    e.replaceAnswer = function(t) {
        return t.replace(/♩+/g, ",")
    }
}
]),
angular.module("luZhouApp").directive("tmExamReview", function() {
    return {
        templateUrl: "components/tmExamReview.html",
        restrict: "A",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("PlayCtrl", ["$scope", "$http", "$timeout", "$interval", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", "$sce", "Notification", function(h, t, e, d, a, i, y, s, n, l, g, b) {
    h.Id = l.Id,
    h.token = y.AntiForgeryToken(),
    h.allPlayInfo,
    h.userId;
    var r = 0
      , o = 0;
    h.loadPlayInfo = function() {
        y.getData(ALL_PORT.Play.url, "POST", $.extend({}, ALL_PORT.Play.data, {
            id: h.Id
        })).then(function(t) {
            200 == t.Status ? (h.userId = t.Data.UserId,
            h.allPlayInfo = t.Data,
            y.beforeUnload(h.userId),
            t.Data && null == t.Data.Content ? t.Data.PortalId && t.Data.UserId && t.Data.CourseId ? (0 == r && (y.refresh(h.allPlayInfo.PortalId, h.allPlayInfo.UserId, h.allPlayInfo.CourseId),
            r = 1),
            h.options = t.Data.PlayPage,
            h.resultCourseDetail = t.Data.resultCourseDetail,
            h.resultCourseNote = t.Data.resultCourseNote,
            o = t.Data.resultCourseDetail.BrowseScore) : (alert("数据无效，请检查api"),
            window.close()) : t.Data && t.Data.Content && (alert("同时只能打开一门课程,请关闭之前页面,并于" + t.Data.Content + "秒后重试！"),
            window.close())) : (alert(t.Message),
            window.close())
        })
    }
    ,
    h.getComment = function() {
        n.start("playComment"),
        y.getData(ALL_PORT.CourseComment.url, "POST", $.extend({}, ALL_PORT.CourseComment.data, {
            id: h.Id
        })).then(function(t) {
            n.finish("playComment"),
            h.resultComment = t.Data
        })
    }
    ,
    h.getComment(),
    h.loadPlayInfo();
    var c = function() {
        h.playMp4Data = {};
        var t = $.extend({}, ALL_PORT.PlayJwplay.data, {
            courseid: h.allPlayInfo.CourseId
        })
          , g = "stop"
          , v = null
          , f = {
            startTime: 0,
            increaseTime: 0,
            totalTime: 0
        };
        y.getData(ALL_PORT.PlayJwplay.url, "POST", t).then(function(t) {
            h.playMp4Data = t.Data;
            var e = t.Data.PortalId
              , a = t.Data.UserId
              , i = t.Data.CourseId
              , s = t.Data.LastPostion
              , n = t.Data.Location
              , l = t.Data.Question
              , r = []
              , o = {};
            angular.forEach(l, function(t) {
                this.push(t.time),
                o[t.time] = t
            }, r);
            var d = jwplayer("myplayer").setup({
                flashplayer: "plugins/jwplayer/jwplayer.flash.swf",
                file: h.playMp4Data.Url,
                autostart: "true",
                width: "100%",
                height: "100%"
            })
              , c = function() {
                if (d.getPosition()) {
                    var t = $.extend({}, {
                        PortalId: e,
                        userid: a,
                        courseid: i,
                        positionen: Math.floor(d.getPosition()).toString().rsaEnscrypt()
                    }, h.token);
                    y.getData(ALL_PORT.SingleProcess.url, "POST", t).then(function(t) {
                        h.resultCourseDetail.BrowseScore = t.BrowseScore
                    }, function() {
                        alert("网路异常，将刷新!"),
                        window.location.reload()
                    })
                }
                setTimeout(c, 3e4)
            }
              , p = function() {
                f.totalTime = f.startTime + f.increaseTime;
                var t = d.getPosition() - 3
                  , e = Math.floor(d.getPosition());
                if ("PLAYING" == d.getState() && t > f.totalTime && (g = "stop",
                d.play(!1),
                y.alertMs("请不要在未播放区域拖动，否则可能丢失进度！"),
                d.seek(f.totalTime - 1),
                g = "play"),
                -1 < r.indexOf(e)) {
                    clearInterval(v),
                    g = "stopTest",
                    0,
                    h.questionItem = o[e].Item,
                    $(".questionModal li").removeClass("checked correct wrong hasChecked");
                    var a = h.$watch("questionItem", function() {
                        $(".questionModal").on("show.bs.modal", function() {
                            d.play(!1),
                            $(".questionModal").off("show.bs.modal")
                        }),
                        $(".questionModal").modal("show"),
                        $(".questionModal").on("hidden.bs.modal", function() {
                            g = "play",
                            d.play(!0),
                            setTimeout(function() {
                                v = setInterval(p, 1e3)
                            }, 500),
                            $(".questionModal").off("hidden.bs.modal")
                        }),
                        a()
                    }, !0)
                }
            };
            h.checkAnswer = function(t, e, a) {
                $(t.target).siblings("li").each(function(t, e) {
                    var a = $(e);
                    a.hasClass("hasChecked") ? a.removeClass("checked") : a.removeClass("checked correct wrong")
                }),
                $(t.target).addClass("checked").addClass(e == a ? "correct" : "wrong")
            }
            ,
            h.submitTest = function() {
                $(".questionModal li.checked.correct").length == h.questionItem.length ? $(".questionModal").modal("hide") : $(".questionModal li.checked").length != h.questionItem.length ? b.error("请答完试题！") : b.error("请选择正确答案！"),
                $(".questionModal li.correct").addClass("hasChecked"),
                $(".questionModal li.wrong").addClass("hasChecked").removeClass("checked")
            }
            ;
            var u = 0
              , m = setInterval(function() {
                if (u < 1 && 1 <= $(".jwrail").length) {
                    $(".jwrail").eq(0).append('<span class="jwwarning">禁止拖动至此</span>'),
                    $(".jwrail").eq(0).children(".Buffer").after('<span class="jwwarningbuffer"></span>'),
                    u++;
                    var t = setInterval(function() {
                        var t = f.totalTime
                          , e = d.getDuration()
                          , a = $(".jwrail").eq(0).width();
                        $(".jwwarningbuffer").css({
                            left: t < e ? t / e * a + "px" : e / e * a + "px"
                        })
                    }, 100);
                    window.clearInterval(m),
                    $(".jwrail").mousemove(function() {
                        var t, e, a;
                        t = $(".jwrail").eq(0).width(),
                        e = f.totalTime / d.getDuration() * t,
                        a = parseInt($(".jwoverlay")[0].style.left, 10),
                        $(".jwwarning")[0].style.left = $(".jwoverlay")[0].style.left,
                        e < a ? $(".jwwarning").stop().fadeTo(50, 1) : $(".jwwarning").stop().hide()
                    }),
                    $(".jwrail").mouseout(function() {
                        $(".jwwarning").stop().fadeOut(250)
                    }),
                    h.$on("$destroy", function() {
                        console.log("destroy trailTimer"),
                        clearInterval(t)
                    })
                }
            }, 1e3);
            !function() {
                f.startTime = parseFloat(n) + 1;
                var t = setInterval(function() {
                    "PLAYING" == d.getState() && d.getPosition() > f.totalTime - 5 && (f.increaseTime += 1)
                }, 1e3);
                v = setInterval(p, 1e3),
                h.$on("$destroy", function() {
                    console.log("destroy timePool"),
                    clearInterval(t),
                    clearInterval(v)
                })
            }(),
            setTimeout(c, 8e3),
            null != s && "无数据" != s && (g = "play",
            d.seek(s)),
            $(document).on("visibilitychange", function() {
                //修改部分
                if(/play\/play/g.test(window.location.href)){
                    return
                }
                //-------------------
                "hidden" == document.visibilityState ? (g = "play" == g ? "stop" : g,
                d.play(!1)) : "stopTest" == g ? d.play(!1) : "stop" == g && d.play(!0)
            })
        }, function() {
            y.closeWindow()
        })
    }
      , p = function() {
        var t = $.extend({}, ALL_PORT.PlayOffice.data, {
            courseId: h.allPlayInfo.CourseId
        });
        y.getData(ALL_PORT.PlayOffice.url, "POST", t).then(function(t) {
            if (0 <= t.Data.Url.indexOf(".pdf")) {
                h.pdf = {
                    showPdf: !0,
                    src: t.Data.Url
                },
                h.onPageLoad = function(t) {
                    console.log(t)
                }
                ;
                var p = t.Data;
                h.onInit = function() {
                    var i, a = PDFViewerApplication, s = (p.Url,
                    p.UserId), n = p.CourseId, t = p.LastPostion || 1, e = p.Location || 1, l = 0;
                    a.page = t,
                    i = a.pagesCount,
                    function c() {
                        l += 1;
                        $("#stime").html(l);
                        setTimeout(c, 1e3)
                    }();
                    var r = parseFloat(t)
                      , o = parseFloat(e);
                    a.eventBus.on("pagechange", function(t) {
                        var e = t.pageNumber;
                        i && (l < 10 ? o < e ? (a.page = r,
                        alert("你翻太快了")) : r = e : e == o + 1 ? (d(e),
                        r = o = e,
                        l = 0) : o + 1 < e ? (a.page = r,
                        alert("你翻太快了")) : (r = e,
                        l = 0))
                    }),
                    a.pdfDocument.loadingTask.promise.then(function(t) {
                        console.log(t)
                    });
                    var d = function(t) {
                        var e = {
                            course_id: n,
                            lesson_id: t,
                            user_id: s,
                            total_id: i
                        }
                          , a = $.extend({}, e, h.token);
                        y.getData(ALL_PORT.ProcessOffice.url, "POST", a).then(function(t) {
                            h.resultCourseDetail.BrowseScore = t.BrowseScore
                        })
                    }
                }
            } else
                h.pdf = {
                    showPdf: !1,
                    src: t.Data.Url
                },
                function(t) {
                    var e = $(".warnPdf").outerHeight()
                      , a = document.documentElement.clientHeight;
                    $(".flexpaper_viewer").css({
                        width: 1e3,
                        height: a - e
                    });
                    var i = t.Url
                      , s = t.UserId
                      , n = t.CourseId
                      , l = t.LastPostion || 1
                      , r = t.Location || 1
                      , o = 0
                      , d = 0;
                    $("#documentViewer").FlexPaperViewer({
                        config: {
                            SWFFile: escape(i),
                            Scale: .8,
                            ZoomTransition: "easeOut",
                            ZoomTime: .5,
                            ZoomInterval: .2,
                            FitPageOnLoad: !1,
                            FitWidthOnLoad: !0,
                            FullScreenAsMaxWindow: !1,
                            ProgressiveLoading: !1,
                            MinZoomSize: .2,
                            MaxZoomSize: 5,
                            SearchMatchAll: !1,
                            InitViewMode: "Portrait",
                            RenderingOrder: "flash",
                            StartAtPage: l,
                            ViewModeToolsVisible: !0,
                            ZoomToolsVisible: !0,
                            NavToolsVisible: !0,
                            CursorToolsVisible: !0,
                            SearchToolsVisible: !0,
                            WMode: "window",
                            localeChain: "zh_CN",
                            jsDirectory: "plugins/FlexPaper/js/",
                            cssDirectory: "plugins/FlexPaper/css/"
                        }
                    }),
                    $("#documentViewer").bind("onDocumentLoaded", function(t, e) {
                        o = e,
                        m()
                    }),
                    $(window).keydown(function(t) {
                        switch (t.keyCode) {
                        case 13:
                        case 40:
                            $FlexPaper("documentViewer").nextPage();
                            break;
                        case 38:
                            $FlexPaper("documentViewer").prevPage()
                        }
                    });
                    var c = parseFloat(l)
                      , p = parseFloat(r);
                    $("#documentViewer").bind("onCurrentPageChanged", function(t, e) {
                        e = parseInt(e),
                        o && (d < 10 ? p < e ? ($FlexPaper("documentViewer").gotoPage(c),
                        alert("你翻太快了")) : c = e : e == p + 1 ? (u(e),
                        c = p = e,
                        d = 0) : p + 1 < e ? ($FlexPaper("documentViewer").gotoPage(c),
                        alert("你翻太快了")) : (c = e,
                        d = 0))
                    });
                    var u = function(t) {
                        var e = {
                            course_id: n,
                            lesson_id: t,
                            user_id: s,
                            total_id: o
                        }
                          , a = $.extend({}, e, h.token);
                        y.getData(ALL_PORT.ProcessOffice.url, "POST", a).then(function(t) {
                            h.loadPlayInfo()
                        })
                    };
                    function m() {
                        d += 1,
                        $("#stime").html(d),
                        setTimeout(m, 1e3)
                    }
                }(t.Data)
        })
    };
    h.showPlayMp4 = !1,
    h.showPlayJy = !1,
    h.showPlayScorm = !1,
    h.showPlayJyScorm = !1,
    h.showPlaySingle = !1,
    h.showPlayPdf = !1,
    h.dragReady = function() {
        document.getElementById("playBg").style.display = "none";
        var s = d(function() {
            if (h.allPlayInfo) {
                d.cancel(s);
                var t = h.allPlayInfo.PlayPage.split("?")[0];
                "PlayJwplay.html" == t ? (ga("send", "event", "jwplay", "play", "mp4或flash播放"),
                h.showPlayMp4 = !0,
                c()) : "PlayJy.html" == t ? (ga("send", "event", "jy", "play", "精英课程播放"),
                h.showPlayJy = !0,
                i = $.extend({}, ALL_PORT.PlayJY.data, {
                    courseId: h.allPlayInfo.CourseId
                }),
                h.playMJyData = {},
                y.getData(ALL_PORT.PlayJY.url, "POST", i).then(function(t) {
                    h.playMJyData = t.Data,
                    h.BatchId = t.Data.BatchId,
                    h.CourseId = t.Data.CourseId,
                    h.LastPostion = t.Data.LastPostion,
                    h.PortalId = t.Data.PortalId,
                    h.PortalURL = t.Data.PortalURL,
                    h.Url = t.Data.Url,
                    h.UserId = t.Data.UserId,
                    h.jyIframeSrc = g.trustAsResourceUrl(h.Url + "?url=" + h.PortalURL + "/api/CourseProcess/JYProcess?batchId=" + h.BatchId + "&portalId=" + h.PortalId + "&UserId=" + h.UserId + "&courseId=" + h.CourseId),
                    h.PortalId && h.UserId && h.CourseId ? h.Url && h.PortalURL || (alert("没有视频资源！"),
                    window.close()) : (alert("数据无效，请检查api"),
                    window.close())
                })) : "PlayScorm.html" == t ? (ga("send", "event", "scorm", "play", "scorm课程播放"),
                h.showPlayScorm = !0,
                a = $.extend({}, ALL_PORT.PlayScorm.data, {
                    courseId: h.allPlayInfo.CourseId
                }),
                h.playScormData = {},
                y.getData(ALL_PORT.PlayScorm.url, "POST", a).then(function(t) {
                    h.playScormData = t.Data,
                    t.Data.BatchId;
                    var a, i = t.Data.CourseId, e = t.Data.LastPostion, s = t.Data.PortalId, n = (t.Data.PortalURL,
                    t.Data.Url), l = t.Data.UserId;
                    function r(t) {
                        return ""
                    }
                    h.scormIframeSrc = g.trustAsResourceUrl(n),
                    s && l && i || (alert("数据无效，请检查api"),
                    window.close()),
                    window.API = new Object,
                    API.LMSInitialize = function o(t) {
                        return !0
                    }
                    ,
                    API.LMSSetValue = function d(t, e) {
                        switch (t) {
                        case "cmi.core.student_id":
                            a = "cmi.core.student_id";
                            break;
                        case "cmi.core.student_name":
                            a = "cmi.core.student_name";
                            break;
                        case "cmi.core.lesson_location":
                            a = "cmi.core.lesson_location",
                            $.ajax({
                                type: "post",
                                async: !1,
                                url: API_URL + "/CourseProcess/ScormProcess?m=" + a + "&v=" + e,
                                data: {
                                    PortalId: s,
                                    userid: l,
                                    courseid: i,
                                    position: e
                                },
                                success: function(t) {
                                    1 == t.Type && h.loadPlayInfo()
                                }
                            });
                            break;
                        case "cmi.core.credit":
                            a = "cmi.core.credit";
                            break;
                        case "cmi.core.lesson_status":
                            a = "cmi.core.lesson_status";
                            break;
                        case "cmi.core.entry":
                            a = "cmi.core.entry";
                            break;
                        case "cmi.core.score":
                            a = "cmi.core.score";
                            break;
                        case "cmi.core.score.raw":
                            a = "cmi.core.score.raw";
                            break;
                        case "cmi.core.total_time":
                            a = "cmi.core.total_time";
                            break;
                        case "cmi.core.lesson_mode":
                            a = "cmi.core.lesson_mode";
                            break;
                        case "cmi.core.exit":
                            a = "";
                            break;
                        case "cmi.core.session_time":
                            a = "cmi.core.session_time",
                            $.ajax({
                                type: "post",
                                async: !1,
                                url: API_URL + "/CourseProcess/ScormProcess?m=" + a + "&v=" + e,
                                data: {
                                    PortalId: s,
                                    userid: l,
                                    courseid: i,
                                    position: e
                                },
                                success: function(t) {}
                            });
                            break;
                        case "cmi.suspend_data":
                            a = "cmi.suspend_data"
                        }
                        return "true"
                    }
                    ,
                    API.LMSGetValue = function c(t) {
                        switch (t) {
                        case "cmi.core.student_id":
                        case "cmi.core.student_name":
                            break;
                        case "cmi.core.lesson_location":
                            return e;
                        case "cmi.core.credit":
                            break;
                        case "cmi.core.lesson_status":
                            return "true"
                        }
                        return "true"
                    }
                    ,
                    API.LMSCommit = r,
                    API.LMSFinish = function p(t) {
                        return ""
                    }
                    ,
                    API.LMSGetLastError = function u() {
                        return "0"
                    }
                    ,
                    API.LMSGetErrorString = function m(t) {
                        return ""
                    }
                })) : "PlaySingle.html" == t ? (ga("send", "event", "single", "play", "single课程播放"),
                h.showPlaySingle = !0,
                function() {
                    var t = $.extend({}, ALL_PORT.PlaySingle.data, {
                        courseId: h.allPlayInfo.CourseId
                    });
                    h.playSingleData = {};
                    var o = {
                        startTime: 0,
                        increaseTime: 0,
                        totalTime: 0
                    };
                    y.getData(ALL_PORT.PlaySingle.url, "POST", t).then(function(t) {
                        h.playSingleData = t.Data;
                        var e, a = t.Data.PortalId, i = t.Data.UserId, s = t.Data.CourseId, n = t.Data.LastPostion, l = (t.Data.Location,
                        t.Data.Url);
                        a && i && s || (alert("数据无效，请检查api"),
                        window.close()),
                        (e = document.MediaPlayer).Filename = l,
                        e.currentPosition = n,
                        o.startTime = parseFloat(n) + 1,
                        d(function() {
                            o.increaseTime += 1,
                            o.totalTime = o.startTime + o.increaseTime,
                            e.currentPosition > o.totalTime && (y.alertMs("请不要在未播放区域拖动，否则可能丢失进度！"),
                            e.currentPosition = o.totalTime - 3)
                        }, 1e3),
                        $("#btncurrentPosition").click(function() {
                            e.currentPosition = e.currentPosition
                        }),
                        $("#btnduration").click(function() {
                            y.alertMs(e.duration)
                        }),
                        $("#btnURL").click(function() {
                            y.alertMs(e.URL)
                        }),
                        $("#btnplay").click(function() {
                            e.play()
                        }),
                        $("#btnstop").click(function() {
                            e.stop()
                        }),
                        $("#btnpause").click(function() {
                            e.pause()
                        }),
                        $("#btnmute").click(function() {
                            e.settings.mute = !0
                        }),
                        $("#btnfullScreen").click(function() {
                            e.fullScreen = !0
                        }),
                        $("#btnplayState").click(function() {
                            y.alertMs(e.playState)
                        }),
                        setTimeout(function r() {
                            var t = $.extend({}, {
                                PortalId: a,
                                userid: i,
                                courseid: s,
                                positionen: Math.floor(e.currentPosition).toString().rsaEnscrypt()
                            }, h.token);
                            y.getData(ALL_PORT.SingleProcess.url, "POST", t).then(function(t) {
                                h.loadPlayInfo()
                            }, function() {
                                alert("网路异常，将刷新!"),
                                window.location.reload()
                            }),
                            setTimeout(r, 3e4)
                        }, 2e3)
                    }, function() {
                        window.close()
                    })
                }()) : "PlayOffice.html" == t ? (ga("send", "event", "office", "play", "office课程播放"),
                h.showPlayPdf = !0,
                p()) : "PlayJyScorm.html" == t && (ga("send", "event", "scormEnv", "play", "自建课程播放"),
                h.showPlayJyScorm = !0,
                e = $.extend({}, ALL_PORT.PlayJyScorm.data, {
                    id: h.allPlayInfo.CourseId
                }),
                y.getData(ALL_PORT.PlayJyScorm.url, "POST", e).then(function(t) {
                    h.jyScormData = t.Data;
                    var e = t.Data.PortalId
                      , a = t.Data.UserId
                      , i = t.Data.CourseId
                      , s = t.Data.Url
                      , n = t.Data.Progress;
                    h.jyScormSrc = g.trustAsResourceUrl(s + "&portalId=" + e + "&userId=" + a + "&courseId=" + i + "&progress=" + n)
                }))
            }
            var e, a, i
        }, 200)
    }
    ,
    h.vm = {},
    h.editNote = function(e) {
        y.limitSubmit(function() {
            var t = $.extend({}, ALL_PORT.AddNote.data, h.token, e);
            t.Name.length < 2 ? y.alertMs("笔记名称字数不能少于2个字！") : t.Content.length < 7 ? y.alertMs("笔记内容字数不能少于7个字") : 249 <= t.Content.length ? y.alertMs("笔记内容字数不能超过249个字") : 2 <= t.Name.length && t.Content.length < 249 && (n.start("playComment"),
            y.getData(ALL_PORT.AddNote.url, "POST", t).then(function(t) {
                n.finish("playComment"),
                h.noteName = "",
                h.noteContent = "",
                y.alertMs("添加完成！"),
                h.loadPlayInfo()
            }))
        })
    }
    ,
    h.delNote = function(t) {
        y.getData(ALL_PORT.DelNote.url, "POST", $.extend({}, ALL_PORT.DelNote.data, h.token, {
            Id: t
        })).then(function(t) {
            1 == t.Type ? (y.alertMs("删除成功！"),
            h.loadPlayInfo()) : y.alertMs(t.Message)
        })
    }
    ,
    h.editComment = function(t) {
        var e = $.extend({}, ALL_PORT.CourseCommentAdd.data, h.token, t);
        e.content.length < 7 ? y.alertMs("评论内容字数不能少于7个字！") : 249 <= e.content.length ? y.alertMs("评论内容字数不能超过249个字！") : o < 100 ? y.alertMs("课程未学完不可评论，请学完课程！") : e.rate ? (n.start("playComment"),
        y.getData(ALL_PORT.CourseCommentAdd.url, "POST", e).then(function(t) {
            n.finish("playComment"),
            1 == t.Type ? (h.drLevel = 1,
            h.comment = "",
            y.alertMs("评论成功，等待审核！"),
            h.getComment()) : y.alertMs(t.Message)
        })) : y.alertMs("请选择评分！")
    }
    ,
    h.$on("$destroy", function() {
        console.log("page destroy"),
        $(document).off("visibilitychange");
        for (var t = 0; t < 1e3; t++)
            clearInterval(t)
    })
}
]),
angular.module("luZhouApp").controller("classPaperAddCtrl", ["$scope", "$location", "$stateParams", "commonService", "$loading", "$state", function(e, t, a, i, s, n) {
    e.Id = a.Id,
    e.location = "发表论文";
    var l = i.AntiForgeryToken();
    i.getData(ALL_PORT.ClassPaperAdd.url, "POST", $.extend({}, ALL_PORT.ClassPaperAdd.data, {
        Id: e.Id
    })).then(function(t) {
        e.data = t.Data.ViewBag
    }),
    i.getData(ALL_PORT.GetTrainingArticleCategory.url, "POST", $.extend({}, ALL_PORT.GetTrainingArticleCategory.data, {
        trainingId: e.Id,
        Type: "Paper"
    })).then(function(t) {
        e.topicCategoryData = t
    }),
    e.config = ueditorConfig,
    e.publishTopic = function() {
        i.limitSubmit(function() {
            e.title.length < 2 ? i.alertMs("输入标题字数请大于两个字符") : null === e.categoryId ? i.alertMs("请选择论文分类") : i.getData(ALL_PORT.ClassPublishArticle.url, "POST", $.extend({}, ALL_PORT.ClassPublishArticle.data, {
                Type: "Paper",
                TrainingId: e.Id,
                Name: e.title,
                CategoryId: e.categoryId,
                Content: e.content
            }, l)).then(function(t) {
                1 === t.Type ? (i.alertMs(t.Message),
                n.go("classDetail", {
                    Id: e.Id
                })) : i.alertMs(t.Message)
            })
        })
    }
}
]),
angular.module("luZhouApp").controller("classTopicAddCtrl", ["$scope", "$stateParams", "commonService", "$location", "$state", function(e, t, a, i, s) {
    e.Id = t.Id,
    e.location = "发表话题";
    var n = a.AntiForgeryToken();
    a.getData(ALL_PORT.ClassTopicAdd.url, "POST", $.extend({}, ALL_PORT.ClassTopicAdd.data, {
        Id: e.Id
    })).then(function(t) {
        e.data = t.Data.ViewBag
    }),
    a.getData(ALL_PORT.GetTrainingArticleCategory.url, "POST", $.extend({}, ALL_PORT.GetTrainingArticleCategory.data, {
        trainingId: e.Id,
        Type: "Topic"
    })).then(function(t) {
        e.topicCategoryData = t
    }),
    e.config = ueditorConfig,
    e.publishTopic = function() {
        a.limitSubmit(function() {
            e.title.length < 2 ? a.alertMs("输入标题字数请大于两个字符") : null === e.categoryId ? a.alertMs("请选择话题分类") : a.getData(ALL_PORT.ClassPublishArticle.url, "POST", $.extend({}, ALL_PORT.ClassPublishArticle.data, {
                Type: "Topic",
                TrainingId: e.Id,
                Name: e.title,
                CategoryId: e.categoryId,
                Content: e.content
            }, n)).then(function(t) {
                1 === t.Type ? (a.alertMs(t.Message),
                s.go("classDetail", {
                    Id: e.Id
                })) : a.alertMs(t.Message)
            })
        })
    }
}
]),
angular.module("luZhouApp").directive("tmPublish", function() {
    return {
        templateUrl: "components/tmPublish.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmUmeditor", function() {
    return {
        template: '<script id="container" name="content" type="text/plain">这里写你的初始化内容<\/script>',
        restrict: "EA",
        scope: !1,
        compile: function(t, n) {
            return {
                pre: function(t, e, a, i) {
                    var s = ["fullscreen", "source", "|", "undo", "redo", "|", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "removeformat", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "selectall", "cleardoc", "|", "rowspacingtop", "rowspacingbottom", "lineheight", "|", "customstyle", "paragraph", "fontfamily", "fontsize", "|", "directionalityltr", "directionalityrtl", "indent", "|", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "touppercase", "tolowercase", "|", "link", "unlink", "anchor", "|", "imagenone", "imageleft", "imageright", "imagecenter", "|", "simpleupload", "insertimage", "pagebreak", "|", "horizontal", "date", "time", "spechars", "|", "inserttable", "deletetable", "insertparagraphbeforetable", "insertrow", "deleterow", "insertcol", "deletecol", "mergecells", "mergeright", "mergedown", "splittocells", "splittorows", "splittocols", "charts", "|", "preview", "print", "searchreplace", "drafts"];
                    t.ueditorId = n.id,
                    t.config = {},
                    "" != n.config && n.config != undefined && (t.config = $.parseJSON(n.config),
                    s = s.concat($.parseJSON(n.config).functions)),
                    UE.delEditor(t.ueditorId),
                    UE.getEditor(t.ueditorId, {
                        toolbars: [s],
                        autoHeightEnabled: !1,
                        elementPathEnabled: !1,
                        initialContent: t.config.content ? t.config.content : "",
                        focus: !!t.config.focus && t.config.focus,
                        indentValue: t.config.indentValue ? t.config.indentValue : "2em",
                        initialFrameWidth: t.config.initialFrameWidth ? t.config.initialFrameWidth : 1e3,
                        initialFrameHeight: t.config.initialFrameHeight ? t.config.initialFrameHeight : 320,
                        readonly: !!t.config.readonly && t.config.readonly,
                        enableAutoSave: !t.config.enableAutoSave || t.config.enableAutoSave,
                        saveInterval: t.config.saveInterval ? t.config.saveInterval : 500,
                        fullscreen: !!t.config.fullscreen && t.config.fullscreen,
                        imagePopup: !t.config.imagePopup || t.config.imagePopup,
                        allHtmlEnabled: !!t.config.allHtmlEnabled && t.config.allHtmlEnabled
                    }).ready(function() {}),
                    t.ueditorSetContent = function(t, e) {
                        UE.getEditor(t).setContent(e)
                    }
                    ,
                    t.ueditorGetContent = function(t) {
                        return UE.getEditor(t).getContent()
                    }
                    ,
                    t.ueditorGetContentTxt = function(t) {
                        return UE.getEditor(t).getContentTxt()
                    }
                }
            }
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("photoAlbumAddCtrl", ["$scope", "$location", "$loading", "$stateParams", "$state", "commonService", "Notification", function(e, t, a, i, s, n, l) {
    e.Id = i.Id,
    e.location = "添加相册",
    n.getData(ALL_PORT.PhotoAlbumAdd.url, "POST", $.extend({}, ALL_PORT.PhotoAlbumAdd.data, {
        TrainingId: e.Id
    })).then(function(t) {
        e.data = t.Data
    }),
    e.getPhotoAlbumAdd = function() {
        e.hidValueImage = $("#hidValueImage").val(),
        n.getData(ALL_PORT.GetPhotoAlbumAdd.url, "POST", $.extend({}, ALL_PORT.GetPhotoAlbumAdd.data, {
            Name: e.name,
            Description: e.description,
            ImgUrl: e.hidValueImage,
            TrainingId: e.Id
        })).then(function(t) {
            n.alertMs(t.Message),
            0 < t.Type && s.go("photoAlbumList", {
                Id: e.Id
            })
        })
    }
    ,
    e.uploadFile = n.uploadFile({
        type: "ImageTraining"
    }),
    e.fileChange = function(t) {
        e.uploadFile(t).then(function(t) {
            l.success("上传成功"),
            e.ImgUrl = t
        }, function(t) {
            console.log(t),
            l.error(t.message || "上传失败")
        })
    }
    ,
    e.listenChange = function(t) {
        $(t.target).on("change", function(t) {
            $(this).off("change"),
            e.fileChange(t)
        })
    }
}
]),
angular.module("luZhouApp").directive("tmPhotoAlbumAdd", function() {
    return {
        templateUrl: "components/tmPhotoAlbumAdd.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ForgetpasswordCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", function(e, t, a, i, s, n, l, r) {
    e.showAccount = !0,
    e.submitAccount = function(t) {
        l.start("forgetPassword"),
        s.getData(ALL_PORT.GetQuestion.url, "POST", $.extend({}, ALL_PORT.GetQuestion.data, {
            account: t
        })).then(function(t) {
            l.finish("forgetPassword"),
            200 == t.Status ? (e.question = t.Data.Question.Question,
            e.showAccount = !1) : s.alertMs(t.Message)
        })
    }
    ,
    e.submitQuestion = function(t) {
        l.start("forgetPassword"),
        s.getData(ALL_PORT.GetPasswordByQuestion.url, "POST", $.extend({}, ALL_PORT.GetPasswordByQuestion.data, {
            account: e.account,
            question: e.question,
            answer: t
        })).then(function(t) {
            l.finish("forgetPassword"),
            s.alertMs(t.Message)
        })
    }
}
]),
angular.module("luZhouApp").directive("tmForgetPassword", function() {
    return {
        templateUrl: "components/tmForgetPassword.html",
        restrict: "A",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmTip", function() {
    return {
        templateUrl: "components/tmTip.html",
        restrict: "A",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            e.showTip = !1,
            t.getData(ALL_PORT.UnReadNotice2.url, "POST", $.extend({}, ALL_PORT.UnReadNotice2.data)).then(function(t) {
                e.unReadNoticeList = t.Data,
                0 < t.Data.length && (e.showTip = !0)
            }),
            e.closeTip = function() {
                e.showTip = !1
            }
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("photoPreviewCtrl", ["$scope", "$location", "$loading", "$stateParams", "commonService", function(e, t, a, i, s) {
    e.AlbumId = i.AlbumId,
    e.TrainingId = i.TrainingId,
    e.Id = i.TrainingId,
    a.start("photoPreview"),
    a.start("personalLearningInfo"),
    a.start("classMy"),
    s.getData(ALL_PORT.ClassInformation.url, "POST", $.extend({}, ALL_PORT.ClassInformation.data, {
        Id: e.TrainingId
    })).then(function(t) {
        a.finish("personalLearningInfo"),
        e.classInfoData = t.Data
    }),
    s.getData(ALL_PORT.ClassMy.url, "POST", $.extend({}, ALL_PORT.ClassMy.data)).then(function(t) {
        a.finish("classMy"),
        e.classMyData = t.Data
    }),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.PhotoPreview.data.rows
    }),
    e.queryPhotoPreview = function(t) {
        s.getData(ALL_PORT.PhotoPreview.url, "POST", $.extend({}, ALL_PORT.PhotoPreview.data, {
            albumId: e.AlbumId,
            trainingId: e.TrainingId
        }, t)).then(function(t) {
            a.finish("photoPreview"),
            e.Data = t.Data,
            e.paginationConf.totalItems = t.Data.Count,
            e.paginationConf.currentPage = t.Data.Page,
            e.ImgSrc = t.Data.ImagePath
        })
    }
    ,
    e.getPhotoUpFile = function() {
        e.hidValueImage = $("#hidValueImage").val(),
        s.getData(ALL_PORT.GetPhotoUpFile.url, "POST", $.extend({}, ALL_PORT.GetPhotoUpFile.data, {
            Name: e.name,
            Description: e.description,
            ImgUrl: e.hidValueImage,
            TrainingId: e.TrainingId,
            ParentId: e.AlbumId
        })).then(function(t) {
            s.alertMs(t.Message),
            1 <= t.Type && (e.queryPhotoPreview({
                page: 1
            }),
            $(".addphotomodal").modal("hide"))
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.queryPhotoPreview(t)
    }),
    e.viewPhoto = function(t) {
        e.imgObj = e.Data.ListData[t]
    }
}
]),
angular.module("luZhouApp").directive("tmPhotoPreview", function() {
    return {
        templateUrl: "components/tmPhotoPreview.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmKindeditor", function() {
    return {
        restrict: "EA",
        require: "?ngModel",
        link: function(t, e, a, i) {
            var s, n, l = function() {
                n = KindEditor.create(e[0], {
                    width: "100%",
                    height: "400px",
                    resizeType: 1,
                    uploadJson: "/Upload/Upload_Ajax.ashx",
                    formatUploadUrl: !1,
                    allowFileManager: !0,
                    afterChange: function() {
                        i.$setViewValue(this.html())
                    }
                })
            }, r = function(t) {
                n && n.html(t)
            };
            i && (s = i.$viewValue,
            i.$render = function() {
                s = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue,
                r(s)
            }
            ,
            l())
        }
    }
}),
angular.module("luZhouApp").directive("tmTrainingCourseClassify", function() {
    return {
        templateUrl: "components/tmTrainingCourseClassify.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPlay", function() {
    return {
        templateUrl: "components/tmPlay.html",
        restrict: "EA",
        link: function(t, e, a) {
            var i = 1;
            $(".toggleSideSec").click(function() {
                i = 0 === i ? ($(".play").hide(),
                $(".playMp4").css("width", "99%"),
                $(".toggleSideSec").css("right", "0"),
                $(this).css("background", 'url("images/1.55105a60.jpg")'),
                1) : ($(".play").show(),
                $(".playMp4").css("width", "76%"),
                $(".toggleSideSec").css("right", "22%"),
                $(this).css("background", 'url("images/2.dd233ebf.jpg")'),
                0)
            }),
            $(".playPage").css({
                height: $(document).height() - 22
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmDrag", function() {
    return {
        template: '<div id="drag"></div>',
        restrict: "EA",
        scope: {
            options: "=",
            dragReady: "="
        },
        link: function(i, t, e) {
            var s, n = $("#drag"), l = !1, a = $.extend({}, a);
            $("#drag").append('<div class="drag_bg"></div><div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div><div class="handler handler_bg"></div>');
            var r = n.find(".handler")
              , o = n.find(".drag_bg")
              , d = n.find(".drag_text")
              , c = n.width() - r.width();
            r.mousedown(function(t) {
                l = !0,
                s = t.pageX - parseInt(r.css("left"), 10)
            }),
            $(document).mousemove(function(t) {
              //修改部分
                if( /play\?Id=/g.test(window.location.href) ){
                    r.removeClass("handler_bg").addClass("handler_ok_bg"),
                    d.text("验证通过"),
                    n.css({
                        color: "#fff"
                    }),
                    r.unbind("mousedown"),
                    $(document).unbind("mousemove"),
                    $(document).unbind("mouseup"),
                    $("#drag").hide()
                    i.dragReady && i.dragReady()
                    return
                }
                //--------------------------
                var e = t.pageX - s;
                l && (0 < e && e <= c ? (r.css({
                    left: e
                }),
                o.css({
                    width: e
                })) : c < e && (!function a() {
                    r.removeClass("handler_bg").addClass("handler_ok_bg"),
                    d.text("验证通过"),
                    n.css({
                        color: "#fff"
                    }),
                    r.unbind("mousedown"),
                    $(document).unbind("mousemove"),
                    $(document).unbind("mouseup"),
                    $("#drag").hide()
                }(),
                i.dragReady && i.dragReady()))
            }).mouseup(function(t) {
                l = !1,
                t.pageX - s < c && (r.css({
                    left: 0
                }),
                o.css({
                    width: 0
                }))
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmStarBox", function() {
    return {
        require: "?ngModel",
        restrict: "EA",
        templateUrl: "components/tmStarBox.html",
        scope: {
            ngModel: "="
        },
        link: function(a, t, e, i) {
            a.myStars = [1, 2, 3, 4, 5];
            var s = ["", "很差", "差", "一般", "好", "很好"];
            a.ratingText = "",
            a.clickCnt = 0,
            a.$watch("ngModel", function(t) {
                var e = t;
                e && (a.myStar = e,
                a.clickCnt = e,
                a.ratingText = s[e])
            }),
            a.stars = function(t) {
                a.clickCnt = t,
                i.$setViewValue(t)
            }
            ,
            a.mouseoverStar = function(t) {
                a.hoverCnt = t
            }
            ,
            a.mouseleaveStar = function(t) {
                a.hoverCnt = 0
            }
        }
    }
}),
angular.module("luZhouApp").directive("tmPlayMp4", function() {
    return {
        templateUrl: "components/tmPlayMp4.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("myPlaceholder", ["$compile", function(s) {
    return {
        restrict: "A",
        scope: {},
        link: function(t, e, a) {
            if (!("placeholder"in document.createElement("input"))) {
                var i = angular.element('<span class="placeholder">' + a.placeholder + "</span>");
                i.on("click", function(t) {
                    t.stopPropagation(),
                    e.focus()
                }),
                e.before(i),
                s(i)(t),
                e.on("focus", function() {
                    i.hide()
                }).on("blur", function() {
                    "" === e.val() && i.show()
                }),
                t.getElementPosition = function() {
                    return e.position()
                }
                ,
                t.$watch(t.getElementPosition, function() {
                    i.css({
                        top: e.position().top + "px",
                        left: e.position().left + "px"
                    })
                }, !0),
                t.getElementHeight = function() {
                    return e.outerHeight()
                }
                ,
                t.$watch(t.getElementHeight, function() {
                    i.css("line-height", e.outerHeight() + "px")
                }),
                e.css("font-size") && i.css("font-size", e.css("font-size")),
                e.css("text-indent") && i.css("text-indent", parseInt(e.css("text-indent")) + parseInt(e.css("border-left-width"))),
                e.css("padding-left") && i.css("padding-left", e.css("padding-left")),
                e.css("margin-top") && i.css("margin-top", e.css("margin-top")),
                t.isElementVisible = function() {
                    return e.is(":visible")
                }
                ,
                t.$watch(t.isElementVisible, function() {
                    var t = e.is(":visible") ? "block" : "none";
                    i.css("display", t),
                    "blcok" === t && e.val() && i.hide()
                }),
                t.hasValue = function() {
                    return e.val()
                }
                ,
                t.$watch(t.hasValue, function() {
                    e.val() && i.hide()
                })
            }
        }
    }
}
]),
angular.module("luZhouApp").factory("pubSubService", ["$rootScope", function(s) {
    var n = "_DATA_UPDATED_";
    return {
        publish: function(t, e) {
            t = t || n,
            e = e || {},
            s.$emit(t, e)
        },
        subscribe: function(t, e, a) {
            if (angular.isFunction(t)) {
                a = a || n;
                var i = s.$on(a, t);
                e && e.$on("$destroy", i)
            } else
                console.log("pubSubService.subscribe need a callback function")
        }
    }
}
]),
angular.module("luZhouApp").controller("UserrankinglistCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(a, t, e, i, s, n, l) {
    a.token = i.AntiForgeryToken(),
    n.start("userRankingList"),
    a.getUserRanking = function(t) {
        var e = $.extend({}, ALL_PORT.RankUserList.data, t);
        i.getData(ALL_PORT.RankUserList.url, "POST", e).then(function(t) {
            n.finish("userRankingList"),
            a.paginationConf.totalItems = t.Data.ViewBag.Count,
            a.userRankingData = t.Data
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.RankUserList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getUserRanking(t)
    })
}
]),
angular.module("luZhouApp").directive("tmUserRankingList", function() {
    return {
        templateUrl: "components/tmUserRankingList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPlayJy", function() {
    return {
        templateUrl: "components/tmPlayJy.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPlayScorm", function() {
    return {
        templateUrl: "components/tmPlayScorm.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").service("antiForgeryToken", ["$http", "$cookies", "$cookieStore", "$timeout", "$location", "$loading", "$q", "$interval", function(t, e, a, i, s, n, l, r) {
    this.AntiForgeryToken = function() {
        var i = new Object;
        return t({
            method: "POST",
            url: ALL_PORT.AntiForgeryToken.url,
            data: ALL_PORT.AntiForgeryToken.data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        }).success(function(t) {
            $("body").append('<div class="preventorgery"></div>'),
            $(".preventorgery").html(t.html);
            var e = $(".preventorgery input").val()
              , a = $(".preventorgery input").attr("name");
            return i[a] = e,
            $("div.preventorgery").remove(),
            i
        }),
        i
    }
}
]),
angular.module("luZhouApp").controller("LoginCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "$state", "commonService", "$loading", "$stateParams", function(a, t, e, i, s, n, l, r) {
    var o = n.AntiForgeryToken();
    a.showVerifyCode = !1,
    a.login = {
        Account: "",
        PassWord: "",
        RememberMe: !0
    };
    var d = n.getCookie
      , c = n.setCookie
      , p = n.delCookie;
    if (d("RM")) {
        var u = TBase64.decode(d("RM")).split("|")
          , m = (u[0],
        u[1])
          , g = u[2];
        a.login.Account = m,
        a.login.PassWord = g,
        a.login.RememberMe = !0
    } else
        a.login = {
            Account: "",
            PassWord: "",
            RememberMe: !0
        };
    function v() {
        if (a.login.RememberMe) {
            var t = a.login.RememberMe + "|" + a.login.Account + "|" + a.login.PassWord;
            c("RM", TBase64.encode(t), 7)
        } else
            p("RM")
    }
    a.showError = !1,
    n.getData(ALL_PORT.LoginShort.url, "POST", ALL_PORT.LoginShort.data).then(function(t) {
        a.userMessage = t.Data.Model,
        a.userAllMessage = t.Data,
        a.userMessage.Name && n.alertMs("用户已登录！", function() {
            s.go("main")
        })
    }),
    a.getVerifyCode = n.getVerifyCode,
    a.getVerifyCode(),
    a.inputFocus = function() {
        a.showError = !1,
        a.showValidateCodeError = !1
    }
    ,
    a.inputChange = function() {
        a.showVerifyCode = !0
    }
    ,
    a.loginOut = n.loginOut,
    a.clickLogin = function() {
        n.limitSubmit(function() {
            ga("send", "event", "login", "click", "登录页登录");
            var t = $.extend({}, a.login);
            t.PassWord = SM4encrypt(t.PassWord);
            var e = "LoginCode";
            e = a.login.ValidateCode ? "Login" : "LoginCode",
            a.login.Account ? a.login.PassWord ? a.login.ValidateCode || !a.showVerifyCode ? (l.start("login"),
            n.getData(API_URL + "/Page/" + e, "POST", $.extend({}, t, o)).then(function(t) {
                if (l.finish("login"),
                0 == t.Type)
                    a.getVerifyCode(),
                    a.showError = !0,
                    n.alertMs(t.Message);
                else if (1 == t.Type)
                    v(),
                    r.name ? s.go(r.name, JSON.parse(r.params)) : "admin" == r.page ? window.location.href = "/admin" : s.go("main");
                else if (2 == t.Type)
                    v(),
                    n.alertMs("首次登录，请设置密保！"),
                    s.go("securitySetting");
                else {
                    if (3 == t.Type)
                        return !!window.confirm("帐号在别的地方登录，是否踢出？") && (function e(t) {
                            n.getData(API_URL + "/Page/KickOut", "POST", $.extend({}, ALL_PORT.LoginOut.data, {
                                kickUserId: t
                            }, o)).then(function(t) {
                                1 == t.Type && a.clickLogin()
                            })
                        }(t.Message),
                        !0);
                    if (4 == t.Type)
                        n.alertMs("此电脑已经有用户登录，您不能用其他帐号再次登录！"),
                        a.getVerifyCode();
                    else if (5 == t.Type)
                        n.alertMs("平台当前在线人数到达上限，请稍后再试！"),
                        a.getVerifyCode();
                    else if (6 == t.Type)
                        n.alertMs(t.Message),
                        a.getVerifyCode();
                    else if (7 == t.Type)
                        a.showValidateCodeError = !0,
                        a.getVerifyCode();
                    else {
                        if (10 == t.Type)
                            return n.alertMs("您还不是本平台成员，将为您转向您所在的平台：" + t.Message, 2),
                            void a.getVerifyCode();
                        11 == t.Type ? (n.alertMs(t.Message),
                        a.getVerifyCode()) : 12 == t.Type || 13 == t.Type ? (n.alertMs(t.Message),
                        a.getVerifyCode()) : n.alertMs(t.Message)
                    }
                }
            }, function(t) {
                n.alertMs("登陆异常！")
            })) : n.alertMs("验证码不能为空！") : n.alertMs("密码不能为空！") : n.alertMs("用户名不能为空！")
        })
    }
}
]),
angular.module("luZhouApp").directive("tmLogin", function() {
    return {
        templateUrl: "components/tmLogin.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("RankgroupCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(a, t, e, i, s, n, l) {
    n.start("rankingDetail"),
    a.getGroupRanking = function(t) {
        var e = $.extend({}, ALL_PORT.RankGroupList.data, t);
        i.getData(ALL_PORT.RankGroupList.url, "POST", e).then(function(t) {
            n.finish("rankingDetail"),
            a.paginationConf.totalItems = t.Data.ViewBag.Count,
            a.govermentRanking = t.Data
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.RankGroupList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getGroupRanking(t)
    })
}
]),
angular.module("luZhouApp").directive("tmRankingDetail", function() {
    return {
        templateUrl: "components/tmRankingDetail.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("RankcourseclickCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(a, t, e, i, s, n, l) {
    n.start("rankCourseClick"),
    a.getRankCourseClick = function(t) {
        var e = $.extend({}, ALL_PORT.CourseClickList.data, t);
        i.getData(ALL_PORT.CourseClickList.url, "POST", e).then(function(t) {
            n.finish("rankCourseClick"),
            a.paginationConf.totalItems = t.Data.ViewBag.Count,
            a.rankCourseClick = t.Data
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.CourseClickList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getRankCourseClick(t)
    })
}
]),
angular.module("luZhouApp").directive("tmRankCourseClick", function() {
    return {
        templateUrl: "components/tmRankCourseClick.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("RankcoursefinishCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(a, t, e, i, s, n, l) {
    n.start("rankCourseClick"),
    a.getRankCourseClick = function(t) {
        var e = $.extend({}, ALL_PORT.CourseFinishList.data, t);
        i.getData(ALL_PORT.CourseFinishList.url, "POST", e).then(function(t) {
            n.finish("rankCourseClick"),
            a.paginationConf.totalItems = t.Data.ViewBag.Count,
            a.rankCourseFinish = t.Data
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.CourseFinishList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getRankCourseClick(t)
    })
}
]),
angular.module("luZhouApp").directive("tmRankCourseFinish", function() {
    return {
        templateUrl: "components/tmRankCourseFinish.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("RankloginsumCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(a, t, e, i, s, n, l) {
    n.start("rankCourseClick"),
    a.getRankCourseClick = function(t) {
        var e = $.extend({}, ALL_PORT.LoginSumList.data, t);
        i.getData(ALL_PORT.LoginSumList.url, "POST", e).then(function(t) {
            n.finish("rankCourseClick"),
            a.paginationConf.totalItems = t.Data.ViewBag.Count,
            a.rankCourseFinish = t.Data
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.LoginSumList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getRankCourseClick(t)
    })
}
]),
angular.module("luZhouApp").directive("tmRankLoginSum", function() {
    return {
        templateUrl: "components/tmRankLoginSum.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("SoftwareCtrl", function() {}),
angular.module("luZhouApp").directive("tmSoftWare", function() {
    return {
        templateUrl: "components/tmSoftWare.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("OriginalarticleCtrl", ["$scope", "$timeout", "$stateParams", "commonService", "$location", "$state", function(t, e, a, i, s, n) {
    var l = i.AntiForgeryToken();
    t.config = ueditorConfig,
    t.publishTopic = function() {
        i.limitSubmit(function() {
            t.title.length < 2 ? i.alertMs("输入标题字数请大于两个字符") : i.getData(ALL_PORT.AddOriginalArticle.url, "POST", $.extend({}, ALL_PORT.AddOriginalArticle.data, {
                Name: t.title,
                Content: t.content
            }, l)).then(function(t) {
                1 === t.Type ? (i.alertMs(t.Message),
                n.go("originalarticlelist")) : i.alertMs(t.Message)
            })
        })
    }
}
]),
angular.module("luZhouApp").directive("tmOriginalArticle", function() {
    return {
        templateUrl: "components/tmOriginalArticle.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ClasslistCtrl", ["$scope", "$location", "$state", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(a, t, s, e, i, n, l, r, o) {
    var d = o.type;
    r.start("courseClassify"),
    r.start("classMy"),
    n.getData(ALL_PORT.GetTrainingClassTypeList.url, "POST", $.extend({}, ALL_PORT.GetTrainingClassTypeList.data)).then(function(t) {
        r.finish("courseClassify");
        a.courseClassify = [{
            id: 0,
            text: "全部班级",
            children: null,
            state: "open",
            SunFlag: !1
        }].concat(t.Data.ListData)
    }),
    a.repeatDone = function() {
        $(".courseClassify .panel-title a").click(function() {
            $(this).parents(".panel-heading").next().slideToggle(),
            "+" == $(this).children(".category").html() ? $(this).children(".category").html("-") : $(this).children(".category").html("+")
        })
    }
    ,
    a.classMyType = "my",
    n.getData(ALL_PORT.ClassMy.url, "POST", $.extend({}, ALL_PORT.ClassMy.data)).then(function(t) {
        r.finish("classMy"),
        a.classMyData = t.Data
    }),
    a.classActiveType = "active",
    n.getData(ALL_PORT.ClassActive.url, "POST", $.extend({}, ALL_PORT.ClassActive.data)).then(function(t) {
        r.finish("classMy"),
        a.ClassActiveData = t.Data
    }),
    a.classRecentType = "recent",
    n.getData(ALL_PORT.ClassRecent.url, "POST", $.extend({}, ALL_PORT.ClassRecent.data)).then(function(t) {
        r.finish("classMy"),
        a.ClassRecentData = t.Data
    }),
    a.JudgeStatus = n.JudgeStatus,
    a.getClassList = function(t) {
        r.start("trainingCenter");
        var e = "Sort";
        "active" == d ? e = "CurrentUser" : "my" == d ? e = "Id" : "recent" == d && (e = "StartDate"),
        n.getData(ALL_PORT.ClassList.url, "POST", $.extend({}, ALL_PORT.ClassList.data, t, {
            type: o.type,
            sort: e
        })).then(function(t) {
            r.finish("trainingCenter"),
            a.paginationConf.totalItems = t.Data.Count,
            a.classListData = t.Data
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.CourseClickList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getClassList(t)
    }),
    a.checkUserClass = function(a) {
        var i = window.open("about:blank", "_blank");
        n.getData(ALL_PORT.CheckUserClass.url, "POST", $.extend({}, ALL_PORT.CheckUserClass.data, {
            trainingId: a
        })).then(function(t) {
            if (0 === t.Type)
                i.close(),
                n.alertMs("请先加入培训班!");
            else {
                var e = s.href("classDetail", {
                    Id: a
                });
                i.location.href = e
            }
        })
    }
    ,
    a.addClass = function(t) {
        n.getData(ALL_PORT.UpdateTrainingStudentup.url, "POST", $.extend({}, ALL_PORT.UpdateTrainingStudentup.data, {
            Id: t
        })).then(function(t) {
            n.alertMs(t.Message),
            a.getClassList()
        })
    }
}
]),
angular.module("luZhouApp").directive("tmClassList", function() {
    return {
        templateUrl: "components/tmClassList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("PolllistCtrl", ["$scope", "$location", "$rootScope", "$state", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(e, t, a, s, i, n, l, r, o) {
    e.JudgeStatus = n.JudgeStatus,
    e.getClassList = function(t) {
        r.start("pollList"),
        n.getData(ALL_PORT.PollList.url, "POST", $.extend({}, ALL_PORT.PollList.data, t)).then(function(t) {
            r.finish("pollList"),
            e.paginationConf.totalItems = t.Data.UnFinishCount,
            e.pollListData = t.Data
        })
    }
    ,
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.CourseClickList.data.rows
    }),
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.getClassList(t)
    }),
    e.havTest = function(a) {
        var i = window.open("about:blank", "_blank")
          , t = $.extend({}, ALL_PORT.Exam.data, e.token, {
            parameter1: a
        });
        n.getData(ALL_PORT.Exam.url, "POST", t).then(function(t) {
            if (t.Type)
                i.close(),
                n.alertMs(t.Message);
            else {
                var e = s.href("poll", {
                    Id: a
                });
                i.location.href = e
            }
        })
    }
}
]),
angular.module("luZhouApp").directive("tmPollList", function() {
    return {
        templateUrl: "components/tmPollList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("PollCtrl", ["$scope", "$http", "$rootScope", "$cookieStore", "commonService", "$state", "$location", "$loading", "$stateParams", "$interval", function(e, t, a, i, s, n, l, r, o, d) {
    e.token = s.AntiForgeryToken(),
    r.start("exam");
    var c = o.Id
      , p = $.extend({}, ALL_PORT.Poll2.data, {
        pollId: c
    });
    s.getData(ALL_PORT.Poll2.url, "POST", p).then(function(t) {
        r.finish("exam"),
        t.Data ? (e.examData = t.Data.Exam,
        e.allQuestions = t.Data.TypeAllQuestions) : (alert(t.Message),
        window.open("about:blank", "_top").close())
    }),
    d(function() {
        e.seconds -= 1e3,
        0 == e.seconds && (s.alertMs("考试时间到,系统将自动提交！"),
        e.submitForm())
    }, 1e3),
    e.submitForm = function() {
        var i = "第";
        if ($("input:hidden[name^='questionid']").each(function(t) {
            var e = $(this).siblings("table").find("input:checked").length
              , a = $(this).siblings(".tibg").children("span").attr("type");
            0 != e || "0" != a && "1" != a || (i += $(this).siblings(".tibg").children("span").html()),
            $("textarea[name='textbox" + this.value + "']").val() || "2" != a || (i += $(this).siblings(".tibg").children("span").html())
        }),
        "第题" == (i += "题") && (i = ""),
        "" === i || "" !== i && confirm(i + " 未答,是否提交?")) {
            var t = $(".editForm").serialize();
            s.getData(ALL_PORT.PostExam.url, "POST", t).then(function(t) {
                1 == t.Type ? (alert(t.Message),
                window.close()) : s.alertMs(t.Message)
            }, function(t) {
                s.alertMs("提交失败！"),
                window.close()
            })
        }
    }
}
]),
angular.module("luZhouApp").directive("tmPoll", function() {
    return {
        templateUrl: "components/tmPoll.html",
        restrict: "EA",
        link: function(t, e, a) {
            t.focusInput = function() {
                var t = setTimeout(function() {
                    $(".radio_question_item").on("click", function(t) {
                        t.stopPropagation(),
                        $(this).find(".advise").focus()
                    }),
                    $(".checkbox_question_item").on("click", function(t) {
                        t.stopPropagation(),
                        $(this).find(".advise").focus()
                    }),
                    clearTimeout(t)
                }, 600)
            }
        }
    }
}),
angular.module("luZhouApp").controller("PollreviewCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", function(e, t, a, i, s, n, l, r) {
    var o = r.parameter1
      , d = r.parameter2;
    l.start("examReview"),
    s.getData(ALL_PORT.PollReview2.url, "POST", $.extend({}, ALL_PORT.PollReview2.data, {
        parameter1: o,
        parameter2: d
    })).then(function(t) {
        l.finish("examReview"),
        e.allQuestions = t.TypeAllQuestions
    }),
    e.getRatePoll = function(t, e) {
        return (100 * e / t).toFixed(2)
    }
}
]),
angular.module("luZhouApp").directive("tmPollReview", function() {
    return {
        templateUrl: "components/tmPollReview.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("RegisterCtrl", ["$scope", "$timeout", "$rootScope", "$cookieStore", "$state", "commonService", "$loading", "$interval", function(t, e, a, i, s, n, l, r) {
    var o = n.AntiForgeryToken();
    t.register = {
        account: "",
        password: "",
        email: "",
        name: "",
        idcard: "",
        groupid: "",
        mobile: "",
        smgcode: ""
    },
    t.confirmPassword = "",
    t.accountError = !1,
    t.passwordError = !1,
    t.confirmError = !1,
    t.confirmError2 = !1,
    t.emailError = !1,
    t.emailError2 = !1,
    t.nameError = !1,
    t.idcardError = !1,
    t.idcardError2 = !1,
    t.groupidError = !1,
    t.mobileError = !1,
    t.mobileError2 = !1,
    t.smgcodeError = !1,
    t.verifyAccount = function() {
        t.accountError = !t.register.account
    }
    ,
    t.verifyPassword = function() {
        t.passwordError = !t.register.password
    }
    ,
    t.verifyConfirm = function() {
        t.register.password != t.confirmPassword && t.register.password && t.confirmPassword ? (t.confirmError2 = !0,
        t.confirmError = !1) : t.register.password == t.confirmPassword && t.register.password && t.confirmPassword ? (t.confirmError2 = !1,
        t.confirmError = !1) : t.confirmError = !t.confirmPassword
    }
    ,
    t.verifyEmail = function() {
        t.register.email && !n.checkType("email", t.register.email) ? t.emailError2 = !0 : t.emailError2 = !1,
        t.emailError = !1
    }
    ,
    t.verifyName = function() {
        t.nameError = !t.register.name
    }
    ,
    t.verifyIdCard = function() {
        t.register.idcard && !n.checkType("idcard", t.register.idcard) ? t.idcardError2 = !0 : t.idcardError2 = !1,
        t.idcardError = !1
    }
    ,
    t.verifyGroup = function() {
        t.groupidError = !t.register.groupid
    }
    ,
    t.verifyMobile = function() {
        t.register.mobile && !n.checkType("mobile", t.register.mobile) ? t.mobileError2 = !0 : t.mobileError2 = !1,
        t.mobileError = !1
    }
    ,
    t.verifySmgCode = function() {
        t.smgcodeError = !t.register.smgcode
    }
    ,
    t.clickRegister = function() {
        n.limitSubmit(function() {
            t.register.account && t.register.password && t.confirmPassword && !t.confirmError2 && t.register.name && t.register.groupid && !t.idcardError2 && !t.emailError2 && !t.mobileError2 ? n.getData(ALL_PORT.Register.url, "POST", t.register, o).then(function(t) {
                1 == t.Type ? (n.alertMs(t.Message),
                s.go("main")) : n.alertMs(t.Message)
            }) : n.alertMs("信息填写错误，请核对！")
        })
    }
    ,
    t.$watch("register.groupid", function() {
        t.register.groupid && t.verifyGroup()
    }),
    t.agree = function() {}
    ,
    t.noAgree = function() {
        $("#myModal").on("hidden.bs.modal", function(t) {
            s.go("main")
        })
    }
}
]),
angular.module("luZhouApp").directive("tmRegister", ["$state", function(t) {
    return {
        templateUrl: "components/tmRegister.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}
]),
angular.module("luZhouApp").directive("myTree", ["$http", function(t) {
    return {
        templateUrl: "components/myTree.html",
        restrict: "EA",
        require: "?ngModel",
        scope: {
            groupName: "=?",
            userRole: "=?"
        },
        link: function(a, e, t, i) {
            e.find("#tt").tree({
                url: ALL_PORT.GetGroupList.url,
                onSelect: function(t) {
                    a.userRole && "admin" !== a.userRole && ("closed" == t.state || t.children && 0 < t.children.length) ? e.find("#tt").tree("toggle", t.target) : ($(".groupName").val(t.text),
                    a.$apply(function() {
                        i.$setViewValue(t.id)
                    }),
                    $("#tt").hide())
                },
                onLoadSuccess: function(t, e) {
                    $(".groupName").val(a.groupName)
                }
            }),
            $(".groupName").click(function() {
                return $("#tt").show(),
                !1
            }),
            $(document).click(function() {
                $("#tt").hide()
            }),
            $("#tt").click(function() {
                return !1
            })
        }
    }
}
]),
angular.module("luZhouApp").controller("OriginalarticlelistCtrl", ["$scope", "$http", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(a, t, e, i, s, n, l, r) {
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.OriginalArticleList.data.rows
    }),
    a.requestOriginalArgicleList = function(t) {
        r.start("originalArgicleList");
        var e = $.extend({}, ALL_PORT.OriginalArticleList.data, t);
        n.getData(ALL_PORT.OriginalArticleList.url, "POST", e).then(function(t) {
            r.finish("originalArgicleList"),
            a.paginationConf.totalItems = t.Data.Count,
            a.originalArgicleListData = t.Data
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {};
        t.page = a.paginationConf.currentPage,
        a.requestOriginalArgicleList(t)
    })
}
]),
angular.module("luZhouApp").directive("tmOriginalArticleList", function() {
    return {
        templateUrl: "components/tmOriginalArticleList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("LibraryCtrl", ["$scope", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(e, t, a, i, s, n, l) {
    n.start("bookCategory"),
    i.getData(ALL_PORT.BookCategory.url, "POST", ALL_PORT.BookCategory.data).then(function(t) {
        n.finish("bookCategory");
        e.bookCategory = [{
            id: 0,
            text: "全部图书"
        }].concat(t.Data.DataList)
    });
    var r = $.extend({}, ALL_PORT.BookList.data);
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: r.rows
    }),
    e.searchCategory = function(t) {
        n.start("library"),
        $.extend(r, t),
        i.getData(ALL_PORT.BookList.url, "POST", r).then(function(t) {
            n.finish("library"),
            e.booksData = t.Data,
            e.imgPath = t.Data.Path,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.searchCategory(t)
    })
}
]),
angular.module("luZhouApp").directive("tmBookCategory", function() {
    return {
        templateUrl: "components/tmBookCategory.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmLibrary", function() {
    return {
        templateUrl: "components/tmLibrary.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ArticleCtrl", ["$scope", "$state", "$rootScope", "$cookieStore", "commonService", "$stateParams", "$loading", function(a, t, e, i, s, n, l) {
    var r = {
        page: 1,
        rows: 15,
        categoryId: "",
        CategoryCode: n.categoryCode ? n.categoryCode : "",
        sort: "Sort",
        order: "desc",
        wordLimt: "20",
        titleNav: "文章列表",
        search: n.title ? n.title : ""
    };
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 15
    }),
    a.refreshList = function(t) {
        l.start("articleList"),
        s.getData(ALL_PORT.ArticleList.url, "POST", $.extend(r, t)).then(function(t) {
            l.finish("articleList"),
            a.articleListData = t.Data;
            var e = t.Data.CategoryName;
            a.articleTitle = e || t.Data.TitleNav,
            a.paginationConf.totalItems = t.Data.Count
        })["catch"](function() {
            l.finish("articleList")
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.refreshList(t)
    }),
    s.getData(ALL_PORT.ArticleCategory.url, "POST", $.extend({}, ALL_PORT.ArticleCategory.data)).then(function(t) {
        a.categoryData = t.Data.ListData
    })
}
]),
angular.module("luZhouApp").directive("tmArticleCategory", function() {
    return {
        templateUrl: "components/tmArticleCategory.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmArticleHot", function() {
    return {
        templateUrl: "components/tmArticleHot.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            e.hotArticle = function() {
                a.start("articleHot");
                t.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
                    page: 1,
                    rows: 10,
                    sort: "ClickCount",
                    order: "desc",
                    categoryId: null,
                    titleNav: "热门文章",
                    wordLimt: 35
                })).then(function(t) {
                    a.finish("articleHot"),
                    e.hotArticleData = t.Data
                })
            }
            ,
            e.hotArticle()
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmArticleList", function() {
    return {
        templateUrl: "components/tmArticleList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("BookdetailCtrl", ["$scope", "$state", "$rootScope", "$cookieStore", "commonService", "$stateParams", "$loading", function(i, t, e, a, s, n, l) {
    i.token = s.AntiForgeryToken(),
    i.Id = n.Id,
    s.getData(ALL_PORT.BookContent.url, "POST", $.extend({}, ALL_PORT.BookContent.data, {
        id: i.Id
    })).then(function(t) {
        i.bookContentData = t.Data
    }),
    i.favoriteAdd = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteAdd.data, t, e);
        s.getData(ALL_PORT.FavoriteAdd.url, "POST", a).then(function(t) {
            1 == t.Type && (i.bookContentData.FavoriteId = t.Value),
            s.alertMs(t.Message)
        })
    }
    ,
    i.favoriteDelete = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteDelete.data, t, e);
        s.getData(ALL_PORT.FavoriteDelete.url, "POST", a).then(function(t) {
            1 == t.Type && (i.bookContentData.FavoriteId = 0),
            s.alertMs(t.Message)
        })
    }
    ,
    i.postComment = function(e) {
        s.limitSubmit(function() {
            if (i.bookContent.length < 7)
                s.alertMs("评论内容字数不能少于7个字！");
            else if (249 <= i.bookContent.length)
                s.alertMs("评论内容字数不能超过249个字！");
            else {
                var t = $.extend({}, ALL_PORT.BookCommentAdd.data, e, i.token);
                s.getData(ALL_PORT.BookCommentAdd.url, "POST", t).then(function(t) {
                    $(".modal").modal("hide"),
                    1 == t.Type ? (s.alertMs("评论成功！"),
                    i.getComment({
                        page: 1
                    })) : s.alertMs(t.Message)
                })
            }
        })
    }
    ,
    i.getComment = function(t) {
        var e = $.extend({}, ALL_PORT.BookCommentList.data, {
            bookId: i.Id
        }, t);
        s.getData(ALL_PORT.BookCommentList.url, "POST", e).then(function(t) {
            i.paginationConf.totalItems = t.Data.Count,
            i.commentData = t.Data
        })
    }
    ,
    i.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.BookCommentList.data.rows
    }),
    i.$watch("paginationConf.currentPage", function() {
        var t = {
            page: i.paginationConf.currentPage
        };
        i.getComment(t)
    })
}
]),
angular.module("luZhouApp").directive("tmBookDetail", function() {
    return {
        templateUrl: "components/tmBookDetail.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("verificationCode", ["$cookieStore", "$interval", "commonService", function(t, s, n) {
    return {
        template: '<button ng-click="sendVerificationCode(mobile)" class="btn btn-primary verificationCode">{{paracont}}</button>',
        restrict: "EA",
        scope: {
            mobile: "="
        },
        link: function(i, t, e) {
            var a = {
                mobile: /^1\d{10}$/
            };
            i.paracont = "获取验证码",
            i.sendVerificationCode = function(t) {
                t ? a.mobile.test(t) ? n.getData(ALL_PORT.SendMsg.url, "POST", {
                    mobileNo: t
                }).then(function(t) {
                    1 == t.Type ? function a() {
                        var t = 60
                          , e = undefined;
                        e = s(function() {
                            if (t <= 0)
                                return $(".verificationCode").removeAttr("disabled"),
                                s.cancel(e),
                                e = undefined,
                                void (i.paracont = "重发验证码");
                            $(".verificationCode").attr("disabled", !0),
                            i.paracont = t + "秒后可重发",
                            t--
                        }, 1e3, 100)
                    }() : n.alertMs(t.Message)
                }) : n.alertMs("手机格式有误！") : n.alertMs("手机号码不能为空！")
            }
        }
    }
}
]),
angular.module("luZhouApp").controller("CollegeinfoCtrl", ["$scope", "$http", "commonService", "$state", "$loading", function(e, t, a, i, s) {
    e.vm = {},
    s.start("collegeInfo"),
    a.getData(ALL_PORT.CollegeInfo.url, "POST", ALL_PORT.CollegeInfo.data).then(function(t) {
        s.finish("collegeInfo"),
        e.collegeInfoData = t.Data
    })
}
]),
angular.module("luZhouApp").directive("tmCollegeInfo", function() {
    return {
        templateUrl: "components/tmCollegeInfo.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("StudentstyleCtrl", ["$scope", "$http", "$timeout", "$rootScope", "$cookieStore", "commonService", "$location", "$loading", function(e, t, a, i, s, n, l, r) {
    e.hotArticle = function() {
        r.start("articleHot");
        n.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
            page: 1,
            rows: 10,
            sort: "ClickCount",
            order: "desc",
            categoryId: null,
            titleNav: "热门文章",
            wordLimt: 35
        })).then(function(t) {
            r.finish("articleHot"),
            e.hotArticleData = t.Data
        })
    }
    ,
    e.hotArticle(),
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 9
    }),
    e.getStudentStyle = function(t) {
        r.start("studyStyle"),
        n.getData(ALL_PORT.StudentStyle.url, "POST", $.extend({}, ALL_PORT.StudentStyle.data, t)).then(function(t) {
            r.finish("studyStyle"),
            e.studyStyleData = t.Data,
            e.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.getStudentStyle(t)
    })
}
]),
angular.module("luZhouApp").directive("tmStudentStyle", function() {
    return {
        templateUrl: "components/tmStudentStyle.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("StudentstyledetailCtrl", ["$scope", "$http", "$stateParams", "$loading", "commonService", function(s, t, e, n, i) {
    n.start("tmshowarticledetail"),
    s.location = "学院风采",
    s.isNews = !0;
    var a = e.Id;
    s.favoriteAdd = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteAdd.data, t, e);
        i.getData(ALL_PORT.FavoriteAdd.url, "POST", a).then(function(t) {
            1 === t.Type ? (s.articleData.FavoriteId = t.Value,
            i.alertMs(t.Message)) : 0 === t.Type && i.alertMs(t.Message)
        })
    }
    ,
    s.favoriteDelete = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteDelete.data, t, e);
        i.getData(ALL_PORT.FavoriteDelete.url, "POST", a).then(function(t) {
            1 === t.Type ? (s.articleData.FavoriteId = 0,
            i.alertMs(t.Message)) : 0 === t.Type && i.alertMs(t.Message)
        })
    }
    ,
    i.getData(ALL_PORT.ArticleContent.url, "POST", $.extend({}, ALL_PORT.ArticleContent.data, {
        Id: a
    })).then(function(t) {
        n.finish("tmshowarticledetail"),
        s.articleData = t.Data,
        s.content = t.Data.Content,
        s.articleData.Type = "Article";
        for (var e = s.content.split("font-size:"), a = /^(?=.*\d.*\b)/, i = 0; i < e.length; i++)
            a.test(e[i].split(";")[0]) && (s.fontSize = parseInt(e[i].split(";")[0]));
        s.fontSize || (s.fontSize = 14)
    }),
    s.reduceFont = function() {
        s.fontSize--,
        s.fontSize < 12 && (s.fontSize = 12),
        angular.element("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        $("#setFont").find("p,div").css({
            fontSize: s.fontSize + "px",
            lineHeight: s.fontSize + 10 + "px"
        })
    }
    ,
    s.increaseFont = function() {
        s.fontSize++,
        angular.element("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        $("#setFont").find("p,div").css({
            fontSize: s.fontSize + "px",
            lineHeight: s.fontSize + 10 + "px"
        })
    }
}
]),
angular.module("luZhouApp").directive("tmStudentStyleDetail", function() {
    return {
        templateUrl: "components/tmStudentStyleDetail.html",
        restrict: "EA",
        controller: ["commonService", "$scope", function(t, e) {
            e.print = function() {
                t.print($(".article-detail-content"))
            }
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ResultshowCtrl", ["$scope", "$http", "$cookieStore", "commonService", "$loading", function(e, t, a, i, s) {
    s.start("resultShow");
    var n = $.extend({}, ALL_PORT.ArticleList.data, {
        rows: "4",
        wordLimt: "35",
        titleNav: "成果展示"
    });
    i.getData(ALL_PORT.ArticleList.url, "POST", n).then(function(t) {
        s.finish("resultShow"),
        e.resultShowData = t.Data
    })
}
]),
angular.module("luZhouApp").directive("tmResultShow", function() {
    return {
        templateUrl: "components/tmResultShow.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("BookchapterCtrl", ["$scope", "$state", "$rootScope", "$cookieStore", "commonService", "$stateParams", "$loading", function(a, t, e, i, s, n, l) {
    a.bookId = n.bookId,
    a.getBookChapter = function(t) {
        l.start("bookChapter");
        var e = $.extend({}, ALL_PORT.BookChapterList.data, {
            bookId: a.bookId
        }, t);
        s.getData(ALL_PORT.BookChapterList.url, "POST", e).then(function(t) {
            l.finish("bookChapter"),
            a.bookChapterData = t.Data,
            a.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: ALL_PORT.BookChapterList.data.rows
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getBookChapter(t)
    })
}
]),
angular.module("luZhouApp").directive("tmBookChapter", function() {
    return {
        templateUrl: "components/tmBookChapter.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("BookchaptercontentCtrl", ["$scope", "$state", "$rootScope", "$cookieStore", "commonService", "$stateParams", "$loading", function(s, t, e, a, i, n, l) {
    s.Id = n.Id,
    s.token = i.AntiForgeryToken(),
    s.getBookChapter = function(t) {
        l.start("tmshowarticledetail");
        var e = $.extend({}, ALL_PORT.BookChapterContent.data, {
            Id: t
        });
        i.getData(ALL_PORT.BookChapterContent.url, "POST", e).then(function(t) {
            l.finish("tmshowarticledetail"),
            s.articleData = t.Data,
            s.content = t.Data.Content,
            s.articleData.Type = "BookChapter";
            for (var e = s.content.split("font-size:"), a = /^(?=.*\d.*\b)/, i = 0; i < e.length; i++)
                a.test(e[i].split(";")[0]) && (s.fontSize = parseInt(e[i].split(";")[0]));
            s.fontSize || (s.fontSize = 14)
        })
    }
    ,
    s.getBookChapter(s.Id),
    s.favoriteAdd = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteAdd.data, t, e);
        i.getData(ALL_PORT.FavoriteAdd.url, "POST", a).then(function(t) {
            1 == t.Type ? (i.alertMs(t.Message),
            s.getBookChapter(s.Id)) : i.alertMs(t.Message)
        })
    }
    ,
    s.favoriteDelete = function(t, e) {
        var a = $.extend({}, ALL_PORT.FavoriteDelete.data, t, e);
        i.getData(ALL_PORT.FavoriteDelete.url, "POST", a).then(function(t) {
            1 == t.Type ? (i.alertMs(t.Message),
            s.getBookChapter(s.Id)) : i.alertMs(t.Message)
        })
    }
    ,
    s.reduceFont = function() {
        s.fontSize--,
        s.fontSize < 12 && (s.fontSize = 12),
        angular.element("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        angular.element("#setFont").find("p").css("fontSize", s.fontSize + "px")
    }
    ,
    s.increaseFont = function() {
        s.fontSize++,
        angular.element("#setFont").find("span").css("fontSize", s.fontSize + "pt"),
        angular.element("#setFont").find("p").css("fontSize", s.fontSize + "px")
    }
}
]),
angular.module("luZhouApp").directive("tmBookChapterContent", function() {
    return {
        templateUrl: "components/tmBookChapterContent.html",
        restrict: "EA",
        controller: ["commonService", "$scope", function(t, e) {
            e.print = function() {
                t.print($(".article-detail-content"))
            }
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPlaySingle", function() {
    return {
        templateUrl: "components/tmPlaySingle.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassGarden", function() {
    return {
        templateUrl: "components/tmClassGarden.html",
        restrict: "EA",
        controller: ["$scope", "commonService", function(e, t) {
            t.getData(ALL_PORT.GetTrainingClassTypeList.url, "POST", ALL_PORT.GetTrainingClassTypeList.data).then(function(t) {
                e.classListData = t.Data.ListData
            }),
            e.trainingClassType = [{
                text: "高端装备制造",
                id: 0
            }, {
                text: "企业家能力",
                id: 1
            }, {
                text: "科技服务业",
                id: 2
            }],
            e.classCategoryId = e.trainingClassType[0].id
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmRankingTab", function() {
    return {
        templateUrl: "components/tmRankingTab.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            a.start("rankingList"),
            t.getData(ALL_PORT.LeftGroupRank.url, "POST", $.extend({}, ALL_PORT.LeftGroupRank.data, {
                rows: 6
            })).then(function(t) {
                a.finish("rankingList"),
                e.govermentRanking = t.Data
            }),
            t.getData(ALL_PORT.CourseClickRank.url, "POST", $.extend({}, ALL_PORT.CourseClickRank.data, {
                rows: 6
            })).then(function(t) {
                e.courseRankingData = t.Data
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmBookGuide", function() {
    return {
        templateUrl: "components/tmBookGuide.html",
        restrict: "EA",
        controller: ["$scope", "commonService", "$loading", function(e, t, a) {
            a.start("bookList"),
            t.getData(ALL_PORT.BookList.url, "POST", $.extend({}, ALL_PORT.BookList.data, {
                rows: 3
            })).then(function(t) {
                a.finish("bookList"),
                e.booksData = t.Data,
                e.imgPath = t.Data.Path
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmRankingGuide", function() {
    return {
        templateUrl: "components/tmRankingGuide.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("SpeciallearningCtrl", ["$scope", "$http", "commonService", "$location", "$loading", function(e, t, a, i, s) {
    e.showNoSpecialClass = !1,
    a.getData(ALL_PORT.StudySpecial.url, "POST", $.extend({}, ALL_PORT.StudySpecial.data, {
        rows: 20
    })).then(function(t) {
        e.studySpecialData = t.Data,
        e.showNoSpecialClass = 0 == t.Data.ListData.length
    })
}
]),
angular.module("luZhouApp").directive("tmSpecialLearning", function() {
    return {
        templateUrl: "components/tmSpecialLearning.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("CoursecenterbuyCtrl", ["$scope", "$state", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", "$stateParams", function(i, s, t, e, n, a, l, r) {
    i.showInput1 = !0,
    i.showInput2 = !1,
    i.showInput3 = !1,
    i.recommendApi = !1,
    l.start("courseClassify"),
    i.courseClassify = [],
    n.getData(ALL_PORT.CourseCategory.url, "POST", ALL_PORT.CourseCategory.data).then(function(t) {
        l.finish("courseClassify");
        i.courseClassify = [{
            SunFlag: !1,
            children: null,
            id: 0,
            state: "open",
            text: "全部课程"
        }].concat(t.Data.ListData)
    });
    var o = r.title ? r.title : ""
      , d = r.channelId ? r.channelId : ""
      , c = ""
      , p = "";
    "title" === r.searchType ? p = o : "teacher" === r.searchType && (c = o),
    i.selectText = [{
        name: "课程名称",
        id: "1"
    }, {
        name: "课程类型",
        id: "2"
    }, {
        name: "主讲人",
        id: "3"
    }],
    i.videoType = [{
        name: "所有类型",
        id: "All"
    }, {
        name: "三分屏",
        id: "ThreeScreenCourse"
    }, {
        name: "单视频",
        id: "SingleCourse"
    }, {
        name: "动画类",
        id: "AnimationCourse"
    }];
    var u = {
        page: 1,
        rows: 10,
        sort: "Sort",
        order: "desc",
        courseType: "All",
        channelId: d,
        title: p,
        titleNav: "课程中心",
        wordLimt: 35,
        teacher: c
    };
    i.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: u.rows
    }),
    i.searchCourse = function(t, e) {
        l.start("courseSupermarket"),
        e ? "desc" == u.order ? u.order = "Asc" : "Asc" == u.order && (u.order = "desc") : u.order = "desc";
        var a = {};
        "1" == i.selectedName ? $.extend(a, {
            teacher: "",
            title: i.searchTitle,
            courseType: i.selectedType
        }, t) : "2" == i.selectedName ? $.extend(a, {
            teacher: "",
            title: i.searchTitle,
            courseType: i.selectedType
        }, t) : "3" == i.selectedName && $.extend(a, {
            teacher: i.searchTeacher,
            title: "",
            courseType: i.selectedType
        }, t),
        i.recommendApi = !1,
        $.extend(u, a),
        i.paginationConf.currentPage = u.page,
        n.getData(ALL_PORT.CourseList.url, "POST", u).then(function(t) {
            l.finish("courseSupermarket"),
            i.courseSupermarketData = t.Data,
            i.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    i.judgement = function() {
        i.searchTitle = "",
        i.searchTeacher = "",
        i.selectedType = "All",
        "1" == i.selectedName ? (i.showInput1 = !0,
        i.showInput2 = !1,
        i.showInput3 = !1) : "2" == i.selectedName ? (i.showInput1 = !1,
        i.showInput2 = !0,
        i.showInput3 = !1) : "3" == i.selectedName && (i.showInput1 = !1,
        i.showInput2 = !1,
        i.showInput3 = !0)
    }
    ,
    i.getRecommendCourse = function(t) {
        i.recommendApi = !0,
        l.start("courseSupermarket"),
        n.getData(ALL_PORT.RecommendCourse.url, "POST", $.extend({}, ALL_PORT.RecommendCourse.data, {
            page: 1,
            rows: 10
        }, t)).then(function(t) {
            l.finish("courseSupermarket"),
            i.courseSupermarketData = t.Data,
            i.courseSupermarketData.ChannelName = "智能推荐",
            i.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    i.$watch("paginationConf.currentPage", function() {
        var t = {
            page: i.paginationConf.currentPage
        };
        i.recommendApi ? i.getRecommendCourse(t) : i.searchCourse(t)
    }),
    i.selectClass = {};
    var m = n.AntiForgeryToken();
    i.checkAll = function() {
        $(":checkbox").each(function() {
            "disabled" != $(this).attr("disabled") && $(this).prop("checked", !0)
        })
    }
    ,
    i.selectInvert = function() {
        $(":checkbox").each(function() {
            "disabled" != $(this).attr("disabled") && ($(this).prop("checked") ? $(this).prop("checked", !1) : $(this).prop("checked", !0))
        })
    }
    ,
    i.selectClass = {},
    i.ckBatch = function() {
        var e = $(".NewCourseList input[type='checkbox'][name='subcheck']:checked").length
          , t = "";
        $(".NewCourseList input[type='checkbox'][name='subcheck']:checked").each(function() {
            0 !== $(this).val() && (t += $(this).val() + ",")
        });
        var a = t.split(",");
        a.pop(),
        i.selectClass.ids = a,
        "" !== t ? n.getData(ALL_PORT.AddToCart.url, "POST", $.extend({}, ALL_PORT.AddToCart.data, i.selectClass, m)).then(function(t) {
            1 == t.Type ? confirm(e + "个商品已添加到购物车,是否去结算?") ? s.go("shoppingcart") : i.recommendApi ? i.getRecommendCourse() : i.searchCourse() : n.alertMs(t.Message)
        }) : n.alertMs("您没有选择可添加的课程！")
    }
    ,
    i.addCourseToCart = function(t) {
        var e = $.extend({}, ALL_PORT.AddToCart.data, {
            ids: t
        });
        n.getData(ALL_PORT.AddToCart.url, "POST", e).then(function(t) {
            1 == t.Type ? confirm("1个商品已添加到购物车,是否去结算?") ? s.go("shoppingcart") : i.recommendApi ? i.getRecommendCourse() : i.searchCourse() : n.alertMs(t.Message)
        })
    }
    ,
    l.start("courseRankingList"),
    n.getData(ALL_PORT.CourseClickRank.url, "POST", ALL_PORT.CourseClickRank.data).then(function(t) {
        l.finish("courseRankingList"),
        i.courseRankingList = t.Data
    })
}
]),
angular.module("luZhouApp").directive("tmCourseSupermarketBuy", function() {
    return {
        templateUrl: "components/tmCourseSupermarketBuy.html",
        restrict: "EA",
        transclude: {
            pagation: "tm-pagation"
        },
        link: function(t, e, a) {
            $(".title_bar a").click(function() {
                "▼" == $(this).children("span").html() ? ($(this).children("span").html("▲"),
                $(this).parent("span").siblings("span").children().children("span").html("▼")) : "▲" == $(this).children("span").html() && $(this).children("span").html("▼")
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmUserInformationBuy", function() {
    return {
        templateUrl: "components/tmUserInformationBuy.html",
        restrict: "EA",
        controller: ["$scope", "$rootScope", "commonService", "$loading", function(e, t, a, i) {
            e.out = a.loginOut,
            i.start("loginOut"),
            a.getData(ALL_PORT.LoginLong.url, "POST", ALL_PORT.LoginLong.data).then(function(t) {
                i.finish("loginOut"),
                e.info = t.Data
            })
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("ShoppingcartCtrl", ["$scope", "$location", "$state", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", function(e, t, a, i, s, n, l, r) {
    var o;
    e.token = n.AntiForgeryToken(),
    e.getShoppingCartList = function() {
        r.start("shoppingCart"),
        n.getData(ALL_PORT.GetMyShoppingCart.url, "POST", $.extend({}, ALL_PORT.GetMyShoppingCart.data)).then(function(t) {
            r.finish("shoppingCart"),
            1 == t.Type ? (e.shoppingCartData = t.Data,
            o = t.Data.Count) : n.alertMs(t.Message)
        })
    }
    ,
    e.getShoppingCartList(),
    e.delCourseFromCart = function(t) {
        n.getData(ALL_PORT.DelFromCart.url, "POST", $.extend({}, ALL_PORT.DelFromCart.data, {
            id: t
        })).then(function(t) {
            1 == t.Type ? (n.alertMs(t.Message),
            e.shoppingCartData = t.Data) : n.alertMs(t.Message)
        })
    }
    ,
    e.addOrder = function() {
        n.limitSubmit(function() {
            0 < o ? n.getData(ALL_PORT.AddOrder.url, "POST", $.extend({}, ALL_PORT.AddOrder.data, {
                type: 2
            })).then(function(t) {
                1 == t.Type ? a.go("orderdetaillist", {
                    orderId: t.Data.OrderId
                }) : n.alertMs(t.Message)
            }) : n.alertMs("购物车为空，请添加商品到购物车！")
        })
    }
}
]),
angular.module("luZhouApp").controller("OrderdetaillistCtrl", ["$scope", "$state", "$location", "$stateParams", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", function(a, t, e, i, s, n, l, r, o) {
    a.orderId = i.orderId,
    a.getOrderDetailList = function() {
        o.start("orderDetailList");
        var t = $.extend({}, ALL_PORT.GetOrderDetail.data, {
            orderId: a.orderId
        });
        l.getData(ALL_PORT.GetOrderDetail.url, "POST", t).then(function(t) {
            o.finish("orderDetailList"),
            1 == t.Type ? a.orderDetailListData = t.Data : l.alertMs(t.Message)
        })
    }
    ,
    a.getOrderDetailList(),
    a.payType = 1,
    a.goPayConfirm = function(t) {
        switch (Number(t)) {
        case 1:
            var e = $.extend({}, ALL_PORT.BeginPay.data, {
                orderId: a.orderId,
                payType: t
            });
            l.getData(ALL_PORT.BeginPay.url, "POST", e).then(function(t) {
                t.IsSuccess ? location.href = t.Message : l.alertMs(t.Message)
            });
            break;
        case 2:
            e = $.extend({}, ALL_PORT.BeginPay.data, {
                orderId: a.orderId,
                payType: t
            });
            l.getData(ALL_PORT.BeginPay.url, "POST", e).then(function(t) {
                t.IsSuccess ? location.href = t.Message : l.alertMs(t.Message)
            });
            break;
        case 4:
            e = $.extend({}, ALL_PORT.BeginPay.data, {
                orderId: a.orderId,
                payType: t
            });
            l.getData(ALL_PORT.BeginPay.url, "POST", e).then(function(t) {
                l.alertMs(t.Message)
            });
            break;
        default:
            l.alertMs("请选择支付方式！")
        }
    }
}
]),
angular.module("luZhouApp").controller("PayconfirmCtrl", ["$scope", "$location", "$state", "$stateParams", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", function(a, t, e, i, s, n, l, r, o) {
    a.orderId = i.orderId,
    a.token = l.AntiForgeryToken(),
    a.getOrderDetailList = function() {
        o.start("payConfirm");
        var t = $.extend({}, ALL_PORT.GetOrderDetail.data, {
            orderId: a.orderId
        });
        l.getData(ALL_PORT.GetOrderDetail.url, "POST", t).then(function(t) {
            o.finish("payConfirm"),
            1 == t.Type ? a.orderDetailListData = t.Data : l.alertMs(t.Message)
        })
    }
    ,
    a.getOrderDetailList(),
    a.payType = "Alipay",
    a.goPayConfirm = function(t) {
        if (t) {
            var e = $.extend({}, ALL_PORT.InvoiceBeginPay.data, {
                orderId: a.orderId,
                payType: t
            });
            l.getData(ALL_PORT.InvoiceBeginPay.url, "POST", e).then(function(t) {
                1 == t.Type ? function e(t) {
                    l.getData(ALL_PORT.PayForInvoice.url, "POST", {
                        invoiceId: t
                    }).then(function(t) {
                        1 == t.Type ? a.payContent = t.Data : l.alertMs(t.Message)
                    })
                }(t.Data.InvoiceId) : l.alertMs(t.Message)
            })
        } else
            l.alertMs("请选择支付方式！")
    }
}
]),
angular.module("luZhouApp").controller("OrderconfirmCtrl", ["$scope", "$stateParams", "commonService", "$loading", function(e, t, a, i) {
    e.token = a.AntiForgeryToken(),
    e.invoiceId = t.invoiceId,
    e.getInvoice = function() {
        i.start("orderConfirm"),
        a.getData(ALL_PORT.GetInvoice.url, "POST", {
            invoiceId: e.invoiceId
        }).then(function(t) {
            i.finish("orderConfirm"),
            1 == t.Type ? e.invoiceData = t.Data : a.alertMs(t.Message)
        })
    }
    ,
    e.getInvoice(),
    e.getConfirmPay = function() {
        a.getData(ALL_PORT.PayForInvoice.url, "POST", {
            invoiceId: e.invoiceId
        }).then(function(t) {
            1 == t.Type ? e.payContent = t.Data : a.alertMs(t.Message)
        })
    }
}
]),
angular.module("luZhouApp").controller("OrderlistCtrl", ["$scope", "$stateParams", "$state", "$cookieStore", "commonService", "$loading", function(a, t, e, i, s, n) {
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 4
    }),
    a.getOrderList = function(t) {
        n.start("orderList");
        var e = $.extend({}, ALL_PORT.GetMyOrder.data, t);
        s.getData(ALL_PORT.GetMyOrder.url, "POST", e).then(function(t) {
            n.finish("orderList"),
            a.orderListData = t.Data,
            a.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getOrderList(t)
    }),
    a.delOrder = function(t) {
        s.getData(ALL_PORT.DelOrder.url, "POST", {
            orderId: t
        }).then(function(t) {
            1 == t.Type ? (s.alertMs(t.Message),
            a.getOrderList({
                page: a.paginationConf.currentPage
            })) : s.alertMs(t.Message)
        })
    }
    ,
    a.cancelOrder = function(t) {
        s.getData(ALL_PORT.CancelOrder.url, "POST", {
            orderId: t
        }).then(function(t) {
            1 == t.Type ? (s.alertMs(t.Message),
            a.getOrderList({
                page: a.paginationConf.currentPage
            })) : s.alertMs(t.Message)
        })
    }
    ,
    a.restoreOrder = function(t) {
        s.getData(ALL_PORT.RestoreOrder.url, "POST", {
            orderId: t
        }).then(function(t) {
            1 == t.Type ? (s.alertMs(t.Message),
            e.go("shoppingcart")) : s.alertMs(t.Message)
        })
    }
}
]),
angular.module("luZhouApp").controller("InvoicelistCtrl", ["$scope", "$stateParams", "$state", "commonService", "$loading", function(e, t, a, i, s) {
    e.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 4
    }, {
        totalItems: 20
    }),
    e.getOrderList = function(t) {
        s.start("invoiceList");
        var e = $.extend({}, ALL_PORT.GetMyOrder.data, t);
        i.getData(ALL_PORT.GetMyOrder.url, "POST", e).then(function(t) {
            s.finish("invoiceList")
        })
    }
    ,
    e.$watch("paginationConf.currentPage", function() {
        var t = {
            page: e.paginationConf.currentPage
        };
        e.getOrderList(t)
    })
}
]),
angular.module("luZhouApp").controller("ApplyinvoiceCtrl", function() {
    this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}),
angular.module("luZhouApp").directive("tmOrderConfirm", function() {
    return {
        templateUrl: "components/tmOrderConfirm.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmApplyInvoice", function() {
    return {
        templateUrl: "components/tmApplyInvoice.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmInvoiceList", function() {
    return {
        templateUrl: "components/tmInvoiceList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmOrderDetailList", function() {
    return {
        templateUrl: "components/tmOrderDetailList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmOrderList", function() {
    return {
        templateUrl: "components/tmOrderList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPayConfirm", function() {
    return {
        templateUrl: "components/tmPayConfirm.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmShoppingCart", function() {
    return {
        templateUrl: "components/tmShoppingCart.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("TryplayCtrl", ["$scope", "$http", "$state", "$timeout", "$interval", "$sce", "$cookieStore", "commonService", "$location", "$loading", "$stateParams", function(u, t, i, e, s, l, n, m, a, r, o) {
    u.Id = o.Id,
    u.token = m.AntiForgeryToken(),
    u.allPlayInfo,
    u.userId;
    var d = 0
      , c = 0
      , p = undefined
      , g = null
      , v = n.get("tryPlaySeconds");
    function f(t) {
        var e = s(function() {
            (p--,
            v[c].second = p,
            n.put("tryPlaySeconds", v),
            p <= 0) && (s.cancel(e),
            e = undefined,
            $(".playPage").html(""),
            window.confirm("试看结束，是否购买此课程？") ? (clearInterval(g),
            function a(t) {
                var e = $.extend({}, ALL_PORT.AddToCart.data, {
                    ids: t
                });
                m.getData(ALL_PORT.AddToCart.url, "POST", e).then(function(t) {
                    1 == t.Type ? i.go("shoppingcart", {}, {
                        reload: !0
                    }) : (alert(t.Message),
                    m.closeWindow())
                })
            }(t)) : m.closeWindow())
        }, 1e3, 120)
    }
    void 0 === v && (v = []),
    angular.forEach(v, function(t, e) {
        t.id == u.Id && (c = e,
        p = t.second)
    }),
    void 0 === p && (p = 100,
    v.push({
        id: u.Id,
        second: 100
    }),
    c = v.length - 1,
    n.put("tryPlaySeconds", v)),
    u.loadPlayInfo = function() {
        t({
            method: "POST",
            url: ALL_PORT.TryPlay.url,
            data: $.param($.extend({}, ALL_PORT.TryPlay.data, {
                id: u.Id
            }))
        }).success(function(t) {
            if (1 !== t.Type)
                return alert(t.Message),
                void m.closeWindow();
            u.userId = t.Data.UserId,
            u.allPlayInfo = t.Data,
            t.Data && null == t.Data.Content ? t.Data.PortalId && t.Data.UserId && t.Data.CourseId ? (0 == d && (g = m.refresh(u.allPlayInfo.PortalId, u.allPlayInfo.UserId, u.allPlayInfo.CourseId),
            d = 1),
            u.options = t.Data.PlayPage,
            u.resultCourseDetail = t.Data.resultCourseDetail,
            u.resultCourseNote = t.Data.resultCourseNote) : m.alertMs("数据无效，请检查api", function() {
                m.closeWindow()
            }) : t.Data && t.Data.Content && m.alertMs("同时只能打开一门课程,请关闭之前页面,并于" + t.Data.Content + "秒后重试！", function() {
                m.closeWindow()
            })
        })
    }
    ,
    u.loadPlayInfo();
    var h = function() {
        var t = $.extend({}, ALL_PORT.PlayOffice.data, {
            courseId: u.allPlayInfo.CourseId
        });
        m.getData(ALL_PORT.PlayOffice.url, "POST", t).then(function(t) {
            !function(t) {
                var e = t.Url
                  , i = t.UserId
                  , s = t.CourseId
                  , a = t.LastPostion || 1
                  , n = t.Location || 1
                  , l = 0
                  , r = 0;
                $("#documentViewer").FlexPaperViewer({
                    config: {
                        SWFFile: escape(e),
                        Scale: .6,
                        ZoomTransition: "easeOut",
                        ZoomTime: .5,
                        ZoomInterval: .2,
                        FitPageOnLoad: !0,
                        FitWidthOnLoad: !1,
                        FullScreenAsMaxWindow: !1,
                        ProgressiveLoading: !1,
                        MinZoomSize: .2,
                        MaxZoomSize: 5,
                        SearchMatchAll: !1,
                        InitViewMode: "Portrait",
                        RenderingOrder: "flash",
                        StartAtPage: a,
                        ViewModeToolsVisible: !0,
                        ZoomToolsVisible: !0,
                        NavToolsVisible: !0,
                        CursorToolsVisible: !0,
                        SearchToolsVisible: !0,
                        WMode: "window",
                        localeChain: "zh_CN",
                        jsDirectory: "plugins/FlexPaper_2.3.6/js/",
                        cssDirectory: "plugins/FlexPaper_2.3.6/css/"
                    }
                }),
                $("#documentViewer").bind("onDocumentLoaded", function(t, e) {
                    l = e,
                    p()
                }),
                $(window).keydown(function(t) {
                    switch (t.keyCode) {
                    case 13:
                    case 40:
                        $FlexPaper("documentViewer").nextPage();
                        break;
                    case 38:
                        $FlexPaper("documentViewer").prevPage()
                    }
                });
                var o = parseFloat(a)
                  , d = parseFloat(n);
                $("#documentViewer").bind("onCurrentPageChanged", function(t, e) {
                    e = parseInt(e),
                    l && (r < 10 ? d < e ? ($FlexPaper("documentViewer").gotoPage(o),
                    alert("你翻太快了")) : (o = e,
                    r = 0) : e == d + 1 ? (c(e),
                    o = d = e,
                    r = 0) : d + 1 < e ? ($FlexPaper("documentViewer").gotoPage(o),
                    alert("你翻太快了")) : (o = e,
                    r = 0))
                });
                var c = function(t) {
                    var e = {
                        course_id: s,
                        lesson_id: t,
                        user_id: i,
                        total_id: l
                    }
                      , a = $.extend({}, e, u.token);
                    m.getData(ALL_PORT.ProcessOffice.url, "POST", a).then(function(t) {
                        u.loadPlayInfo()
                    })
                };
                function p() {
                    r += 1,
                    $("#stime").html(r),
                    setTimeout(p, 1e3)
                }
            }(t.Data)
        })
    };
    u.showPlayMp4 = !1,
    u.showPlayJy = !1,
    u.showPlayScorm = !1,
    u.showPlaySingle = !1,
    u.showPlayPdf = !1,
    u.dragReady = function() {
        document.getElementById("tryPlayBg").style.display = "none";
        var t, e, a, i, s = u.allPlayInfo.PlayPage.split("?")[0];
        "PlayJwplay.html" == s ? (u.showPlayMp4 = !0,
        function() {
            var t = $.extend({}, ALL_PORT.PlayJwplay.data, {
                courseid: u.allPlayInfo.CourseId
            });
            u.playMp4Data = {};
            m.getData(ALL_PORT.PlayJwplay.url, "POST", t).then(function(t) {
                u.playMp4Data = t.Data,
                t.Data.PortalId,
                t.Data.UserId;
                var e = t.Data.CourseId;
                t.Data.LastPostion,
                t.Data.Location,
                jwplayer("myplayer").setup({
                    flashplayer: "jwplayer/jwplayer.flash.swf",
                    file: u.playMp4Data.Url,
                    autostart: "true",
                    width: "100%",
                    height: "100%"
                }),
                f(e)
            }, function() {
                m.closeWindow()
            })
        }()) : "PlayJy.html" == s ? (u.showPlayJy = !0,
        i = $.extend({}, ALL_PORT.PlayJY.data, {
            courseId: u.allPlayInfo.CourseId
        }),
        u.playMJyData = {},
        m.getData(ALL_PORT.PlayJY.url, "POST", i).then(function(t) {
            u.playMJyData = t.Data,
            u.BatchId = t.Data.BatchId,
            u.CourseId = t.Data.CourseId,
            u.LastPostion = t.Data.LastPostion,
            u.PortalId = t.Data.PortalId,
            u.PortalURL = t.Data.PortalURL,
            u.Url = t.Data.Url,
            u.UserId = t.Data.UserId,
            u.jyIframeSrc = l.trustAsResourceUrl(u.Url),
            f(u.CourseId),
            u.PortalId && u.UserId && u.CourseId ? u.Url && u.PortalURL || m.alertMs("没有视频资源！", function() {
                m.closeWindow()
            }) : m.alertMs("数据无效，请检查api", function() {
                m.closeWindow()
            })
        })) : "PlayScorm.html" == s ? (u.showPlayScorm = !0,
        a = $.extend({}, ALL_PORT.PlayScorm.data, {
            courseId: u.allPlayInfo.CourseId
        }),
        u.playScormData = {},
        m.getData(ALL_PORT.PlayScorm.url, "POST", a).then(function(t) {
            u.playScormData = t.Data,
            t.Data.BatchId;
            var e = t.Data.CourseId
              , a = (t.Data.LastPostion,
            t.Data.PortalId)
              , i = (t.Data.PortalURL,
            t.Data.Url)
              , s = t.Data.UserId;
            u.scormIframeSrc = l.trustAsResourceUrl(i),
            a && s && e || m.alertMs("数据无效，请检查api", function() {
                m.closeWindow()
            }),
            f(e)
        })) : "PlaySingle.html" == s ? (u.showPlaySingle = !0,
        e = $.extend({}, ALL_PORT.PlaySingle.data, {
            courseId: u.allPlayInfo.CourseId
        }),
        u.playSingleData = {},
        m.getData(ALL_PORT.PlaySingle.url, "POST", e).then(function(t) {
            u.playSingleData = t.Data;
            var e, a = t.Data.PortalId, i = t.Data.UserId, s = t.Data.CourseId, n = (t.Data.LastPostion,
            t.Data.Location,
            t.Data.Url);
            a && i && s || m.alertMs("数据无效，请检查api", function() {
                m.closeWindow()
            }),
            (e = document.MediaPlayer).Filename = n,
            e.currentPosition = 0,
            f(s)
        }, function() {
            m.closeWindow()
        })) : "PlayOffice.html" == s ? (u.showPlayPdf = !0,
        h()) : "PlayJyScorm.html" === s ? (u.showPlayJyScorm = !0,
        t = $.extend({}, ALL_PORT.PlayJyScorm.data, {
            id: u.allPlayInfo.CourseId
        }),
        m.getData(ALL_PORT.PlayJyScorm.url, "POST", t).then(function(t) {
            u.jyScormData = t.Data;
            var e = t.Data.PortalId
              , a = t.Data.UserId
              , i = t.Data.CourseId
              , s = t.Data.Url
              , n = t.Data.Progress;
            u.jyScormSrc = l.trustAsResourceUrl(s + "&portalId=" + e + "&userId=" + a + "&courseId=" + i + "&progress=" + n)
        })) : 0 <= s.indexOf("JYScormEnv") && (u.showPlayScorm = !0,
        u.scormIframeSrc = l.trustAsResourceUrl(u.allPlayInfo.PlayPage))
    }
}
]),
angular.module("luZhouApp").directive("tmTryPlay", function() {
    return {
        templateUrl: "components/tmTryPlay.html",
        restrict: "EA",
        link: function(t, e, a) {
            $(".playPage").css({
                height: $(document).height() - 22
            })
        }
    }
}),
angular.module("luZhouApp").controller("SpeciallearningoneCtrl", ["$scope", "$http", "commonService", "$location", "$loading", function(e, t, a, i, s) {
    s.start("specialNewSlide"),
    a.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        rows: 4,
        CategoryCode: "specialNewsSlide",
        TitleNav: "专题新闻轮播"
    })).then(function(t) {
        s.finish("specialNewSlide"),
        e.slideData = t.Data
    }),
    e.startSlide = function() {
        setTimeout(function() {
            $(".specialNewSlide").bxSlider({
                slideWidth: 345,
                auto: !0,
                controls: !1,
                autoHover: !0
            })
        }, 0)
    }
    ,
    e.importantTalk = "importantTalk",
    s.start(e.importantTalk),
    a.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        rows: 7,
        CategoryCode: e.importantTalk,
        TitleNav: "习近平重要讲话"
    })).then(function(t) {
        s.finish(e.importantTalk),
        e.specialNewsData = t.Data
    }),
    e.LearningInform = "LearningInform",
    s.start(e.LearningInform),
    a.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        rows: 7,
        CategoryCode: e.LearningInform,
        TitleNav: "学习通知"
    })).then(function(t) {
        s.finish(e.LearningInform),
        e.learningInformData = t.Data
    }),
    s.start("specialLearningCourse"),
    a.getData(ALL_PORT.CourseList.url, "POST", $.extend({}, ALL_PORT.CourseList.data, {
        rows: 8,
        channelCode: "xiJinPingCourse",
        TitleNav: "习近平总书记系列重要讲话精神"
    })).then(function(t) {
        s.finish("specialLearningCourse"),
        e.specialCourseData = t.Data
    }),
    e.commentsNews = "commentsNews",
    s.start(e.commentsNews),
    a.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        rows: 5,
        CategoryCode: e.commentsNews,
        TitleNav: "评论观点"
    })).then(function(t) {
        s.finish(e.commentsNews),
        e.commentsNewsData = t.Data
    }),
    e.theory = "theory",
    s.start(e.theory),
    a.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        rows: 5,
        CategoryCode: e.theory,
        TitleNav: "理论阐述"
    })).then(function(t) {
        s.finish(e.theory),
        e.theoryData = t.Data
    }),
    e.placeState = "placeState",
    s.start(e.placeState),
    a.getData(ALL_PORT.ArticleList.url, "POST", $.extend({}, ALL_PORT.ArticleList.data, {
        rows: 5,
        CategoryCode: e.placeState,
        TitleNav: "各地动态"
    })).then(function(t) {
        s.finish(e.placeState),
        e.placeStateData = t.Data
    }),
    s.start("specialTraining"),
    a.getData(ALL_PORT.StudySpecial.url, "POST", $.extend({}, ALL_PORT.StudySpecial.data, {
        rows: 10,
        TitleNav: "专题图片"
    })).then(function(t) {
        s.finish("specialTraining"),
        e.studySpecialData = t.Data
    }),
    e.repeatFinish = function() {
        setTimeout(function() {
            $(".slider3").bxSlider({
                slideWidth: 210,
                minSlides: 5,
                maxSlides: 5,
                moveSlides: 1,
                slideMargin: 8,
                auto: !0,
                autoHover: !0,
                pager: !1
            })
        }, 0)
    }
}
]),
angular.module("luZhouApp").directive("tmSpecialBanner", function() {
    return {
        templateUrl: "components/tmSpecialBanner.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmSpecialNewSlide", function() {
    return {
        templateUrl: "components/tmSpecialNewSlide.html",
        restrict: "EA",
        scope: {
            slideData: "=",
            startSlide: "="
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmSpecialNews", function() {
    return {
        templateUrl: "components/tmSpecialNews.html",
        restrict: "EA",
        scope: {
            specialNewsData: "=",
            categoryCode: "="
        },
        link: function(t, e, a) {
            t.articleUrl = "article({categoryCode:'" + t.categoryCode + "'})"
        }
    }
}),
angular.module("luZhouApp").directive("tmSpecialLearningCourse", function() {
    return {
        templateUrl: "components/tmSpecialLearningCourse.html",
        restrict: "EA",
        scope: {
            specialCourseData: "="
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmSpecialImg", function() {
    return {
        templateUrl: "components/tmSpecialImg.html",
        restrict: "EA",
        scope: {
            studySpecialData: "=",
            repeatFinish: "="
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("TrainingclassCtrl", ["$scope", "$location", "$state", "$rootScope", "$cookieStore", "commonService", "$timeout", "$loading", function(a, t, s, e, i, n, l, r) {
    r.start("courseClassify"),
    r.start("classMy"),
    a.vm = {
        activeTab: 1
    },
    n.getData(ALL_PORT.GetTrainingClassTypeList.url, "POST", $.extend({}, ALL_PORT.GetTrainingClassTypeList.data)).then(function(t) {
        r.finish("courseClassify");
        a.courseClassify = [{
            id: 0,
            text: "全部班级",
            children: null,
            state: "open",
            SunFlag: !1
        }].concat(t.Data.ListData)
    }),
    a.classMyType = "my",
    n.getData(ALL_PORT.ClassMy.url, "POST", $.extend({}, ALL_PORT.ClassMy.data)).then(function(t) {
        r.finish("classMy"),
        a.classMyData = t.Data
    }),
    a.classActiveType = "active",
    n.getData(ALL_PORT.ClassActive.url, "POST", $.extend({}, ALL_PORT.ClassActive.data)).then(function(t) {
        r.finish("classMy"),
        a.ClassActiveData = t.Data
    }),
    a.classRecentType = "recent",
    n.getData(ALL_PORT.ClassRecent.url, "POST", $.extend({}, ALL_PORT.ClassRecent.data)).then(function(t) {
        r.finish("classMy"),
        a.ClassRecentData = t.Data
    }),
    a.seeArticleDetail = function(t) {
        n.getData(ALL_PORT.ClassDetail.url, "POST", $.extend({}, ALL_PORT.ClassDetail.data, {
            Id: t,
            more: !1
        })).then(function(t) {
            a.classDetailData = t.Data.Model
        })
    }
    ,
    a.params = ALL_PORT.GetClassList.data,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: a.params.rows
    }),
    a.getClassList = function(t) {
        r.start("trainingCenter"),
        $.extend(a.params, t),
        t && t.page && (a.paginationConf.currentPage = a.params.page),
        n.getData(ALL_PORT.GetClassList.url, "POST", a.params).then(function(t) {
            r.finish("trainingCenter"),
            0 === t.Data.ListData.length ? a.paginationConf.totalItems = 0 : a.paginationConf.totalItems = t.Data.ListData[0].Count,
            "just" == a.params.type ? a.justListData = t.Data : "immediately" == a.params.type ? a.immediatelyListData = t.Data : "already" == a.params.type && (a.alreadyListData = t.Data)
        })
    }
    ,
    a.JudgeStatus = n.JudgeStatus,
    a.checkUserClass = function(a) {
        var i = window.open("about:blank", "_blank");
        n.getData(ALL_PORT.CheckUserClass.url, "POST", $.extend({}, ALL_PORT.CheckUserClass.data, {
            trainingId: a
        })).then(function(t) {
            if (0 === t.Type)
                i.close(),
                n.alertMs("请先加入培训班!");
            else {
                var e = s.href("classDetail", {
                    Id: a
                });
                i.location.href = e
            }
        })
    }
    ,
    a.addClass = function(t, e) {
        n.getData(ALL_PORT.UpdateTrainingStudentup.url, "POST", $.extend({}, ALL_PORT.UpdateTrainingStudentup.data, {
            Id: t
        })).then(function(t) {
            n.alertMs(t.Message),
            a.getClassList({
                type: e
            })
        })
    }
    ,
    a.delClass = function(t, e) {
        n.getData(ALL_PORT.UpdateTrainingStudentdown.url, "POST", $.extend({}, ALL_PORT.UpdateTrainingStudentdown.data, {
            Id: t
        })).then(function(t) {
            n.alertMs(t.Message),
            a.getClassList({
                type: e
            })
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage,
            title: a.searchTitle
        };
        a.getClassList(t)
    })
}
]),
angular.module("luZhouApp").controller("NoticelistCtrl", ["$scope", "$state", "commonService", "$loading", "$location", "$stateParams", function(a, t, i, s, e, n) {
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 10
    }),
    a.getNoticeList = function(t) {
        s.start("noticeAnnouncement");
        var e = $.extend({}, ALL_PORT.NoticeList.data, {
            rows: 10,
            sort: "Sort"
        }, t);
        i.getData(ALL_PORT.NoticeList.url, "POST", e).then(function(t) {
            s.finish("noticeAnnouncement"),
            a.noticeListData = t.Data;
            var e = t.Data.CategoryName;
            a.noticeTitle = e || t.Data.TitleNav,
            a.paginationConf.totalItems = t.Data.Count
        })
    }
    ,
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage,
            search: a.searchTitle
        };
        a.getNoticeList(t)
    })
}
]),
angular.module("luZhouApp").directive("tmNoticeList", function() {
    return {
        templateUrl: "components/tmNoticeList.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmChart", function() {
    return {
        templateUrl: "components/tmChart.html",
        restrict: "EA",
        controller: ["$scope", "$http", "$loading", "commonService", "$state", "$stateParams", "$element", "$attrs", function(t, e, a, i, s, n, l, r) {
            var c = echarts.init(document.getElementById("main"));
            c.setOption({
                title: {
                    text: "用户素质维度",
                    textStyle: {
                        fontSize: 20
                    }
                },
                name: {
                    textStyle: {
                        color: "#333",
                        fontSize: 14
                    }
                },
                tooltip: {},
                legend: {
                    show: !1,
                    data: ["当前值"]
                },
                radar: {
                    indicator: [],
                    splitNumber: 4,
                    center: ["50%", "55%"],
                    axisLine: {
                        lineStyle: {
                            color: "#d7d7d7"
                        },
                        width: 2
                    },
                    splitLine: {
                        show: !0
                    },
                    splitArea: {
                        show: !0,
                        areaStyle: {
                            color: "#fff",
                            width: 2
                        }
                    }
                },
                series: [{
                    name: "当前值",
                    type: "radar",
                    data: []
                }]
            });
            i.getData(ALL_PORT.GetUserSkill.url, "POST").then(function(t) {
                var e = t.Data;
                if (e) {
                    for (var a = [], i = [], s = [], n = 0; n < e.length; n++) {
                        var l = e[n].SkillValue
                          , r = e[n].RequiredValue
                          , o = {
                            name: e[n].SkillName,
                            max: r
                        };
                        a.push(o),
                        50 < l || i.push(l),
                        s.push(r)
                    }
                    var d = {
                        radar: {
                            indicator: a
                        },
                        series: [{
                            name: "当前值",
                            type: "radar",
                            data: [{
                                value: s,
                                name: "目标值",
                                symbol: "none",
                                lineStyle: {
                                    normal: {
                                        color: "#d7d7d7"
                                    }
                                }
                            }, {
                                value: i,
                                name: "当前值",
                                lineStyle: {
                                    normal: {
                                        color: "#a3a3a3"
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: "#a3a3a3"
                                    }
                                },
                                areaStyle: {
                                    normal: {
                                        opacity: .7,
                                        color: "#888d93"
                                    }
                                }
                            }]
                        }]
                    };
                    c.setOption(d)
                }
            })
        }
        ],
        link: function(t, e, a) {
            $(".slideBar").hover(function() {
                $(".hoverArrow").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"),
                $(".slideBar").animate({
                    right: "0"
                }, 300)
            }, function() {
                $(".hoverArrow").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"),
                $(".slideBar").animate({
                    right: "-430"
                }, 300, function() {})
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmRelatedCourse", function() {
    return {
        templateUrl: "components/tmRelatedCourse.html",
        restrict: "EA",
        scope: {
            relatedCourseData: "="
        },
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("expander", function() {
    return {
        templateUrl: "components/expander.html",
        restrict: "EA",
        scope: {
            classifyData: "=",
            search: "=",
            name: "=",
            titleNav: "="
        },
        controller: ["$scope", function(t) {
            t.hasNodes = function(t) {
                return !!t.children || !!t.children.length
            }
        }
        ],
        link: function(a, t, e) {
            a.startTree = function(t) {
                var e;
                setTimeout(function() {
                    $("#category").tree({
                        data: t,
                        onSelect: function(t) {
                            e != t.id && (e = t.id,
                            "course" == a.name ? 0 == e ? a.search({
                                channelId: "",
                                flag: "all",
                                title: "",
                                sort: "Sort",
                                order: "desc",
                                courseType: "All",
                                teacher: "",
                                page: 1
                            }) : a.search({
                                channelId: e,
                                flag: "all",
                                title: "",
                                sort: "Sort",
                                order: "desc",
                                courseType: "All",
                                teacher: "",
                                page: 1
                            }) : "book" === a.name ? a.search({
                                categoryId: e,
                                ptitle: t.text,
                                title: "",
                                page: 1
                            }) : "article" === a.name ? a.search({
                                categoryId: e,
                                search: "",
                                page: 1,
                                CategoryCode: ""
                            }) : "class" === a.name && a.search({
                                categoryId: e,
                                page: 1,
                                title: "",
                                type: "just"
                            }))
                        }
                    })
                }, 0)
            }
            ,
            a.$watch("classifyData", function(t) {
                a.startTree(t)
            })
        }
    }
}),
angular.module("luZhouApp").controller("ErrorCtrl", function() {
    this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}),
angular.module("luZhouApp").directive("tmPlayPdf", function() {
    return {
        templateUrl: "components/tmPlayPdf.html",
        restrict: "EA",
        link: function(t, e, a) {
            var i = setInterval(function() {
                if (1 <= $(".pdfjs-viewer_container").length) {
                    clearInterval(i);
                    var t = window.innerHeight
                      , e = $(".warnPdf").outerHeight();
                    $(".pdfjs-viewer_container").css({
                        height: t - e
                    })
                }
            }, 100)
        }
    }
}),
angular.module("luZhouApp").directive("commonHeader", function() {
    return {
        templateUrl: "components/commonHeader.html",
        restrict: "EA",
        scope: {
            titleHeader: "=",
            showMore: "=",
            linkUrl: "="
        },
        link: function(t, e, a) {
            t.titleHeader = t.titleHeader || "标题",
            t.showMore = t.showMore || !1,
            t.linkUrl = t.linkUrl || ""
        }
    }
}),
angular.module("luZhouApp").directive("tmClassDetail", function() {
    return {
        templateUrl: "components/tmClassDetail.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassifySearch", function() {
    return {
        templateUrl: "components/tmClassifySearch.html",
        restrict: "EA",
        controller: ["$scope", "$http", "$loading", "commonService", "$state", "$stateParams", "$element", "$attrs", function(e, t, a, i, s, n, l, r) {
            e.showCourseTypeName = !1,
            e.classify = [{
                name: "文章",
                type: "article"
            }, {
                name: "课程",
                type: "course"
            }],
            e.courseType = [{
                name: "全部",
                type: "title"
            }, {
                name: "主讲人",
                type: "teacher"
            }],
            e.judgement = function(t) {
                e.showCourseTypeName = "article" !== t
            }
            ,
            e.searchGlobal = function() {
                "article" === e.selectedName ? s.go("article", {
                    title: e.searchTitle
                }) : s.go("courseCenter", {
                    title: e.searchTitle,
                    searchType: e.courseTypeName
                })
            }
            ;
            var o = new Date
              , d = o.getFullYear()
              , c = o.getMonth() + 1
              , p = o.getDate()
              , u = ["日", "一", "二", "三", "四", "五", "六"][o.getDay()];
            e.tody = d + "年" + c + "月" + p + "日星期" + u
        }
        ],
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmPrintCertificate", function() {
    return {
        templateUrl: "components/tmPrintCertificate.html",
        restrict: "EA",
        link: function(t, e, a) {
            $(".startPrint").click(function() {
                $(".print").jqprint()
            })
        }
    }
}),
angular.module("luZhouApp").controller("PrintcertificateCtrl", function() {
    this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
}),
angular.module("luZhouApp").directive("tmClassInteraction", function() {
    return {
        templateUrl: "components/tmClassInteraction.html",
        restrict: "EA",
        link: function(t, e, a) {
            t.commentClick = function(t) {
                $(t.target).parent(".bottom").siblings(".commentForm").slideToggle(),
                $(t.target).parent(".bottom").siblings(".commentForm").find("textarea").val("")
            }
            ,
            t.replyClick = function(t) {
                $(t.target).parents(".commentList").find(".replyForm").slideToggle(),
                $(t.target).parents(".commentList").siblings(".commentList").find(".replyForm").slideUp()
            }
            ,
            t.foldUnfold = function(t) {
                "点击查看" == $(t.target).html() ? $(t.target).html("点击收起") : $(t.target).html("点击查看"),
                $(t.target).parents(".foldUnfold").prevAll(".commentList").slice(0, -2).slideToggle()
            }
        }
    }
}),
angular.module("luZhouApp").directive("floatWindow", function() {
    return {
        templateUrl: "components/floatWindow.html",
        restrict: "EA",
        link: function(t, e, a) {
            $(function() {
                $("#floadAD").adFloat({
                    width: 300,
                    height: 221,
                    closeid: "flyclose"
                })
            })
        }
    }
}),
angular.module("luZhouApp").directive("tmPlayJyScorm", function() {
    return {
        templateUrl: "components/tmPlayJyScorm.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("tmClassGarden2", function() {
    return {
        templateUrl: "components/tmClassGarden2.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("CreditpostCtrl", ["$scope", "commonService", "$rootScope", "$loading", "Notification", function(l, r, t, i, o) {
    r.alertMs('<p>亲爱的学员：</p><p style="text-indent: 2em;">学时申报默认只接受专业科目的学时上报，请不要把公需科目学时在此处上报，否则将导致您的学时统计异常。</p>'),
    l.batchId = null,
    l.submitData = {},
    l.isUpdate = !1,
    l.fileList = {};
    var d = function(s, n) {
        var l = [];
        return angular.forEach(s, function(t, e) {
            if (t.ParentId == n) {
                var a = d(s, t.Id)
                  , i = {
                    id: t.Id,
                    text: t.Name,
                    children: a
                };
                l.push(0 === a.length ? i : $.extend(i, {
                    state: "closed"
                }))
            }
        }),
        l
    }
      , s = function(t) {
        var e = t.split(":")
          , n = [];
        return angular.forEach(e, function(t, e) {
            var a = {}
              , i = t.split("/");
            a.name = i[i.length - 1];
            var s = t.substring(t.lastIndexOf(".") + 1, t.length);
            a.isImg = "pdf" != s,
            a.url = t,
            n.push(a)
        }),
        n
    };
    l.getFormData = function(e, t) {
        return t = e ? e.id : t,
        r.getData(ALL_PORT.GetSFormList.url, "POST", {
            Id: t,
            type: "dcredit"
        }).then(function(t) {
            return angular.forEach(t.Data, function(t, e) {
                t.DataJson && (t.DataJsonArr = t.DataJson.replace("；", ";").split(";"))
            }),
            l.formData = t.Data,
            e && (e.formData = t.Data),
            t
        })
    }
    ;
    var a = function(t) {
        0 == t.children.length && ($(".credit_category_modal").modal("hide"),
        t.formData ? l.formData = t.formData : l.getFormData(t),
        l.submitData = {},
        l.$digest(),
        l.CategoryId = t.id,
        l.fileList = {},
        $(".credit_category_modal").on("hidden.bs.modal", function() {
            $(".credit_category_modal").off("hidden.bs.modal"),
            $(".credit_form_modal").modal("show")
        }))
    };
    l.getCategoryList = function(t) {
        r.getData(ALL_PORT.GetSCategoryList.url, "POST", {
            Id: t
        }).then(function(t) {
            l.categoryList = t.Data;
            var e = d(t.Data, 0);
            $(".credit_category_modal .s_category_list").tree({
                data: e,
                animate: !0,
                formatter: function(t) {
                    return '<div class="ellipsis" title="' + t.text + '">' + t.text + "</div>"
                },
                onSelect: a
            })
        })
    }
    ;
    var n = t.$watch("userInfo", function(t) {
        if (t) {
            n();
            var e = t.Model.BatchId;
            l.batchId = e,
            l.getCategoryList(e)
        }
    });
    l.submit = function(t) {
        for (var e = {
            0: {
                name: "input",
                error: "请输入"
            },
            1: {
                name: "textarea",
                error: "请输入"
            },
            2: {
                name: "datepicker",
                error: "请选择"
            },
            3: {
                name: "select",
                error: "请选择"
            },
            4: {
                name: "checkbox",
                error: "请选择"
            },
            5: {
                name: "radio",
                error: "请选择"
            },
            6: {
                name: "file",
                error: "请上传"
            },
            7: {
                name: "number",
                error: "请输入"
            }
        }, a = 0; a < l.formData.length; a++) {
            var i = l.formData[a];
            if (i.RequireFlag && !l.submitData[i.Code || i.Id])
                return $(".credit_form_modal [name=" + e[i.FieldType].name + i.Id + "]").focus(),
                void o.error(e[i.FieldType].error + i.Name + "，该项必填")
        }
        var s = angular.copy(l.submitData)
          , n = {
            Name: s.Name,
            Credit: s.Credit,
            CreditTime: s.CreditTime,
            CategoryId: l.CategoryId
        };
        delete s.Name,
        delete s.Credit,
        delete s.CreditTime,
        l.isUpdate && (n.Id = s.Id,
        delete s.Id),
        $.extend(n, {
            DataJson: JSON.stringify(s)
        }),
        n = t ? $.extend(n, t) : n,
        r.getData(ALL_PORT.UploadDCredit.url, "POST", n).then(function(t) {
            t.IsSuccess ? (o.success(t.Message),
            1 != l.paginationConf.currentPage ? l.paginationConf.currentPage = 1 : l.getList(),
            $(".credit_form_modal").modal("hide")) : o.error(t.Message)
        }, function() {
            o.error("请求出错")
        })
    }
    ,
    l.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 15
    }),
    l.getList = function(t) {
        var e = {
            rows: 15,
            page: 1
        };
        e = t ? $.extend(e, t) : e,
        r.getData(ALL_PORT.GetDCreditList.url, "POST", e).then(function(t) {
            t.IsSuccess && (l.creditList = t.Data.rows,
            l.paginationConf.totalItems = t.Data.total)
        })
    }
    ,
    l.$watch("paginationConf.currentPage", function(t) {
        t && l.getList({
            page: t
        })
    });
    l.openModal = function(e) {
        l.isUpdate = !0,
        l.CategoryId = e.CategoryId,
        l.formData = [],
        l.submitData = {},
        l.getFormData(null, e.CategoryId).then(function(t) {
            t.IsSuccess ? (i.start("creditForm"),
            r.getData(ALL_PORT.GetDCreditDetail.url, "POST", {
                Id: e.Id
            }).then(function(t) {
                if (t.IsSuccess) {
                    $(".credit_form_modal").on("hidden.bs.modal", function() {
                        $(".credit_form_modal").off("hidden.bs.modal"),
                        l.isUpdate = !1,
                        l.$digest()
                    }),
                    $(".credit_form_modal").modal("show"),
                    i.finish("creditForm");
                    var e = t.Data
                      , a = JSON.parse(t.Data.DataJson);
                    l.submitData = {
                        Id: e.Id,
                        Name: e.Name,
                        Credit: e.Credit,
                        CreditTime: e.CreditTime
                    },
                    $.extend(l.submitData, a),
                    l.fileList = {},
                    angular.forEach(l.formData, function(t) {
                        if (6 == t.FieldType) {
                            var e = l.submitData[t.Code || t.Id];
                            l.fileList[t.Code || t.Id] = e ? s(e) : []
                        }
                    })
                } else
                    o.error(t.Message)
            })) : o.error(t.Message)
        })
    }
    ,
    l.deleteCredit = function(t) {
        r.alertMs("是否要删除该条？", 2, function() {
            r.getData(ALL_PORT.DeleteDCredit.url, "POST", {
                Id: t.Id
            }).then(function(t) {
                t.IsSuccess ? (o.success("删除成功"),
                1 != l.paginationConf.currentPage ? l.paginationConf.currentPage = 1 : l.getList()) : o.success("删除失败，" + t.Message)
            })
        })
    }
    ,
    l.uploadFile = r.uploadFile({
        type: "WorkFlow",
        url: API_URL + "/Filem/ToLead",
        data: {
            isAllPath: !0
        }
    });
    var c = debounce(function(t, e) {
        l.uploadFile(t).then(function(t) {
            "string" == typeof t ? (o.success("上传成功"),
            l.submitData[e] = l.submitData[e] ? l.submitData[e] : "",
            l.submitData[e] += l.submitData[e] ? ":" + t : t,
            l.fileList[e] = s(l.submitData[e])) : "object" == typeof t && (t.error ? o.error(t.error) : o.error("上传失败"))
        }, function(t) {
            console.log(t),
            o.error(t.message || "上传失败")
        })
    }, 500);
    l.listenChange = function(t, e) {
        $(this).off("change"),
        $(t.target).on("change", function(t) {
            $(this).off("change"),
            c(t, e)
        })
    }
    ,
    l.getAuditDetail = function(e) {
        $(".audit_detail_modal").modal("show"),
        l.formData = [],
        l.submitData = {},
        i.start("auditDetail"),
        r.getData(ALL_PORT.GetAuditHistory.url, "POST", {
            Id: e.Id
        }).then(function(t) {
            t.IsSuccess && (l.auditList = t.Data)
        }),
        l.CategoryId = e.CategoryId,
        l.getFormData(null, e.CategoryId).then(function(t) {
            t.IsSuccess ? r.getData(ALL_PORT.GetDCreditDetail.url, "POST", {
                Id: e.Id
            }).then(function(t) {
                if (i.finish("auditDetail"),
                t.IsSuccess) {
                    var e = t.Data
                      , a = JSON.parse(t.Data.DataJson);
                    l.submitData = {
                        Id: e.Id,
                        Name: e.Name,
                        Credit: e.Credit,
                        CreditTime: e.CreditTime
                    },
                    $.extend(l.submitData, a),
                    angular.forEach(l.formData, function(t, e) {
                        if (6 == t.FieldType) {
                            var a = l.submitData[t.Code || t.Id];
                            t.files = a ? s(a) : []
                        }
                    })
                } else
                    o.error(t.Message)
            }) : o.error(t.Message)
        })
    }
    ,
    l.$watch("submitData", function(t) {
        console.log(t)
    }, !0),
    l.removeFile = function(t, e, a) {
        var i = l.submitData[t || e].split(":");
        r.alertMs("是否要删除该文件", 2, function() {
            i.splice(a, 1),
            l.submitData[t || e] = i.join(":"),
            l.fileList[t || e] = s(l.submitData[t || e]),
            l.$digest()
        }, function() {})
    }
}
]),
angular.module("luZhouApp").directive("tmCreditPost", function() {
    return {
        templateUrl: "components/tmCreditPost.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("numberic", function() {
    return {
        require: "ngModel",
        restrict: "EA",
        scope: {
            max: "@",
            maxLength: "@",
            min: "@"
        },
        link: function(n, t, e, l) {
            l.$parsers.push(function(t) {
                if (t == undefined)
                    return "";
                var e = +n.max
                  , a = +n.maxLength
                  , i = +n.min
                  , s = t.replace(/[^^\d+(\.\d)?$]/g, "");
                return a && t.length > a && (s = t.slice(0, a)),
                e && e < +s && (s = e + ""),
                i && +s < i && (s = i + ""),
                s != t && (l.$setViewValue(s),
                l.$render()),
                s
            })
        }
    }
}),
angular.module("luZhouApp").controller("GybpostCtrl", ["$scope", "commonService", function(t, e) {
    t.paginationConf = $.extend({}, paginationConf)
}
]),
angular.module("luZhouApp").directive("tmGybPost", function() {
    return {
        templateUrl: "components/tmGybPost.html",
        restrict: "EA",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").controller("GybclasslistCtrl", ["$scope", "commonService", "$stateParams", "$state", function(a, s, t, n) {
    var e = t.Id;
    a.title = t.title,
    a.getList = function(t) {
        s.getData(ALL_PORT.GetClassList.url, "POST", $.extend({}, ALL_PORT.GetClassList.data, {
            page: 1,
            rows: 8,
            categoryId: e,
            type: ""
        }, t)).then(function(t) {
            if (0 < t.Data.ListData.length) {
                var e = t.Data.ListData;
                a.classList = angular.copy(e),
                a.paginationConf.totalItems = a.classList[0].Count
            } else
                a.classList = [],
                a.paginationConf.totalItems = 0
        })
    }
    ,
    a.paginationConf = $.extend({}, paginationConf, {
        itemsPerPage: 8
    }),
    a.$watch("paginationConf.currentPage", function() {
        var t = {
            page: a.paginationConf.currentPage
        };
        a.getList(t)
    }),
    a.JudgeStatus = s.JudgeStatus,
    a.checkUserClass = function(a) {
        var i = window.open("about:blank", "_blank");
        s.getData(ALL_PORT.CheckUserClass.url, "POST", $.extend({}, ALL_PORT.CheckUserClass.data, {
            trainingId: a
        })).then(function(t) {
            if (0 === t.Type)
                i.close(),
                s.alertMs("请先加入培训班!");
            else {
                var e = n.href("classDetail", {
                    Id: a
                });
                i.location.href = e
            }
        })
    }
    ,
    a.addClass = function(t) {
        s.getData(ALL_PORT.UpdateTrainingStudentup.url, "POST", $.extend({}, ALL_PORT.UpdateTrainingStudentup.data, {
            Id: t
        })).then(function(t) {
            s.alertMs(t.Message),
            a.getList()
        })
    }
}
]),
angular.module("luZhouApp").directive("tmGybClassList", function() {
    return {
        templateUrl: "components/tmGybClassList.html",
        restrict: "AE",
        link: function(t, e, a) {}
    }
}),
angular.module("luZhouApp").directive("datePicker", ["$timeout", function(n) {
    return {
        restrict: "A",
        require: "?ngModel",
        scope: {
            select: "&"
        },
        link: function(e, a, t, i) {
            if (i) {
                var s = {};
                n(function() {
                    function t() {
                        var t = a.val();
                        i.$setViewValue(t)
                    }
                    s = {
                        format: "yyyy-mm-dd",
                        weekStart: 1,
                        maxViewMode: 2,
                        todayBtn: "linked",
                        language: "zh-CN"
                    },
                    $(a).datepicker(s),
                    i.$render = function() {
                        a.val(i.$viewValue || "")
                    }
                    ,
                    a.on("blur change", function() {
                        e.$apply(t)
                    })
                }, 0)
            }
        }
    }
}
]),
angular.module("luZhouApp").run(["$templateCache", function(t) {
    "use strict";
    t.put("views/Do/collegeinfo.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_15"> <div tm-college-info></div> </div> </div> <div tm-footer></div>'),
    t.put("views/Do/gybclasslist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-gyb-class-list></div> </div> <div tm-footer></div>'),
    t.put("views/Do/login.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24 mar_top_20"> <div tm-login></div> </div> <div tm-footer></div>'),
    t.put("views/Do/printcertificate.html", "<div tm-print-certificate></div>"),
    t.put("views/Do/register.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-register></div> </div> <div tm-footer></div>'),
    t.put("views/Do/resultshow.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_15"> <div tm-result-show></div> </div> </div> <div tm-footer></div>'),
    t.put("views/Do/software.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="container_24"> <div tm-soft-ware></div> </div> </div> <div tm-footer></div>'),
    t.put("views/Do/studentstyle.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-article-hot></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-student-style></div> </div> </div> <div tm-footer></div>'),
    t.put("views/Do/studentstyledetail.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-student-style-detail></div> </div> <div tm-footer></div>'),
    t.put("views/courseCenter/coursedetails.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="container_24 mar_top_15"> <div tm-course-details></div> </div> </div> <div tm-footer></div>'),
    t.put("views/coursecenter.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_20"> \x3c!--<div tm-course-classify></div>--\x3e <div expander classify-data="courseClassify" search="searchCourse" name="\'course\'" title-nav="\'课程分类\'"></div> <div tm-course-ranking-list></div> </div> <div class="grid_18 mar_top_20 pad_left_10"> <div tm-course-supermarket> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/coursecenterbuy.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_20"> \x3c!--<div tm-course-classify></div>--\x3e <div expander classify-data="courseClassify" search="searchCourse" name="\'course\'" title-nav="\'课程分类\'"></div> <div tm-course-ranking-list></div> </div> <div class="grid_18 mar_top_20 pad_left_10"> <div tm-course-supermarket-buy> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/error.html", '<div class="error"> <div class="errorText"> <h1>error</h1> <h1>404 Not Find This Page :(</h1> </div> </div> <style>.error{\r\n    width: 800px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -400px;\r\n    margin-top: -100px;\r\n  }\r\n  .errorText {\r\n    text-align: center;\r\n  }\r\n  .errorText h1{\r\n    padding: 10px;\r\n  }</style>'),
    t.put("views/exam/exam.html", '<div class="container_24"> <div tm-exam></div> </div>'),
    t.put("views/exam/examdetaillist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-exam-detail></div> </div> </div> <div tm-footer></div>'),
    t.put("views/exam/examreview.html", '<div class="container_24"> <div tm-exam-review></div> </div>'),
    t.put("views/exam/poll.html", '<div class="container_24"> <div tm-poll></div> </div>'),
    t.put("views/exam/polllist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-poll-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/exam/pollreview.html", '<div class="container_24"> <div tm-poll-review></div> </div>'),
    t.put("views/library/bookchapter.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_20"> <div tm-book-chapter></div> </div> </div> <div tm-footer></div>'),
    t.put("views/library/bookchaptercontent.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_20"> <div tm-book-chapter-content></div> </div> </div> <div tm-footer></div>'),
    t.put("views/library/bookdetail.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_20"> <div tm-book-detail></div> </div> </div> <div tm-footer></div>'),
    t.put("views/library/library.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_20"> \x3c!--<div tm-book-category></div>--\x3e <div expander classify-data="bookCategory" search="searchCategory" name="\'book\'" title-nav="\'电子书分类\'"></div> </div> <div class="grid_18 mar_top_20 pad_left_10"> <div tm-library></div> </div> </div> <div tm-footer></div>'),
    t.put("views/main.html", '\x3c!--首页--\x3e <div tm-header></div> <div tm-nav-bars></div> \x3c!-- <img src="../qzzj/images/group.ab6e0103.png" alt="" style="width: 100%;"> --\x3e <div tm-user-login></div> <div class="container_24 mar_top_34"> <img src="../qzzj/images/bannerCenter.9e67392b.png" style="width: 1200px" alt=""> \x3c!-- <img class="mar_top_10" src="../qzzj/images/bannerCenter2.b1bb4409.png" alt=""> --\x3e </div> <div class="container_24 mar_top_40"> <div class="grid_12"> <div tm-news-information news-data="noticeData" type="\'notice\'" title="\'通知公告\'" more="\'\'"></div> </div> <div class="grid_12"> <div tm-news-information news-data="articleListData" type="\'article\'" title="\'职称资讯\'" more="articleListUrl"></div> </div> </div> <div class="container_24 mar_top_20"> <img src="../qzzj/images/bannerCenter3.0682b8de.png" alt="" style="width: 1200px"> </div> <div class="mar_top_20" style="background-color: #f6f7f9;padding: 34px 0 40px 0"> <div class="container_24"> <div class="grid_19_2"> <div tm-course-center></div> </div> <div class="grid_5_2"> <div tm-ranking-tab></div> </div> </div> </div> <div style="background-color: #fff;padding: 35px 0 24px 0"> <div class="container_24"> <div class="grid_19_2"> <div tm-class-garden></div> </div> <div class="grid_5_2"> <div class="title" style="font-size: 24px; line-height: 1;margin-bottom: 15px"> 政策法规 </div> <ul> <li class="ellipsis" ng-repeat="item in zcfg" style="width: 100%;height: 32px; line-height: 32px"> <a ui-sref="articleDetail({ID: item.Id})" title="{{item.Name}}"> {{item.Name}} </a> </li> </ul> </div> </div> </div> <div tm-footer></div> <div tm-tip></div> \x3c!-- <div float-window></div> --\x3e'),
    t.put("views/news/article.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> \x3c!--<div tm-article-category></div>--\x3e <div expander classify-data="categoryData" search="refreshList" name="\'article\'" title-nav="\'文章分类\'"></div> <div tm-article-hot></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-article-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/news/articledetail.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-show-article-detail></div> </div> <div tm-footer></div>'),
    t.put("views/news/cstrainingnews.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="container_24 mar_top_15 pad_left_20"> <div class="grid_12"> <a class="newsCenterAnchor com-header-blue mar_left_10" ng-click="goThere(\'newsPhoto\')"> 图片新闻 </a> <a class="newsCenterAnchor com-header-green mar_left_10" ng-click="goThere(\'policy\')"> 政策法规 </a> <a class="newsCenterAnchor com-header-cyan mar_left_10" ng-click="goThere(\'notify\')"> 公告通知 </a> </div> </div> <div class="container_24"> <div tm-news-photo class="clearfix"></div> <div id="policy" class="clearfix" tm-policy-and-notify my-data="newsData.policies" my-title="newsData.newsCenterTitle[0]"></div> <div id="notify" class="clearfix" tm-policy-and-notify my-data="newsData.notifies" my-title="newsData.newsCenterTitle[1]"></div> </div> </div> <div tm-footer></div> <style>a.newsCenterAnchor {\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 50px;\r\n    font-size: 16px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    color: #fff;\r\n  }</style>'),
    t.put("views/news/newsinfo.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="container_24 content"> <div ng-hide="newsData.CategoryName==\'图片新闻\'" tm-news-without-photo my-data="newsData"></div> <div ng-show="newsData.CategoryName==\'图片新闻\'" tm-news-with-photo></div> </div> <div ng-show="paginationConf.totalItems" tm-pagation conf="paginationConf"></div> </div> <div tm-footer></div> <style>.content {\r\n    min-height: 250px;\r\n  }\r\n\r\n  .news-body ul li {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .news span.dian {\r\n    display: inline-block;\r\n    margin: 5px;\r\n  }</style>'),
    t.put("views/news/originalarticle.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="container_24 mar_top_15"> <div tm-original-article></div> </div> </div> <div tm-footer></div>'),
    t.put("views/news/originalarticlelist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-original-article-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/news/patptrainingnews.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="container_24 mar_top_15 pad_left_20"> <div class="grid_12"> <a class="newsCenterAnchor com-header-blue mar_left_10" ng-click="goThere(\'newsPhoto\')"> 图片新闻 </a> <a class="newsCenterAnchor com-header-green mar_left_10" ng-click="goThere(\'policy\')"> 政策法规 </a> <a class="newsCenterAnchor com-header-cyan mar_left_10" ng-click="goThere(\'notify\')"> 公告通知 </a> </div> </div> <div class="container_24"> <div tm-news-photo class="clearfix"></div> <div id="policy" class="clearfix" tm-policy-and-notify my-data="newsData.policies" my-title="newsData.newsCenterTitle[0]"></div> <div id="notify" class="clearfix" tm-policy-and-notify my-data="newsData.notifies" my-title="newsData.newsCenterTitle[1]"></div> </div> </div> <div tm-footer></div> <style>a.newsCenterAnchor {\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 50px;\r\n    font-size: 16px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    color: #fff;\r\n  }</style>'),
    t.put("views/news/searchresult.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-search-result class="mar_top_15"></div> </div> <div tm-footer></div>'),
    t.put("views/noticelist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-notice-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/changeuserinfo.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-change-user-info></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/creditpost.html", '<div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-credit-post></div> </div> </div>'),
    t.put("views/personalCenter/forgetpassword.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_15"> <div tm-forget-password></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/gybpost.html", '<div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-gyb-post></div> </div> </div>'),
    t.put("views/personalCenter/messagedetail.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_15"> <div tm-message-detail></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/messagelist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-message-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/modifypassword.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-modify-password></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/myfavorite.html", '<div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-my-favorite> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("views/personalCenter/personalearningarchives.html", '<div class="container_24"> <div tm-personal-archives></div> </div>'),
    t.put("views/personalCenter/securitysetting.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-security-setting></div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalCenter/studyplan.html", '<div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-study-plan> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("views/personalCenter/studystat.html", '<div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-study-stat> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("views/personalCenter/teststat.html", '<div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-test-stat> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("views/personalCenter/unreadnotice.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-un-read-notice> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/personalcenter.html", '<div tm-header></div> <div tm-nav-bars></div> <div ui-view> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-personal-center-nav></div> \x3c!--<div tm-students-hour-ranking></div>--\x3e </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-my-center> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/play/play.html", "<div tm-play></div> <style>body{\r\n    background: #eee;\r\n  }\r\n  div.bigOuter {\r\n    width: 100%;\r\n  }</style>"),
    t.put("views/play/tryplay.html", "<div tm-try-play></div> <style>body{\r\n    background: #eee;\r\n  }\r\n  div.bigOuter {\r\n    width: 100%;\r\n  }</style>"),
    t.put("views/rankingList/rankcourseclick.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-ranking-guide></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-rank-course-click></div> </div> </div> <div tm-footer></div>'),
    t.put("views/rankingList/rankcoursefinish.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-ranking-guide></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-rank-course-finish></div> </div> </div> <div tm-footer></div>'),
    t.put("views/rankingList/rankgroup.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-ranking-guide></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-ranking-detail></div> </div> </div> <div tm-footer></div>'),
    t.put("views/rankingList/rankloginsum.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-ranking-guide></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-rank-login-sum></div> </div> </div> <div tm-footer></div>'),
    t.put("views/rankingList/userrankinglist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> <div tm-ranking-guide></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-user-ranking-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/shopping/applyinvoice.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_15 pad_left_10"> <div tm-apply-invoice></div> </div> </div> <div tm-footer></div>'),
    t.put("views/shopping/invoicelist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_24 mar_top_15 pad_left_10"> <div tm-invoice-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/shopping/orderconfirm.html", '<div class="container_24"> <div tm-order-confirm></div> </div>'),
    t.put("views/shopping/orderdetaillist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information-buy info="userMessage" out="loginOut"></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-order-detail-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/shopping/orderlist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information-buy info="userMessage" out="loginOut"></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-order-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/shopping/payconfirm.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information-buy info="userMessage" out="loginOut"></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-pay-confirm></div> </div> </div> <div tm-footer></div>'),
    t.put("views/shopping/shoppingcart.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information-buy info="userMessage" out="loginOut"></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-shopping-cart></div> </div> </div> <div tm-footer></div>'),
    t.put("views/specialLearning/speciallearning.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-special-learning></div> </div> </div> <div tm-footer></div>'),
    t.put("views/specialLearning/speciallearningone.html", '<div tm-special-banner></div> <div tm-nav-bars></div> <div class="container_24 mar_top_20"> <div class="grid_7"> <div tm-special-new-slide slide-data="slideData" start-slide="startSlide"></div> </div> <div class="grid_8_2 pad_left_20"> <div tm-special-news special-news-data="specialNewsData" category-code="importantTalk"></div> </div> <div class="grid_8_2 pad_left_20"> <div tm-special-news special-news-data="learningInformData" category-code="LearningInform"></div> </div> </div> <div class="container_24 mar_top_40"> <div class="grid_24"> <div tm-special-learning-course special-course-data="specialCourseData"></div> </div> </div> <div class="container_24 mar_top_20"> <div class="grid_8"> <div tm-special-news special-news-data="commentsNewsData" category-code="commentsNews"></div> </div> <div class="grid_8 pad_left_20"> <div tm-special-news special-news-data="theoryData" category-code="theory"></div> </div> <div class="grid_8 pad_left_20"> <div tm-special-news special-news-data="placeStateData" category-code="placeState"></div> </div> </div> <div class="container_24 mar_top_20"> <div tm-special-img study-special-data="studySpecialData" repeat-finish="repeatFinish"></div> </div> <div tm-footer></div>'),
    t.put("views/testcenter.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_7 mar_top_15"> <div tm-user-information></div> </div> <div class="grid_17 mar_top_15 pad_left_10"> <div tm-exam-list> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classarticledetail.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-show-article-detail></div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classcourse.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-course> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classdetail.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-detail></div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classexam.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-exam> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classlist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div expander classify-data="courseClassify" search="getClassList" name="\'class\'" title-nav="\'培训班分类\'"></div> <div tm-class-my class-my-data="classMyData" class-type="classMyType"></div> <div tm-class-my class-my-data="ClassActiveData" class-type="classActiveType"></div> <div tm-class-my class-my-data="ClassRecentData" class-type="classRecentType"></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-list></div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classnotice.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-notice> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classpaperadd.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-publish></div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classpaperlist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-paper-list> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classplan.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-plan></div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classstudent.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-student> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classtopicadd.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div tm-publish></div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/classtopiclist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-class-topic-list> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/photoalbumadd.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24 mar_top_20"> <div tm-photo-album-add></div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/photoalbumlist.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-photo-album-list> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingClass/photopreview.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> <div tm-personal-learning-info></div> <div tm-class-my class-my-data="classMyData" class-type="\'my\'"></div> <div tm-class-navigation></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-photo-preview> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-footer></div>'),
    t.put("views/trainingclass.html", '<div tm-header></div> <div tm-nav-bars></div> <div class="container_24"> <div class="grid_6 mar_top_15"> \x3c!--<div tm-user-information></div>--\x3e <div expander classify-data="courseClassify" search="getClassList" name="\'class\'" title-nav="\'培训班分类\'"></div> <div tm-class-my class-my-data="classMyData" class-type="classMyType"></div> <div tm-class-my class-my-data="ClassActiveData" class-type="classActiveType"></div> <div tm-class-my class-my-data="ClassRecentData" class-type="classRecentType"></div> </div> <div class="grid_18 mar_top_15 pad_left_10"> <div tm-training-center> <div tm-pagation conf="paginationConf"></div> </div> \x3c!--班级园地--\x3e \x3c!--<div class="trainingCenter">\n      <div common-header title-header="\'知识检索\'" show-more=false link-url="\'\'"></div>\n      <div class="tmBorder">\n        <ol class="breadcrumb">\n          <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i></span> 您的当前位置:</li>\n          <li><a ui-sref="main">首页</a></li>\n          <li class="active">知识检索</li>\n        </ol>\n        <form class="form-inline formSearch">\n          <select class="form-control" ng-model="selectedType">\n            <option value="">全部</option>\n            <option ng-repeat="select in selectTypes" ng-value="select.type">{{select.name}}</option>\n          </select>\n          <div class="form-group">\n            <input ng-model="searchTitle" type="text" class="form-control"\n                   my-placeholder\n                   placeholder="请输入搜索内容">\n          </div>\n          <button type="submit" class="btn btn-primary" ng-click="search()">搜索</button>\n        </form>\n        <p ng-show="!paginationConf.totalItems" class="result">暂无数据</p>\n        <div ng-show="paginationConf.totalItems" class="mar_top_15 searchContent myTab" dw-loading="tmsearchresult">\n          <div class="perlist">\n            <div class="title_bar">\n              <div class="list8 text-center">文章名称</div>\n              <div class="list2 text-center">发布日期</div>\n            </div>\n            <div class="list" ng-repeat="newsData in newsData">\n              <div class="list8 text-left">\n                <span class="arrow"></span>\n                <a ng-if="newsData.Type==\'Article\'" ui-sref="articleDetail({ID:newsData.Id})" target="_blank">\n                  [文章：]{{newsData.Name}}\n                </a>\n                <a ng-if="newsData.Type==\'Notice\'" ui-sref="noticeDetail({ID:newsData.Id})" target="_blank">\n                  [通知：]{{newsData.Name}}\n                </a>\n                <a ng-if="newsData.Type==\'Course\'" ui-sref="courseDetails({Id:newsData.Id})" target="_blank">\n                  [课程：]{{newsData.Name}}\n                </a>\n              </div>\n              <div class="list2">{{newsData.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</div>\n            </div>\n          </div>\n          <div tm-pagation conf="paginationConf"></div>\n        </div>\n      </div>\n    </div>--\x3e </div> </div> <div tm-footer></div>'),
    t.put("components/commonHeader.html", '\x3c!--模块通用头部--\x3e <div class="com-header"> <p class="title"> <span class="text">{{titleHeader}}</span> </p> <a ng-if="showMore" class="more" ui-sref="{{linkUrl || false}}" target="_blank"></a> </div>'),
    t.put("components/expander.html", '\x3c!--分类 tree--\x3e <div class="categoryTree" dw-loading="categoryTree"> <div common-header title-header="titleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ul class="expander" id="category"> \x3c!--<li ng-repeat="list in classifyData" repeat-finish="startTree()" data-options="attributes:{treeId:{{list.Id}}}" ng-include="\'/template/expanderItem.html\'">\r\n      </li>--\x3e </ul> </div> </div>'),
    t.put("components/expanderItem.html", '<span>{{list.Name}}</span> <ul ng-if="hasNodes(list)"> <li ng-repeat="list in list.Nodes" data-options="attributes:{treeId:{{list.Id}}}" ng-include="\'/template/expanderItem.html\'"> </li> </ul>'),
    t.put("components/floatWindow.html", '\x3c!--浮动窗口--\x3e <div id="floadAD" class="floadAd"> <a id="flyclose" class="closeFloat" href="javascript:;"> <i class="glyphicon glyphicon-remove"></i> </a> <a class="item" href="javascript:;"> <img src="../qzzj/images/float_img1.5a4f98e9.png" alt=""> </a> </div>'),
    t.put("components/myTree.html", '<input type="text" class="form-control groupName" my-placeholder placeholder="请选择单位" ng-blur="verifyGroup()"> <ul class="easyui-tree" id="tt"></ul>'),
    t.put("components/tmApplyInvoice.html", '\x3c!--申请发票--\x3e <div class="applyInvoice"> <div common-header title-header="\'申请发票\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div class="description"> <ul> <li><span class="dian"></span><span>发票一经开出后，不能在修改任何信息，填写时，请仔细核对付款单位名称和发票项目。若因此造成的任何损失由用户自行承担；</span></li> <li><span class="dian"></span><span>发票邮寄费用需要到付，建议您在完成年度教育任务后在同一开具发票，避免产生多次邮寄费用；</span></li> <li><span class="dian"></span><span>由于收件地址、手机号等因素导致发票邮寄不到或在过程中丢失的，由用户自行处理，并承担相关的损失。</span></li> <li class="mar_top_10">发票领取方式：</li> <li><span class="dian"></span><span>自取（请在提出申请10个工作日内到广州市越秀区连新路171号3号楼302凭身份证领取，逾期将不再办理。）邮寄（默认安排顺丰快递以运费到付的形式寄出，若有其他邮寄要求请在发票附注提出。）</span> </li> </ul> </div> <div class="cartList"> <ul> <li class="title"> <span class="list1">操作</span> <span class="list2">编号</span> <span class="list1">订单时间</span> <span class="list2">订单详情</span> <span class="list3">订单价格</span> </li> <li class="content"> <span class="list1">操作</span> <span class="list2">79797979646464646498764</span> <span class="list1">2017-5-19</span> <span class="list2">订单详情</span> <span class="list3">￥100.00</span> </li> </ul> </div> <div class="invoiceMessage"> <div>发票及邮寄信息</div> <form class="form-inline"> <div class="form-group"> <label for="userName">用户姓名：</label> <input type="text" class="form-control" id="userName" ng-model="invoice.userName" my-placeholder placeholder="请输入用户姓名"> </div> <div class="form-group"> <label for="invoiceTitle">发票抬头：</label> <input type="text" class="form-control" id="invoiceTitle" ng-model="invoice.invoiceTitle" my-placeholder placeholder="请输入发票抬头"> </div> <div class="form-group"> <label for="money">金额：</label> <input type="text" class="form-control" id="money" ng-model="invoice.money" my-placeholder placeholder="请输入金额"> </div> <div class="radio"> <span>提取方式：</span> <label class="radio-inline"> <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 自取 </label> <label class="radio-inline"> <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 快递 </label> </div> <div class="form-group"> <label for="orderNum">订单号：</label> <input type="text" class="form-control" id="orderNum" ng-model="invoice.orderNum" disabled> </div> <div class="form-group"> <label for="phoneNum">手机号：</label> <input type="text" class="form-control" id="phoneNum" ng-model="invoice.phoneNum" my-placeholder placeholder="请输入手机号"> </div> <div class="form-group"> <label for="address">地址：</label> <input type="text" class="form-control" id="address" ng-model="invoice.address" my-placeholder placeholder="请输入地址"> </div> <div class="form-group"> <label for="postCode">邮编：</label> <input type="text" class="form-control" id="postCode" ng-model="invoice.postCode" my-placeholder placeholder="请输入邮编"> </div> <div class="form-group"> <label for="remark">备注：</label> <input type="text" class="form-control" id="remark" ng-model="invoice.remark" my-placeholder placeholder="请输入备注"> </div> <div class="submit"> <button type="submit" class="btn btn-primary">提交</button> </div> </form> </div> </div> </div>'),
    t.put("components/tmArticleCategory.html", '\x3c!--文章分类--\x3e <div class="articleCategory"> <div common-header title-header="\'文章分类\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div expander classify-data="categoryData" search="refreshList" name="\'article\'"></div> </div> </div>'),
    t.put("components/tmArticleHot.html", '\x3c!--热门文章--\x3e <div class="articleHot mar_top_15"> <div common-header title-header="\'热门文章\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div dw-loading="articleHot"> <ul class="rankingList" ng-repeat="rankingData in hotArticleData.ListData" ng-class="{\'rankListBg\':$index%2!=0}"> <li class="list2"> <span ng-if="$index<3" ng-class="{\'rankFirstBg\':$index==0,\'rankSecondBg\':$index==1,\'rankThirdBg\':$index==2}"></span> <span ng-if="$index>=3">{{$index+1}}</span> </li> <li class="list8" title="{{rankingData.Name}}"> <a target="_blank" ui-sref="articleDetail({ID:rankingData.Id})">{{rankingData.Name}}</a> </li> </ul> </div> </div> </div>'),
    t.put("components/tmArticleList.html", '\x3c!--文章列表--\x3e <div class="articleList"> <div common-header title-header="articleTitle" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active"> <span ng-show="articleListData.CategoryName">{{articleListData.CategoryName}}</span> <span ng-hide="articleListData.CategoryName">{{articleListData.TitleNav}}</span> </li> </ol> <form class="form-inline formSearch"> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入搜索关键词"> </div> <button type="submit" class="btn btn-primary" ng-click="refreshList({page:1,search:searchTitle})">搜索</button> </form> <div dw-loading="articleList" class="mar_top_20"> <table class="table" ng-show="paginationConf.totalItems"> <tr> <th class="titleName">文章名称</th> <th class="titleDate">发布日期</th> </tr> <tr ng-repeat="listData in articleListData.ListData | filter:{Name:search}"> <td class="name"> <span class="arrow"></span> <a ui-sref="articleDetail({ID:listData.Id})" title="{{listData.Name}}" target="_blank">{{listData.Name}}</a> </td> <td class="listDate">{{listData.CreateDate | dateFilter | date:\'yyyy/MM/dd-HH:mm:ss\'}}</td> </tr> </table> <div ng-show="paginationConf.totalItems" class="mar_top_5" tm-pagation conf="paginationConf"></div> <p ng-show="!paginationConf.totalItems" class="result">暂无数据</p> </div> </div> </div>'),
    t.put("components/tmBookCategory.html", '\x3c!--@*图书分类*@--\x3e <div class="bookCategory" dw-loading="bookCategory"> <div common-header title-header="\'电子书分类\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div expander classify-data="bookCategory" search="searchCategory" name="\'book\'"></div> </div> </div>'),
    t.put("components/tmBookChapter.html", '\x3c!--图书章节--\x3e <div class="bookChapter"> <div common-header title-header="\'图书章节\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder" dw-loading="bookChapter"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="library">图书馆</a></li> <li><a ui-sref="bookdetail({Id:bookId})">{{bookChapterData.BookName}}</a></li> <li class="active">图书章节</li> </ol> <div class="bookTitle"> <h2 class="titleName">{{bookChapterData.BookName}}</h2> <p>作者: &nbsp;<strong>{{bookChapterData.Author}}</strong> &nbsp;出版时间: &nbsp;{{bookChapterData.Time}}&nbsp;</p> </div> <div class="bookChapterContent"> <ul> <li ng-repeat="list in bookChapterData.ListData"><a ui-sref="bookchaptercontent({Id:list.Id})">{{list.Name}}</a> </li> </ul> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmBookChapterContent.html", '\x3c!--章节内容--\x3e <div class="bookChapterContent"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="library">图书馆</a></li> <li><a ui-sref="bookdetail({Id:articleData.BookId})">{{articleData.BookName}}</a></li> <li><a ui-sref="bookchapter({bookId:articleData.BookId})">图书章节</a></li> <li class="active">{{articleData.Name}}</li> </ol> <div class="article-detail" dw-loading="tmshowarticledetail"> <div class="article-detail-title-bar"> <p class="article-detail-title">{{articleData.Name}}</p> <p class="article-detail-info"> \x3c!--<span>发布时间：{{articleData.CreatedDate | dateFilter | date:\'yyyy-MM-dd\'}}</span>--\x3e <span>作者：{{articleData.Author || \'无\'}}</span> <span>来源：{{articleData.Source || \'无\'}}</span> \x3c!--<span>浏览次数：{{articleData.ClickCount || 0}}</span>--\x3e </p> <p class="article-detail-adjust" ng-show="articleData.Id"> <a ng-click="favoriteAdd({mainId:articleData.Id,type:articleData.Type,title:articleData.Name,remark:\'0\'},token)" ng-show="!articleData.FavoriteId">[收藏]</a> <a ng-click="favoriteDelete({id:articleData.FavoriteId},token)" ng-show="articleData.FavoriteId">[取消收藏]</a> <a href="/Content/Upload/Attachment/{{articleData.AttachmentName}}" target="_blank" ng-show="articleData.AttachmentName">[附件下载]</a> <a ng-click="print()">[打印]</a> <a ng-click="reduceFont()">[缩小字体]</a> <a ng-click="increaseFont()">[放大字体]</a> </p> </div> <div id="setFont" class="article-detail-content" ng-bind-html="articleData.Content| trustHtml"></div> <div class="article-detail-changeBar"> <p class="article-detail-changeBar-up" ng-show="articleData.UpId>0"> <a class="btn btn-primary" onclick="window.scrollTo(0,0)" ui-sref="bookchaptercontent({Id:articleData.UpId})">上一章</a> </p> <p class="article-detail-changeBar-down" ng-show="articleData.DownId>0"> <a class="btn btn-primary" onclick="window.scrollTo(0,0)" ui-sref="bookchaptercontent({Id:articleData.DownId})">下一章</a> </p> </div> </div> </div>'),
    t.put("components/tmBookDetail.html", '\x3c!--图书详情--\x3e <div class="bookDetail"> <div common-header title-header="bookContentData.Name" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="library">图书馆</a></li> <li class="active">{{bookContentData.Name}}</li> </ol> <div class="bookContent"> <img ng-src="{{bookContentData.ImagePath+\'/\'+bookContentData.Icon}}"> <div class="bookTxt"> <h4>{{bookContentData.Name?bookContentData.Name:bookContentData.BookKey}}</h4> <p class="mar_top_20">作者: &nbsp;<strong>{{bookContentData.Author}}</strong></p> <p>出版时间: &nbsp;<strong>{{bookContentData.Time}}</strong></p> <p>总点击: &nbsp;<strong>{{bookContentData.ClickCount}}</strong></p> <p>总字数: &nbsp;<strong>{{bookContentData.ByteCount}}</strong></p> <p>总鲜花: &nbsp;<strong>{{bookContentData.FlowerCount}}</strong></p> <div class="group"> <a class="btn btn-primary" ui-sref="bookchapter({bookId:bookContentData.Id})">阅读本书</a> <a class="btn btn-primary" data-toggle="modal" data-target=".notemodal">发表评论</a> <a ng-if="bookContentData.FavoriteId==0" class="btn btn-primary" ng-click="favoriteAdd({mainId:bookContentData.Id,type:\'Book\',title:bookContentData.Name,remark:\'0\'},token)">收藏</a> <a ng-if="bookContentData.FavoriteId!=0" class="btn btn-primary" ng-click="favoriteDelete({id:bookContentData.FavoriteId},token)">取消收藏</a> </div> </div> </div> \x3c!-- 图书评论 --\x3e <div class="modal fade notemodal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">图书评论</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>图书名称：</td> <td>{{bookContentData.Name}}</td> </tr> <tr> <td>评 论：</td> <td> <textarea ng-model="bookContent" cols="50" rows="5" class="form-control"></textarea> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="postComment({bookId:bookContentData.Id,content:bookContent})" type="button" class="btn btn-primary">提交 </button> </div> </div> </div> </div> <div class="bookSum"> <h3>作品简介</h3> <p class="justify" ng-bind-html="bookContentData.Content| trustHtml"></p> </div> \x3c!--评论列表--\x3e <div class="bookComment"> <h3>图书评论</h3> <ul class="comment_bord"> <li ng-repeat="list in commentData.ListData"> <div class="bookCommentLeft"> <h4>{{list.UserName}}:</h4> <p>{{list.Comment}}</p> </div> <div class="bookCommentRight pull-right"> <span>{{(paginationConf.currentPage-1)*paginationConf.itemsPerPage+$index+1}}楼</span> </div> </li> <div ng-show="paginationConf.totalItems" class="mar_top_5" tm-pagation conf="paginationConf"></div> <p ng-show="!paginationConf.totalItems" class="result">暂无评论</p> </ul> </div> </div> </div>'),
    t.put("components/tmBookGuide.html", '\x3c!--电子书引导模块(首页)--\x3e <div class="bookGuide"> <div common-header title-header="\'电子书\'" show-more="true" link-url="\'library\'"></div> <ul class="bookList" dw-loading="bookList"> <li class="pull-left" ng-repeat="list in booksData.ListData"> <a class="bookImg" ui-sref="bookdetail({Id:list.Id})" target="_blank"> <img ng-src="{{imgPath+\'/\'+list.Icon}}" err-src="images/notFound.c0814127.jpeg" alt="{{list.Name}}"> \x3c!--<img ng-src="{{null}}" err-src="images/notFound.c0814127.jpeg" alt="{{list.Name}}">--\x3e </a> <div class="content pull-left"> <h4 class="title"> <a ui-sref="bookdetail({Id:list.Id})" target="_blank">{{list.Name | wordLimit:17}}</a> </h4> <p class="desc">简介：{{list.Content|delHtmlTag | wordLimit:23}}</p> <p class="author">作者：{{list.Author}}</p> <p class="clickCount">点击数：{{list.ClickCount}}</p> </div> </li> </ul> </div>'),
    t.put("components/tmChangeUserInfo.html", '\x3c!--修改信息--\x3e <div class="changeUserInfo"> <div common-header title-header="\'修改信息\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">修改信息</li> </ol> <div class="change-user-info" dw-loading="changeUserInfo"> <form class="form-horizonta"> <div class="form-group"> <label class="col-sm-3">账号：</label> <div class="col-sm-9">{{userInfo.Account}}</div> </div> <div class="form-group"> <label class="col-sm-3">姓名：</label> <div class="col-sm-9">{{userInfo.Name}}</div> </div> <div class="form-group"> <label class="col-sm-3">性别：</label> <div class="col-sm-9"> <label class="radio-inline"> <input type="radio" name="sex" ng-model="sex" value="男" ng-checked="userInfo.Sex==1">男 </label> <label class="radio-inline"> <input type="radio" name="sex" ng-model="sex" value="女" ng-checked="userInfo.Sex==0">女 </label> </div> </div> \x3c!--<div class="form-group">\n          <label class="col-sm-3">部门：</label>\n          <div class="col-sm-9">{{userInfo.GroupName}}</div>\n        </div>--\x3e <div class="form-group" style="position: relative"> <label class="col-sm-3 control-label">主管行业：</label> <span my-tree class="myTree col-sm-9" ng-model="GroupId" group-name="GroupName" user-role="userRole"></span> </div> <div class="form-group"> <label class="col-sm-3 control-label">单位</label> <div class="col-sm-9"> <input type="text" class="form-control" name="department" ng-model="DepartmentName" placeholder="请输入单位"> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">专业序列：</label> <div class="col-sm-7"> <input class="form-control" type="text" ng-model="userBatchName" placeholder="请选择专业序列" disabled> </div> <div class="col-sm-2"> <button class="btn btn-primary" ng-click="openBatchModal()">修改</button> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">职称信息：</label> <div class="col-sm-7"> <input class="form-control" type="text" ng-model="professionalName" placeholder="请选择职称信息" disabled> </div> <div class="col-sm-2"> <button class="btn btn-primary" ng-click="openProfessionalModal()">修改</button> </div> </div> <div class="form-group"> <label class="control-label col-sm-3">学历：</label> <div class="col-sm-9"> <select name="degree" class="form-control" ng-model="Degree"> <option value="">请选择</option> <option ng-repeat="item in degreeList" ng-value="item.href">{{item.text}}</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">电话：</label> <div class="col-sm-9"> <input type="tel" ng-model="Tel" name="tel" class="form-control" my-placeholder placeholder="例：0571-88776655"> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">手机：</label> <div class="col-sm-9"> <input type="tel" ng-model="Mobile" name="mobile" class="form-control" my-placeholder placeholder="例：12345678901"> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">邮箱：</label> <div class="col-sm-9"> <input type="tel" ng-model="Email" name="email" class="form-control" my-placeholder placeholder="例：example@email.com"> </div> </div> <div class="form-group foot_btn_group"> <div class="col-sm-offset-2 col-sm-9"> <button class="btn btn-primary" ng-click="changeUser()"> 提交</button> </div> </div> </form> </div> </div> <div class="modal fade professionalModal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">修改职称信息</h4> </div> <div class="modal-body"> <ul> <li class="list"> <div class="list3">专业序列</div> <div class="list7"> <select class="form-control" name="userProfessional" ng-model="currentLevel1"> <option value="">请选择</option> <option ng-repeat="item in listLevel1" value="{{item.Id}}" ng-selected="item.Id==currentLevel1"> {{item.Name}} </option> </select> </div> </li> <li class="list"> <div class="list3">职称级别</div> <div class="list7"> <select class="form-control" name="userProfessional" ng-model="currentLevel2"> <option value="">请选择</option> <option ng-repeat="item in listLevel2" value="{{item.Id}}" ng-selected="item.Id==currentLevel2"> {{item.Name}} </option> </select> </div> </li> <li class="list"> <div class="list3">职称</div> <div class="list7"> <select class="form-control" name="userProfessional" ng-model="currentLevel3"> <option value="">请选择</option> <option ng-repeat="item in listLevel3" value="{{item.Id}}" ng-selected="item.Id==currentLevel3"> {{item.Name}} </option> </select> </div> </li> </ul> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" ng-click="changeUserProfessional()">修改</button> <button type="button" class="btn btn-primary" ng-click="closeProfessionalModal()">关闭</button> </div> </div> </div> </div> <div class="modal fade batchModal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">修改专业序列</h4> </div> <div class="modal-body"> <ul> <li class="list"> <div class="list3">专业序列</div> <div class="list7"> <select class="form-control" name="userBatch" ng-model="userBatch"> <option value="">请选择</option> <option ng-repeat="item in batchData" value="{{item.Id}}" ng-selected="item.Id==userBatch"> {{item.Name}} </option> </select> </div> </li> </ul> <div class="text-center highlight-red"> 当专业序列被修改后您的原专业序列专业科目学时和行业公需科目学时将被清零，一般公需科目学时保留不变！ </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" ng-click="changeUserBatch()">修改</button> <button type="button" class="btn btn-primary" ng-click="closeBatchModal()">关闭</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmChart.html", '\x3c!--用户素质维度--\x3e <div class="slideBar"> <div class="hoverBtn"> <span>用</span> <span>户</span> <span>素</span> <span>质</span> <span>维</span> <span>度</span> <span><i class="hoverArrow fa fa-lg fa-angle-double-right" aria-hidden="true"></i></span> </div> <div class="chart"> \x3c!-- 为 ECharts 准备一个具备大小（宽高）的 DOM --\x3e <div id="main" style="width: 400px;height:450px"></div> </div> <p class="chartBottom">注：根据学员素质自动生成</p> </div>'),
    t.put("components/tmCivilServiceTrainingLink.html", '\x3c!--公务员培训--\x3e <div class="civilServiceTrainingLink"> <div class="com-header com-header-blue"> <h4 class="pull-left">公务员培训</h4> <a ui-sref="csTrainingNews" class="pull-right" target="_blank">更多&nbsp;&nbsp;+</a> </div> <div class="civil-body" dw-loading="civilServiceTrainingLink"> <ul> <li ng-repeat="linkDate in civilServiceTrainingLink.ListData"> <a ui-sref="articleDetail({ID:linkDate.Id})" title="{{linkDate.Name}}" target="_blank"><span class="dian"></span><span class="content">{{linkDate.Name}}</span></a></li> </ul> </div> </div>'),
    t.put("components/tmClassCourse.html", '\x3c!--班级课程--\x3e <div class="trainingCenter"> <div common-header title-header="Data.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{Data.TrainingName}}</a></li> <li class="active">{{Data.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="classCourse"> <h2 class="commonTitle">{{Data.TitleNav}}（{{couseTypeText}}）</h2> <div class="myTab"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <p class="list4">课程名称</p> <p class="list3">进度</p> <p class="list2">播放</p> </div> <div class="list" ng-repeat="list in Data.ListData"> <div class="list4 ellipsis"> <a ui-sref="courseDetails({Id:list.Id})" target="_blank" title="{{list.Name}}">{{list.Name}}</a> </div> <div class="list3"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{list.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':list.BrowseScore+\'%\'};"> {{list.BrowseScore.toFixed(1)}}% </div> </div> </div> <div class="list2"><a ui-sref="play({Id:list.Id})" target="_blank">点击进入</a></div> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmClassDetail.html", '\x3c!--班级详情--\x3e <div class="classDetail"> <div common-header title-header="\'班级详情\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li class="active">班级详情</li> </ol> <div class="classDes" dw-loading="classDetail"> <div class="title">{{classDetailData.Model.Name}}</div> <div class="publish"> <span>我要发表：</span> <a ui-sref="classTopicAdd({Id:Id})" target="_blank"> <img src="images/btn_article_ht.105ae805.png"> </a> <a ui-sref="classPaperAdd({Id:Id})" target="_blank"> <img src="images/btn_article_lw.21e7caf2.png"> </a> <a ui-sref="photoAlbumAdd({Id:Id})" target="_blank"> <img src="images/btn_article_xc.4b82c398.png"> </a> <a href="" target="_blank" ng-show="classDetailData.Model.PollId.length>1"> <img src="images/btn_class_wj.dbd44c24.png"> </a> <a href="" target="_blank" ng-show="classDetailData.Model.PollId.length==1"> <img src="images/btn_class_wj.dbd44c24.png"> </a> </div> </div> <div class="borderTopBold"> <div class="commonTitle">班级简介</div> <div class="tab-contentinfo contentclassinfo"> {{classDetailData.Model.Description}} </div> </div> <div class="myTab"> <ul class="nav nav-tabs" ng-init="vm.activeTab=1"> <li ng-class="{active: vm.activeTab == 1}"><a href="javascript:;" ng-click="vm.activeTab = 1">班级公告</a></li> <li ng-class="{active: vm.activeTab == 2}"><a href="javascript:;" ng-click="vm.activeTab = 2">必修课程</a></li> <li ng-class="{active: vm.activeTab == 3}"><a href="javascript:;" ng-click="vm.activeTab = 3">选修课程</a></li> <li ng-class="{active: vm.activeTab == 4}"><a href="javascript:;" ng-click="vm.activeTab = 4">班级考试</a></li> <li ng-class="{active: vm.activeTab == 5}"><a href="javascript:;" ng-click="vm.activeTab = 5">班级话题</a></li> <li ng-class="{active: vm.activeTab == 6}"><a href="javascript:;" ng-click="vm.activeTab = 6">班级论文</a></li> <li ng-class="{active: vm.activeTab == 7}"><a href="javascript:;" ng-click="vm.activeTab = 7">班级相册</a></li> </ul> <div class="tab-content"> <div class="tab-panel perlist" ng-show="vm.activeTab == 1"> <div class="title_bar"> <span class="list4">公告</span> <span class="list2">时间</span> <span class="list2">作者</span> </div> <div class="list" ng-repeat="list in classDetailData.Model.ClassNoticeList"> <div class="list4 ellipsis"> <a title="{{list.Name}}" ui-sref="classArticleDetail({Id:list.Id})" target="_blank">{{list.Name}}</a> </div> <div class="list2">{{list.CreatedDate | dateFilter | date:\'yyyy-MM-dd\'}}</div> <div class="list2">{{list.Author}}</div> </div> <div ng-if="classDetailData.Model.ClassNoticeList.length>0" class="classMore"><a ui-sref="classNotice({Id:Id})">更多...</a></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 2"> <div class="title_bar"> <span class="list4">课程名称</span> <span class="list2">进度</span> <span class="list2">播放</span> </div> <div class="list" ng-repeat="list in classDetailData.Model.ClassRequiredCourseList"> <div class="list4 ellipsis" ng-show="!list.Name">暂无名称</div> <div class="list4 ellipsis" ng-show="list.Name" title="{{list.Name}}">{{list.Name}}</div> <div class="list2"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{list.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':list.BrowseScore+\'%\'};"> {{list.BrowseScore.toFixed(1)}}% </div> </div> </div> <div class="list2"><a ui-sref="play({Id:list.Id})" target="_blank">点击进入</a></div> </div> <div ng-if="classDetailData.Model.ClassRequiredCourseList.length>0" class="classMore"><a ui-sref="classCourse({Id:Id,Type:\'required\'})">更多...</a></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 3"> <div class="title_bar"> <span class="list4">课程名称</span> <span class="list2">进度</span> <span class="list2">播放</span> </div> <div class="list" ng-repeat="list in classDetailData.Model.ClassElectiveCourseList"> <div class="list4 ellipsis" ng-show="!list.Name">暂无名称</div> <div class="list4 ellipsis" ng-show="list.Name" title="{{list.Name}}">{{list.Name}}</div> <div class="list2"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{list.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':list.BrowseScore+\'%\'};"> {{list.BrowseScore.toFixed(1)}}% </div> </div> </div> <div class="list2"><a ui-sref="play({Id:list.Id})" target="_blank">点击进入</a></div> </div> <div ng-if="classDetailData.Model.ClassElectiveCourseList.length>0" class="classMore"><a ui-sref="classCourse({Id:Id,Type:\'electives\'})">更多...</a></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 4"> <div class="title_bar"> <span class="list4">考试名称</span> <span class="list2">考试学时</span> <span class="list2">总分</span> <span class="list2">参加测试</span> </div> <div class="list" ng-repeat="list in classDetailData.Model.ClassExamList"> <div class="list4 ellipsis" title="{{list.Name}}">{{list.Name}}</div> <div class="list2">{{list.Credit}}</div> <div class="list2">{{list.TotalScore}}</div> <div class="list2"><a ng-click="havTest(list.Id)" target="_blank">参加测试</a></div> </div> <div ng-if="classDetailData.Model.ClassExamList.length>0" class="classMore"><a ui-sref="classExam({Id:Id})">更多...</a> </div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 5"> <div class="title_bar"> <span class="list4">话题</span> <span class="list2">话题分类</span> <span class="list2">时间</span> <span class="list2">作者</span> </div> <div class="list" ng-repeat="list in classDetailData.Model.ClassTopicList"> <div class="list4 ellipsis"> <a title="{{list.Name}}" ui-sref="classArticleDetail({Id:list.Id})" target="_blank">{{list.Name}}</a> </div> <div class="list2">{{list.Type}}</div> <div class="list2">{{list.CreatedDate |dateFilter |date:\'yyyy-MM-dd\' }}</div> <div class="list2">{{list.Author}}</div> </div> <div ng-if="classDetailData.Model.ClassTopicList.length>0" class="classMore"><a ui-sref="classTopicList({Id:Id})">更多...</a></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 6"> <div class="title_bar"> <span class="list4">论文标题</span> <span class="list2">作者</span> <span class="list2">创建时间</span> </div> <div class="list" ng-repeat="list in classDetailData.Model.ClassPaperList"> <div class="list4 ellipsis"> <a title="{{list.Name}}" ui-sref="classArticleDetail({Id:list.Id})" target="_blank">{{list.Name}}</a> </div> <div class="list2">{{list.Author}}</div> <div class="list2">{{list.CreatedDate | dateFilter | date:\'yyyy-MM-dd\'}}</div> </div> <div ng-if="classDetailData.Model.ClassPaperList.length>0" class="classMore"><a ui-sref="classPaperList({Id:Id})">更多...</a></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 7"> <ul class="clearfix"> <li class="list3 photo" ng-repeat="list in classDetailData.Model.ClassPhotoList"> <a ui-sref="photoPreview({AlbumId:list.Id,TrainingId:classDetailData.TrainingId})" target="_blank"> <img ng-src="{{ImgPath+\'/\'+list.Img}}" err-src="images/notFound.c0814127.jpeg"> <p class="text-center">{{list.Name}}</p> </a> </li> </ul> <div ng-if="classDetailData.Model.ClassPhotoList.length>0" class="classMore"><a ui-sref="photoAlbumList({Id:Id})">更多...</a></div> </div> </div> </div> <div tm-class-interaction></div> </div> </div>'),
    t.put("components/tmClassExam.html", '\x3c!--班级考试--\x3e <div class="trainingCenter"> <div common-header title-header="Data.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{Data.TrainingName}}</a></li> <li class="active">{{Data.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="classExam"> <h2 class="commonTitle">{{Data.TitleNav}}</h2> <div class="myTab"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list4">考试名称</span> <span class="list2">考试学时</span> <span class="list2">总分</span> <span class="list2">参加测试</span> </div> <div class="list" ng-repeat="list in Data.ListData"> <span class="list4 ellipsis">{{list.Name}}</span> <span class="list2">{{list.Credit}}</span> <span class="list2">{{list.TotalScore}}</span> <span class="list2"><a ng-click="havTest(list.Id)" target="_blank">参加测试</a></span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmClassGarden.html", '\x3c!--班级园地模块（首页）--\x3e <div class="classGarden"> <div class="class_type_list"> <div class="title"> <span>高研班培训</span> </div> <ul> <li ng-repeat="list in trainingClassType" ng-class="{active: classCategoryId == list.id}" ng-click="getClassList(list.id)"> {{list.text}} </li> </ul> </div> <div class="class_garden_list"> <ul> <li ng-repeat="list in classListData" ng-if="$index<6"> <a title="{{list.text}}" ui-sref="gybClassList({Id: list.id, title: list.text})" target="_blank"> <img ng-src="{{\'images/main_class_img_\'+($index+1)+\'.png\'}}" err-src="images/notCourse.976a881b.png" alt=""> </a> <p class="text-center ellipsis"> <a title="{{list.text}}" ui-sref="gybClassList({Id: list.id, title: list.text})" target="_blank">{{list.text}}</a> </p> </li> </ul> <div ng-show="showNoClass" class="result">暂无培训班</div> </div> </div>'),
    t.put("components/tmClassGarden2.html", '\x3c!--班级园地模块（首页）--\x3e <div class="classGarden2"> <div class="class_type_list"> <div class="title"> <span>高研班培训</span> </div> <ul> <li ng-repeat="list in trainingClassType2" ng-class="{active: classCategoryId2 == list.id}" ng-click="getClassList(list.id)"> {{list.text}} </li> </ul> </div> <div class="class_garden_list"> <ul> <li ng-repeat="list in classListData2"> <a title="{{list.Name}}" target="_blank"> <img ng-src="images/main_class_img_1.4a760bba.png" err-src="images/notCourse.976a881b.png" alt=""> </a> <p> <a title="{{list.Name}}" target="_blank">{{list.Name}}</a> </p> </li> </ul> <div ng-show="showNoClass" class="result">暂无培训班</div> </div> </div>'),
    t.put("components/tmClassInteraction.html", '\x3c!--班级说说--\x3e <div class="tmClassInteraction"> <p class="title"><i class="fa fa-pencil-square" aria-hidden="true"></i> 互动空间</p> <form class="classForm"> <div class="form-group"> <textarea class="form-control" ng-change="inputChange()" ng-model="description" cols="50" rows="4" type="text" my-placeholder placeholder="你正在干什么？"></textarea> </div> <div class="form-group text-right"> \x3c!--<input class="upLoadFile" type="file" name="ImageToUpload" id="ImageToUpload"\r\n             multiple="multiple" onchange="fileSelected(\'ImageToUpload\', \'ImageTraining\', 1);">--\x3e <span class="textLimit">还能输入<span class="textNum" ng-style="{color:(textNum<0)&&\'red\'}">{{textNum}}</span>字</span> <button type="submit" class="btn btn-primary" ng-click="addTrainingReply(description,Id,0)">发表</button> \x3c!--<div id="ImageMessage" style="display:none;padding: 10px;height: 34px"></div>\r\n      <input type="hidden" id="hidValueImage" name="ImgUrl"/>--\x3e </div> </form> <ul class="classInteractionList"> <li class="classInteractionItem" ng-repeat="list in trainingSayList"> <div class="outer"> <div class="top"><a class="name">{{list.UserName}}</a> 发表了说说：{{list.Content}}</div> <div class="bottom"> <span>{{list.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</span> &nbsp;| &nbsp; <span ng-if="list.Dflag"><a ng-click="delTrainingSay(list.Id)">删除</a> &nbsp;| &nbsp;</span> <a ng-click="commentClick($event)">评论({{list.List.length}})</a> </div> <div class="comment"> <div class="commentList" ng-repeat="list2 in list.List" ng-style="{display:($index>=2)&&\'none\'}"> <p> <a class="pull-left">{{list2.UserName}}：</a> <span>{{list2.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</span> &nbsp;| &nbsp; <span ng-if="list2.Dflag"><a ng-click="delTrainingSay(list2.Id)">删除</a> &nbsp;| &nbsp;</span> <a ng-click="replyClick($event)">回复</a> </p> <span class="ir-content"><span class="replyUserName">@{{list2.ReplyUserName}}：</span>{{list2.Content}}</span> <form class="replyForm"> <div class="form-group"> <textarea class="form-control" ng-model="$parent.replyContent" cols="30" rows="2" type="text" my-placeholder placeholder="我也说一句..."></textarea> <p class="text-right" style="margin-top: 10px"> <button type="submit" class="btn btn-primary" ng-click="addTrainingReply($parent.replyContent,list2.MainId,list2.Id)">发表 </button> </p> </div> </form> </div> <p class="foldUnfold" ng-show="list.List.length>2"> <span>剩余{{list.List.length-2}}条评论</span> <a ng-click="foldUnfold($event)">点击查看</a> </p> </div> <form class="commentForm"> <div class="form-group"> <textarea class="form-control" ng-model="$parent.descContent" cols="50" rows="4" type="text" my-placeholder placeholder="我也说一句..."></textarea> <p class="text-right" style="margin-top: 10px"> <button type="submit" class="btn btn-primary" ng-click="addTrainingReply($parent.descContent,list.Id,list.Id)">发表 </button> </p> </div> </form> </div> </li> </ul> <div tm-pagation conf="paginationConf"></div> </div>'),
    t.put("components/tmClassList.html", '\x3c!--班级列表--\x3e <div class="classList"> <div common-header title-header="classListData.Nav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{classListData.Nav}}</li> </ol> <form class="form-inline formSearch"> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入要搜索的班级"> </div> <button type="submit" class="btn btn-primary" ng-click="getClassList({\'title\':searchTitle})">搜索</button> </form> <div class="myTab" dw-loading="trainingCenter"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list4">培训班名称</span> <span class="list1">班级分数</span> <span class="list2-5">开班日期</span> <span class="list1-5">状态</span> <span class="list1">活跃度</span> </div> <div class="list" ng-repeat="classList in classListData.ListData"> <span class="list4 ellipsis" title="{{classList.Name}}"><a ng-click="checkUserClass(classList.Id)">{{classList.Name}}</a></span> <span class="list1">{{classList.Score}}</span> <span class="list2-5">{{classList.StartTime | dateFilter | date:\'yyyy-MM-dd\'}}~{{classList.EndTime | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span class="list1-5" ng-if="!classList.ApplyStatus"><a ng-click="addClass(classList.Id)">点击报名</a></span> <span class="list1-5" ng-if="classList.ApplyStatus">{{JudgeStatus(classList.ApplyStatus)}}</span> <span class="list1">{{classList.ArticleCount}}</span> </div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmClassMy.html", '\x3c!--班级展示模块--\x3e <div class="classMy mar_top_20"> <div common-header title-header="classMyData.TitleNav" show-more="true" link-url="classUrl"></div> <div class="tmBorder"> <div class="myClass" dw-loading="classMy"> <div class="list listTitle"> <span class="list5">班级名称</span> <span class="list5">学员人数</span> </div> <div class="list" title="{{classList.Name}}" ng-repeat="classList in classMyData.ListData"> <span class="list5"><a ui-sref="classDetail({Id:classList.Id})">{{classList.Name}}</a></span> <span class="list5">{{classList.CurrentUser}}</span> </div> </div> </div> </div>'),
    t.put("components/tmClassNavigation.html", '\x3c!--班级导航--\x3e <div class="classNavigation"> <div common-header title-header="\'班级导航\'" show-more="false" link-url="\'\'"></div> <ul class="classdh tmBorder"> <li><span class="dian1"></span><a ui-sref="classDetail({Id:Id})">班级首页</a></li> <li><span class="dian1"></span><a ui-sref="classPlan({Id:Id})">教学计划</a></li> <li><span class="dian1"></span><a ui-sref="classStudent({Id:Id})">同学名录</a></li> <li><span class="dian1"></span><a ui-sref="classPaperList({Id:Id})">班级论文</a></li> <li><span class="dian1"></span><a ui-sref="photoAlbumList({Id:Id})">班级相册</a></li> <li><span class="dian1"></span><a ui-sref="classTopicList({Id:Id})">班级话题</a></li> <li><span class="dian1"></span><a ui-sref="classNotice({Id:Id})">班级公告</a></li> <li><span class="dian1"></span><a ui-sref="classCourse({Id:Id,Type:\'required\'})">必修课程</a></li> <li><span class="dian1"></span><a ui-sref="classCourse({Id:Id,Type:\'electives\'})">选修课程</a></li> <li><span class="dian1"></span><a ui-sref="classExam({Id:Id})">班级考试</a></li> </ul> </div>'),
    t.put("components/tmClassNotice.html", '\x3c!--班级公告--\x3e <div class="trainingCenter"> <div common-header title-header="Data.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{Data.TrainingName}}</a></li> <li class="active">{{Data.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="classNotice"> <h2 class="commonTitle">{{Data.TitleNav}}</h2> <div class="myTab"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list4">公告</span> <span class="list2">时间</span> <span class="list2">作者</span> </div> <div class="list" ng-repeat="list in Data.ListData"> <span class="list4"><a ui-sref="classArticleDetail({Id:list.Id})" target="_blank">{{list.Name}}</a></span> <span class="list2">{{list.CreatedDate| dateFilter | date:"yyyy-MM-dd"}}</span> <span class="list2">{{list.Author}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmClassPaperList.html", '\x3c!--我的论文--\x3e <div class="trainingCenter"> <div common-header title-header="classPaperListData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{classPaperListData.TrainingName}}</a></li> <li class="active">{{classPaperListData.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="classPaperList"> <h2 class="commonTitle">{{classPaperListData.TitleNav}}</h2> <div class="myTab"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list4">论文标题</span> <span class="list2">作者</span> <span class="list2">发布时间</span> </div> <div class="list" ng-repeat="list in classPaperListData.ListData"> <span class="list4"> <a ui-sref="classArticleDetail({Id:list.Id})" target="_blank">{{list.Name}}</a> </span> <span class="list2" ng-if="list.Author">{{list.Author}}</span> <span class="list2" ng-if="!list.Author">暂无数据</span> <span class="list2">{{list.CreatedDate |dateFilter | date:\'yyyy-MM-dd\'}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmClassPlan.html", '\x3c!--教学计划--\x3e <div class="trainingCenter"> <div common-header title-header="\'教学计划\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{classPlanData.TrainingName}}</a></li> <li class="active">教学计划</li> </ol> <div class="borderTopBold" dw-loading="classPlan"> <h2 class="commonTitle">教学计划</h2> <div class="justify" ng-bind-html="classPlanData.TeachingPlan | trustHtml"></div> </div> </div> </div>'),
    t.put("components/tmClassStudent.html", '\x3c!--同学名录--\x3e <div class="trainingCenter"> <div common-header title-header="\'同学名录\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{classStudentData.TrainingName}}</a></li> <li class="active">同学名录</li> </ol> <div class="borderTopBold" dw-loading="classStudent"> <h2 class="commonTitle">同学名录</h2> <div class="myTab"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="list"> <span class="list4">总报名数：{{classStudentData.Apply}}</span> <span class="list4">审核通过：{{classStudentData.Pass}}</span> </div> <div class="list"> <span class="list4">通过审核名单：</span> </div> <div class="title_bar"> <span class="list3">姓名</span> <span class="list3">电话</span> <span class="list3">单位</span> </div> <div class="list" ng-repeat="list in classStudentData.ListData"> <span class="list3">{{list.UserName}}</span> <span class="list3" ng-if="list.Tel">{{list.Tel}}</span> <span class="list3" ng-if="!list.Tel">暂无电话</span> <span class="list3">{{list.GroupName}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmClassTopicList.html", '\x3c!--班级话题--\x3e <div class="trainingCenter"> <div common-header title-header="Data.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{Data.TrainingName}}</a></li> <li class="active">{{Data.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="classTopicList"> <h2 class="commonTitle">{{Data.TitleNav}}</h2> <div class="myTab"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list4">话题名称</span> <span class="list2">话题分类</span> <span class="list2">时间</span> <span class="list2">作者</span> </div> <div class="list" ng-repeat="list in Data.ListData"> <span class="list4"><a ui-sref="classArticleDetail({Id:list.Id})" target="_blank">{{list.Name}}</a></span> <span class="list2">{{list.Type}}</span> <span class="list2">{{list.CreatedDate |dateFilter | date:\'yyyy-MM-dd\'}}</span> <span class="list2">{{list.Author}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmClassifySearch.html", '<div class="classifySearch"> <div class="container_24"> <form class="form-inline"> <div class="form-group"> <select class="form-control" ng-init="selectedName = classify[0].type" ng-model="selectedName" ng-options="x.type as x.name for x in classify" ng-change="judgement(selectedName)"> </select> </div> <div class="form-group"> <select ng-show="showCourseTypeName" class="form-control" ng-init="courseTypeName = courseType[0].type" ng-model="courseTypeName" ng-options="x.type as x.name for x in courseType"> </select> </div> <div class="form-group"> <input my-placeholder ng-model="searchTitle" type="text" class="form-control searchText" placeholder="请输入要搜索的关键字"> </div> <button type="submit" class="btn btn-primary" ng-click="searchGlobal()">搜索</button> <p class="tody">欢迎来到海南省干部在线学习中心，今天是{{tody}}</p> </form> </div> </div> <style>.classifySearch .form-group .searchText {\r\n    width: 300px;\r\n  }\r\n\r\n  .classifySearch .tody {\r\n    display: inline-block;\r\n  }</style>'),
    t.put("components/tmCollegeInfo.html", '\x3c!--学院概况--\x3e <div class="collegeInfo"> <div common-header title-header="\'平台介绍\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">平台介绍</li> </ol> <div class="myTab"> <ul class="nav nav-tabs" ng-init="vm.activeTab=1"> <li ng-repeat="list in collegeInfoData.ListData" ng-class="{active: vm.activeTab == $index+1}"><a ng-click="vm.activeTab = $index+1;">{{list.Name}}</a></li> </ul> <div class="tab-content collegeContent" dw-loading="collegeInfo"> <div ng-repeat="list2 in collegeInfoData.ListData" class="tab-panel perlist" ng-show="vm.activeTab == $index+1"> <p class="justify" ng-bind-html="list2.Content| trustHtml"></p> </div> </div> </div> </div> </div>'),
    t.put("components/tmCourseCenter.html", '\x3c!--课程中心--\x3e <div class="courseCenter"> <div class="courseLink"> <div class="title"> <span>课程中心</span> </div> <ul> <li class="course_category" ng-class="{active: channelId == courseName.id}" ng-repeat="courseName in courselassification" ng-click="searchCourseList(courseName.id)" repeat-finish="renderFinish()"> {{courseName.text}} </li> </ul> </div> <div class="courseList" dw-loading="courseList"> <ul class="clearfix"> <li ng-repeat="courseCenterData in courseCenterData"> <a ui-sref="courseDetails({Id:courseCenterData.Id})" title="{{courseCenterData.Name}}" target="_blank"> <img ng-src="{{imageCourse+\'/\'+courseCenterData.Img}}" err-src="images/notCourse.976a881b.png" alt=""> </a> <p> <a ui-sref="courseDetails({Id:courseCenterData.Id})" title="{{courseCenterData.Name}}" target="_blank">{{courseCenterData.Name}}</a> </p> </li> </ul> <p ng-show="showNoCourse" class="result">暂无课程</p> </div> </div>'),
    t.put("components/tmCourseDetails.html", '\x3c!--@*课程详情*@--\x3e <div class="courseDetails"> <div common-header title-header="\'课程详情\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="courseCenter">课程中心</a></li> <li class="active">{{courseDetailsData.CourseModel.Name}}</li> </ol> <div class="long cur_center" dw-loading="courseDetails"> <div class="commonTitle">课程详情</div> <div class="content cur_detail"> <table class="table table-bordered"> <tbody> <tr> <td class="listtb1"> <span>课程名称：</span> </td> <td class="listtb2 cur_title"> <strong>{{courseDetailsData.CourseModel.Name}} &nbsp;&nbsp;&nbsp;</strong> <a ng-if="courseDetailsData.CourseModel.FavoriteId==0" ng-click="favoriteAdd({mainId:courseDetailsData.CourseModel.Id,type:\'Course\',title:courseDetailsData.CourseModel.Name,remark:\'0\'},token);" class="red favoriteadd"><span class="glyphicon glyphicon-heart" style="font-size: 15px" aria-hidden="true"></span> &nbsp;收藏</a> <a ng-if="courseDetailsData.CourseModel.FavoriteId!=0" ng-click="favoriteDelete({id:courseDetailsData.CourseModel.FavoriteId},token);" class="red favoritedel"><span class="glyphicon glyphicon-heart" style="font-size: 15px" aria-hidden="true"></span> &nbsp;取消收藏</a> </td> <td class="listtb3"> <span>学员评分：</span> </td> <td class="listtb4 starGroup"> <span class="star" style="background-position-x: -{{courseDetailsData.CourseModel.StudentGrade*2*121}}px"></span>{{courseDetailsData.CourseModel.StudentGrade.toFixed(1)}} </td> </tr> <tr> <td class="listtb1"> <span>课程分类：</span> </td> <td class="listtb2"> <a ui-sref="courseCenter({channelId:courseDetailsData.CourseModel.ChannelId})">{{courseDetailsData.CourseModel.ChannelName}}</a> </td> <td class="listtb3"> <span>学员评论：</span> </td> <td class="listtb4"><span>已有<span>{{courseDetailsData.Count}}</span>条评论</span></td> </tr> <tr> <td class="listtb1"> <span>课程教师：</span> </td> <td class="listtb2"> <span>{{courseDetailsData.CourseModel.Teacher}}</span> </td> <td class="listtb3"> <span>课程学时：</span> </td> <td class="listtb4"><span>{{courseDetailsData.CourseModel.Credit}}</span> </td> </tr> <tr> <td class="listtb1"> <span>时长：</span> </td> <td class="listtb2"> <span>{{courseDetailsData.CourseModel.Duration}}</span> </td> <td class="listtb3"> \x3c!--<span>参加测试：</span>--\x3e </td> <td class="listtb4"> \x3c!--<a ng-if="courseDetailsData.CourseModel.ExamId!=0"\n                 ng-click="havTest(courseDetailsData.CourseModel.ExamId)" class="highlight">参加测试</a>\n              <span ng-if="courseDetailsData.CourseModel.ExamId==0" class="black"\n                    ng-if="courseDetailsData.CourseModel.ExamId">无</span>--\x3e </td> </tr> <tr> <td class="listtb1"> <span>进度：</span> </td> <td class="listtb2"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{courseDetailsData.CourseModel.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':courseDetailsData.CourseModel.BrowseScore+\'%\'};"> {{courseDetailsData.CourseModel.BrowseScore>0?courseDetailsData.CourseModel.BrowseScore.toFixed(1):0.0}}% </div> </div> </td> <td class="listtb3"> <span>播放：</span> </td> <td class="listtb4 cur_title"> <a ng-if="courseDetailsData.CourseModel.BrowseScore>=0" ui-sref="play({Id:courseDetailsData.CourseModel.Id})" target="_blank"> <span class="glyphicon glyphicon-play-circle" style="font-size: 15px" aria-hidden="true"></span> <span>点击播放</span> </a> \x3c!--<a ng-if="courseDetailsData.CourseModel.BrowseScore < 0"\n                 ng-click="selectClass(courseDetailsData.CourseModel.Id);" class="favoritedel">--\x3e <a ng-if="courseDetailsData.CourseModel.BrowseScore < 0" ui-sref="play({Id:courseDetailsData.CourseModel.Id})" class="favoritedel"> <span class="fa fa-play-circle" style="font-size: 15px" aria-hidden="true"></span> <span>选课并播放</span> </a> \x3c!--<a ng-if="courseDetailsData.CourseModel.BrowseScore < 0" ui-sref="tryplay({Id:courseDetailsData.CourseModel.Id})" target="_blank">\n                <span class="glyphicon glyphicon-play-circle" style="font-size: 15px" aria-hidden="true"></span>\n                <span>试看</span>\n              </a>--\x3e </td> </tr> <tr> <td class="listtb1"> <span>课程简介：</span> </td> <td colspan="3" class="listtb5"> <div class="curinfo"> <p ng-if="courseDetailsData.CourseModel.Description">{{courseDetailsData.CourseModel.Description}}</p> <p ng-if="!courseDetailsData.CourseModel.Description">无</p> </div> </td> </tr> <tr> <td class="listtb1"> <span>课程节点:</span> </td> <td colspan="3" class="listtb5"> <div ng-if="courseDetailsData.CourseModel.Standards==\'Mp4\'&&courseDetailsData.CourseModel.BrowseScore<100"> 未学时间点：<span class="highlight">{{courseDetailsData.CourseModel.Remainder}}</span> 分钟 </div> <div ng-if="courseDetailsData.CourseModel.Standards==\'JYAicc\'&&courseDetailsData.CourseModel.BrowseScore<100" class="jiedian"> <div class="bar"><span class="number">节点编号</span><span class="name">节点名称</span><span class="tishi">（注：<span class="glyphicon glyphicon-ok" style="font-size: 15px;color: #13cb00" aria-hidden="true"></span> 为已学，<span class="glyphicon glyphicon-ok" style="font-size: 15px;color: #c5c5c5" aria-hidden="true"></span> 为未学）</span> </div> <div class="jdcontext"> <ul class="clearfix"> <li ng-repeat="nodeList in courseDetailsData.ListData"> <p ng-hide="nodeList.IsFinish"> <span class="number">{{nodeList.Code}}</span> <span class="name">{{nodeList.Name}} </span> <span class="glyphicon glyphicon-ok pull-right" style="font-size: 15px;color: #c5c5c5" aria-hidden="true"></span> </p> <p ng-show="nodeList.IsFinish"> <span class="number">{{nodeList.Code}}</span> <span class="name">{{nodeList.Name}} </span> <span class="glyphicon glyphicon-ok pull-right" style="font-size: 15px;color: #13cb00" aria-hidden="true"></span> </p> </li> </ul> </div> </div> <div ng-if="courseDetailsData.CourseModel.BrowseScore>=100" class="highlight"> 本课程已学完 </div> </td> </tr> </tbody> </table> </div> <div class="courseComment"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">课程评论</h3> </div> <div class="panel-body"> <table class="table"> <tbody ng-repeat="commentList in resultComment.ListData" border="0"> <tr> <td class="userImg"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB+FBMVEUAAADe3t7e3t7e3t7e3t7f39/e3t7f39/e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7f3t5pwfvA2el9yvxsw/tkv/vp6eno6Ojl5eXe3t6R0fvg396k2fzi4uLf399wxPtevft8yfyKz/zk39ze3t7j39ze3t622fCo3P7f39/e3t6h2P3a4OPe3t7e3t7e3t7/4sIeHh5fvfv/4sDp6elavPzd3t8RERIbGxvl4dxcvfwZGRr/7swXFxcRExXk5OTf3+AVFRVZvPzj4N7/6cdXu/3/48Pg4ODh397+4sQyMjIlJCOw0+vi4uLx49TU1NT/5cWZmZmgj3xQUFAsKym51+rm5ubp4dnt4tb2483/68nExMTly6/TvKKgoKBsbG05OTlwxf2XzvGfz++j0O6o0OvD2enY2Nj96ND/8s/0487Ozs785Mj/5MC5uLfs0bTDsJiQkJCyoIurmYWFhYWCgYF5enpkW1FZUEdGRkYhISCMzfltwvlmv/h1xPeBx/Sbz/KIxuzQ2+OmzeLl4d7159X25NHo4NDa2s704sv34sro3cnIyMj638D23r/427vCvbevr6/fyazgx6uoqKjNuJ6UlJSTk5O+qI+MjIyXiHeHfG1jY2NaWlpEPzpBPTg8ODQyMC0ICgwJCguXBa2lAAAAM3RSTlMAlwsGHN6yr+uKPiT37OLOfGBd6Aj7++3t7ezizbOuKSL59O/t072ioZ+Vk4h7e21XQDIPSIryAAAC1klEQVQ4y3WVVXviQBiFg7fU3WXd9SskISHBC6VA0VJ32bq3W1t3d3f7mzsREgL0vWAu5n3OmZlnMmAK1JfOGxob6usbGg3njJXYQVw+rSOI2aH38Xj8zWKY0OW35NQKTh4ioqPfx0Osg3LQye71KHFYpc32yvKIxe2g3WGnTRy0mwp+dDoryjI0jcrVOxqkWFMadsePaC+oNIpN6F3EF9ZuyoAaH+oFvTotTw/EJ9SZhSP43Al6OVMFzqGQXEvL0VS33w+qlFcOQIxR0iT7e0c23esEQLngafPAHw2yckpi2ERLOxqf9UOeViwG5wotr+vnS9uOQ44cJUAoLyhEzXG3FBEaGfSOmFgpfwyJhQVIzAckblHcJmiapfbXbG1ttq+UmxYTu51IyEdHqOPEqxTroPdDyeTuB+S1dXg3f9EOinKztHvP7wLQqTEj8OK/5Le1d8OrqzEv8pA5+GJkM5HY2AhRe2EkghEr5cXtP2/nB72xWKyD9/hQG2I+8ZevhlLMwItbn7lGGVnfRZtBGLASbgi/fiVFKfEOr4Q5owQrBo77S3huEZ9z8kIxVsSPlv6DxH4LLxSJIrgW8JzegAsEUawGizWQywxYLSBWl4BoDuQQ8QXRQ5sxpMS+NjzLkwLBgA48ZUZwXKnhAWEnwoEbIYUrsoQmBZsbAk/7JA+MWKUOpMzOvoG5B0+W8WX8UeRhxOqSPZ2au2YynTPXJq7fe/b4DjMx2dMJMvnixRVpn2J8JOm7YfaZSR8z3Q4C4sXFVJLX5WHMCEb4NfdIpkr8uMRey03SnIbnlrhG4eNClIuBM2YFTNVdcZnl0gMgNpNmJdXtUrGApgkQ1mmP0iO7rIBo0qQ/Upw4mSF6rnCiXq189pB425dDVGkyH9IK65Qvq1p+SGW0p6oZUuF5ek5osVy0nDlCkiSDHAaN5qrmiwf+MbSePV5TW3e0rrbmWPOFVsXUf1xhKYcasIMQAAAAAElFTkSuQmCC" alt="用户头像"></td> <td class="user text-left" style="font-weight: 600">{{commentList.UserName}}</td> <td class="time">发表于：{{commentList.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</td> </tr> <tr> <td></td> <td class="comment text-left">{{commentList.Comment}}</td> <td></td> </tr> </tbody> </table> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> <div tm-related-course related-course-data="relatedCourseData"></div> </div> </div> </div>'),
    t.put("components/tmCourseRankingList.html", '\x3c!--课程点击排行--\x3e <div class="courseRankingList" dw-loading="courseRankingList"> <div common-header title-header="\'课程排行\'" show-more="true" link-url="\'rankcourseclick\'"></div> <div class="tmBorder"> <p class="rankTitle"> <span class="list2">排行</span> <span class="list5">课程名称</span> <span class="list3">点击数</span> </p> <ul class="rankingList" ng-repeat="rankingData in courseRankingList.ListData" ng-class="{\'rankListBg\':$index%2!=0}"> <li class="list2"> <span ng-if="$index<3" ng-class="{\'rankFirstBg\':$index==0,\'rankSecondBg\':$index==1,\'rankThirdBg\':$index==2}"></span> <span ng-if="$index>=3">{{$index+1}}</span> </li> <li class="list5" title="{{rankingData.Name}}"> <a>{{rankingData.Name}}</a> </li> <li class="list3">{{rankingData.Total}}</li> </ul> </div> </div>'),
    t.put("components/tmCourseSupermarket.html", '\x3c!--课程超市列表--\x3e <div class="courseSupermarket"> <div common-header title-header="\'课程中心\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="courseCenter">课程中心</a></li> <li ng-if="courseSupermarketData.ChannelName==\'\'" class="active"> {{courseSupermarketData.TitleNav}}({{courseSupermarketData.Count}}) </li> <li ng-if="courseSupermarketData.ChannelName!=\'\'" class="active"> {{courseSupermarketData.ChannelName}}({{courseSupermarketData.Count}}) </li> </ol> <form class="form-inline formSearch"> <select class="form-control" ng-init="selectedName = selectText[0].id" ng-model="selectedName" ng-options="x.id as x.name for x in selectText" ng-change="judgement()"> </select> <select ng-show="showInput2" class="form-control" ng-init="selectedType = videoType[0].id" ng-model="selectedType" ng-options="x.id as x.name for x in videoType"></select> <div class="form-group"> <input ng-show="showInput1" my-placeholder ng-model="searchTitle" type="text" class="form-control" placeholder="请输入搜索课程"> <input ng-show="showInput2" my-placeholder ng-model="searchTitle" type="text" class="form-control" placeholder="请输入搜索课程"> <input ng-show="showInput3" my-placeholder ng-model="searchTeacher" type="text" class="form-control" placeholder="请输入搜索教师"> <button type="submit" class="btn btn-primary searchBtn" ng-click="searchCourse({page: 1,sort: \'Sort\',order: \'desc\',flag:\'all\'})">搜索 </button> </div> </form> <div class="courseList mar_top_15 clearfix" dw-loading="courseSupermarket"> <div class="sortCourse clearfix"> <div class="clearfix"> <a class="recommendCourse pull-left" ng-click="getRecommendCourse()"> <img src="../qzzj/images/recomend.2c444966.png" alt="智能推荐"> </a> <div class="tag"> \x3c!--<span><a ng-click="searchCourse({courseType:\'ThreeScreenCourse\',title:\'\',teacher:\'\',flag:\'all\'})"><img\n              src="../qzzj/images/sfp.1b6ec19e.png"/> 精品三分屏</a></span>\n            <span><a ng-click="searchCourse({courseType:\'SingleCourse\',title:\'\',teacher:\'\',flag:\'all\'})"><img\n              src="../qzzj/images/dsp.deaaee78.png"/> 单视频课件</a></span>\n            <span><a ng-click="searchCourse({courseType:\'AnimationCourse\',title:\'\',teacher:\'\',flag:\'all\'})"><img\n              src="../qzzj/images/dh.fec7457d.png"/> 动画类课件</a></span>--\x3e <span> <a class="text_bg" ng-click="searchCourse({classTypeId: 1})">一般公需</a> </span> <span> <a class="text_bg" ng-click="searchCourse({classTypeId: 2})">行业公需</a> </span> <span> <a class="text_bg" ng-click="searchCourse({classTypeId: 3})">专业课</a> </span> \x3c!--<span><a ng-click="searchCourse({courseType:\'All\',flag:true})"><img\n              src="../qzzj/images/biXue.d3001a1e.png"/></a></span>\n            <span><a ng-click="searchCourse({courseType:\'All\',flag:false})"><img\n              src="../qzzj/images/xuanXiu.05087a3f.png"/></a></span>--\x3e </div> </div> <div class="title_bar"> <span><a ng-click="searchCourse({sort: \'Name\'},true)">课程名称<span class="arrow">▼</span></a></span> <span><a ng-click="searchCourse({sort: \'CommentCount\'},true)">评论<span class="arrow">▼</span></a></span> <span><a ng-click="searchCourse({sort: \'Credit\'},true)">学时<span class="arrow">▼</span></a></span> <span><a ng-click="searchCourse({sort: \'ClickCount\'},true)">点击量<span class="arrow">▼</span></a></span> <span><a ng-click="searchCourse({sort: \'CreateDate\'},true)">上线时间<span class="arrow">▼</span></a></span> </div> </div> <div class="NewCourseList"> <ul> <li class="clearfix" ng-repeat="courseList in courseSupermarketData.ListData"> <div class="block1 pull-left"> <input ng-disabled="{{courseList.Learning>=0?1:0}}" name="subcheck" type="checkbox" class="check" value="{{courseList.Id}}"> </div> <div class="block2 pull-left" title="{{courseList.Name}}"> <img ng-src="{{courseSupermarketData.ImageCourse+\'/\'+courseList.Img}}" err-src="images/notCourse.976a881b.png"> </div> <div class="block3 pull-left"> <div class="line line1"> <a class="CourseName pull-left" ui-sref="courseDetails({Id:courseList.Id})" target="_blank" title="{{courseList.Name}}"> {{courseList.Name}} </a> <span class="pull-right" ng-class="{\'biXiu\':courseList.RequiredFlag,\'xuanXiu\':!courseList.RequiredFlag}"></span> </div> <div class="line line3"> <span style="width:72px">学时：{{courseList.Credit}}</span> <span style="width:108px">主讲人：{{courseList.Teacher}}</span> <span><a>点击量：{{courseList.ClickCount}}</a></span> </div> <div class="line line2"> <span style="width: 72px"><a>评论：({{courseList.CommentCount}})</a></span> <span style="width: 108px"> <span style="width:36px">试卷：</span><span>{{courseList.Exam==0?\'无\':Exam}}</span> </span> <span> <span>选课状态：</span> <span class="highlight">{{courseList.Learning>=0?"已选课":"未选课"}}</span> </span> </div> </div> <div class="block4 pull-right"> <span class="onlineDate">上线日期：{{courseList.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <a ui-sref="courseDetails({Id:courseList.Id})" target="_blank" class="play pull-right">点击播放</a> </div> </li> </ul> <p ng-show="!paginationConf.totalItems" class="result">暂无数据</p> </div> <div class="checkCourse pull-left"> <a class="btn btn-default" ng-click="checkAll()">全选</a> <a class="btn btn-default" ng-click="selectInvert()">反选</a> <a class="btn btn-default" ng-click="ckBatch()">批量选课</a> </div> <div ng-transclude="pagation" ng-show="paginationConf.totalItems"></div> </div> </div> </div>'),
    t.put("components/tmCourseSupermarketBuy.html", '\x3c!--课程超市列表--\x3e <div class="courseSupermarketBuy"> <div common-header title-header="\'课程中心\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="courseCenter">课程中心</a></li> <li ng-if="courseSupermarketData.ChannelName==\'\'" class="active"> {{courseSupermarketData.TitleNav}}({{courseSupermarketData.Count}}) </li> <li ng-if="courseSupermarketData.ChannelName!=\'\'" class="active"> {{courseSupermarketData.ChannelName}}({{courseSupermarketData.Count}}) </li> </ol> <form class="form-inline formSearch"> <select class="form-control" ng-init="selectedName = selectText[0].id" ng-model="selectedName" ng-options="x.id as x.name for x in selectText" ng-change="judgement()"> </select> <select ng-show="showInput2" class="form-control" ng-init="selectedType = videoType[0].id" ng-model="selectedType" ng-options="x.id as x.name for x in videoType"></select> <div class="form-group"> <input ng-show="showInput1" my-placeholder ng-model="searchTitle" type="text" class="form-control" placeholder="请输入搜索课程"> <input ng-show="showInput2" my-placeholder ng-model="searchTitle" type="text" class="form-control" placeholder="请输入搜索课程"> <input ng-show="showInput3" my-placeholder ng-model="searchTeacher" type="text" class="form-control" placeholder="请输入搜索教师"> <button type="submit" class="btn btn-primary searchBtn" ng-click="searchCourse({page: 1,sort: \'Sort\',order: \'desc\',flag:\'all\'})">搜索 </button> </div> </form> \x3c!--<form class="form-inline formSearch">\r\n      <select class="form-control" ng-init="selectedName = selectText[0]" ng-model="selectedName" ng-options="x.name for x in selectText"  ng-change="judgement(selectedName.id)">\r\n      </select>\r\n      <div class="form-group">\r\n        <input ng-show="showInput1" my-placeholder ng-model="searchTitle1" type="text" class="form-control" placeholder="请输入要搜索的课程">\r\n        <select class="form-control" ng-show="showInput2"  ng-init="searchTitle2 = videoType[0]" ng-model="searchTitle2" ng-options="x.name for x in videoType"  ng-change="judgement(selectedName.id)">\r\n        </select>\r\n        <input ng-show="showInput3" my-placeholder ng-model="searchTitle3" type="text" class="form-control" placeholder="请输入主讲人">\r\n      </div>\r\n      <button ng-hide="showInput2" type="submit" class="btn btn-primary" ng-click="judgement(selectedName.id)">搜索</button>\r\n    </form>--\x3e <div class="courseList mar_top_15 clearfix" dw-loading="courseSupermarket"> <div class="sortCourse clearfix"> <div class="tag"> <a class="recommendCourse" ng-click="getRecommendCourse()"> <img src="../qzzj/images/recomend.2c444966.png" alt="智能推荐"> </a> <span><a ng-click="searchCourse({courseType:\'ThreeScreenCourse\',title:\'\',teacher:\'\',flag:\'all\'})"><img src="../qzzj/images/sfp.1b6ec19e.png"> 精品三分屏</a></span> <span><a ng-click="searchCourse({courseType:\'SingleCourse\',title:\'\',teacher:\'\',flag:\'all\'})"><img src="../qzzj/images/dsp.deaaee78.png"> 单视频课件</a></span> <span><a ng-click="searchCourse({courseType:\'AnimationCourse\',title:\'\',teacher:\'\',flag:\'all\'})"><img src="../qzzj/images/dh.fec7457d.png"> 动画类课件</a></span> <span><a ng-click="searchCourse({courseType:\'All\',flag:true})"><img src="../qzzj/images/biXue.d3001a1e.png"> 必修课件</a></span> <span><a ng-click="searchCourse({courseType:\'All\',flag:false})"><img src="../qzzj/images/xuanXiu.05087a3f.png"> 选修课件</a></span> </div> \x3c!--<div class="tag clearfix" style="text-align: right;">\r\n          <span><img src="images/sfp.1b6ec19e.png"><a href="javascript:;" ng-click="judgement(selectedName.id,\'ThreeScreenCourse\')">精品三分屏</a></span>\r\n          <span><img src="images/dsp.deaaee78.png"><a href="javascript:;" ng-click="judgement(selectedName.id,\'SingleCourse\')">单视频课件</a></span>\r\n          <span><img src="images/dh.fec7457d.png"><a href="javascript:;" ng-click="judgement(selectedName.id,\'AnimationCourse\')">动画类课件</a></span>\r\n        </div>--\x3e <div class="title_bar clearfix"> <span class="list0-5">选课</span> <span class="list2-5"><a ng-click="searchCourse({sort: \'Name\'},true)">课程名称<span id="asc_Name">▼</span></a></span> <span class="list1-5"><a ng-click="searchCourse({sort: \'CommentCount\'},true)">价格<span id="asc_CommentCount">▼</span></a></span> <span class="list1"><a ng-click="searchCourse({sort: \'Credit\'},true)">学时<span id="asc_Credit">▼</span></a></span> <span class="list1"><a ng-click="searchCourse({sort: \'ClickCount\'},true)">点击量<span id="asc_ClickCount">▼</span></a></span> <span class="list1"><a ng-click="searchCourse({sort: \'CreateDate\'},true)">上线时间<span id="asc_CreateDate">▼</span></a></span> <span class="list1">播放</span> <span class="list1-5">购买</span> </div> </div> <div class="NewCourseList"> <ul> <li ng-repeat="courseList in courseSupermarketData.ListData" class="clearfix"> <p class="list0-5"> <input ng-disabled="{{courseList.Learning>=0?1:0}}" name="subcheck" type="checkbox" class="check" value="{{courseList.Id}}"> </p> <p class="list2-5 courseName"><a ui-sref="courseDetails({Id:courseList.Id})" target="_blank" title="{{courseList.Name}}">{{courseList.Name}}</a></p> <p class="list1-5 money">￥{{courseList.Price.toFixed(2)}}</p> <p class="list1">{{courseList.Credit.toFixed(1)}}</p> <p class="list1">{{courseList.ClickCount}}</p> <p class="list1">{{courseList.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</p> <p class="list1"> <a ng-if="courseList.ShopStatus==\'HasBuy\'||courseList.ShopStatus==\'Free\'" ui-sref="play({Id:courseList.Id})" target="_blank" class="play">播放</a> <a ng-if="courseList.ShopStatus==\'NoBuy\'||courseList.ShopStatus==\'InShoppingCart\'||courseList.ShopStatus==\'InOrder\'" ui-sref="tryplay({Id:courseList.Id})" target="_blank" class="play">试看</a> </p> <p class="list1-5"> <button ng-if="courseList.ShopStatus==\'HasBuy\'" class="btn btn-success" disabled>已购买</button> <button ng-if="courseList.ShopStatus==\'Free\'" class="btn btn-success" disabled>免费课程</button> <button ng-if="courseList.ShopStatus==\'NoBuy\'" ng-click="addCourseToCart(courseList.Id)" class="btn btn-primary">加入购物车 </button> <button ng-if="courseList.ShopStatus==\'InShoppingCart\'" class="btn btn-default" disabled>已加入购物车</button> <button ng-if="courseList.ShopStatus==\'InOrder\'" class="btn btn-default" disabled>已下单</button> </p> </li> </ul> </div> <p ng-show="!paginationConf.totalItems" class="result">暂无数据</p> <div class="clearfix"> <div class="checkCourse pull-left"> <a class="btn btn-default" ng-click="checkAll()">全选</a> <a class="btn btn-default" ng-click="selectInvert()">反选</a> <a class="btn btn-default" ng-click="ckBatch()">批量加入购物车</a> </div> <div ng-transclude="pagation" ng-show="paginationConf.totalItems"></div> </div> </div> </div> </div>'),
    t.put("components/tmCreditPost.html", '<div class="tm-credit-post"> <div common-header title-header="\'学时上传\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">学时上传</li> </ol> <div class="credit_post_container"> <div class="category_choose_container"> <button class="btn btn-primary" data-target=".credit_category_modal" data-toggle="modal">添加</button> </div> <div class="post_list_container"> <ul class="post_list"> <li class="clearfix text-center"> <div class="list0-5">&nbsp;</div> <div class="list2">类别</div> <div class="list1-5">名称</div> <div class="list1">申报学时</div> <div class="list1-5">获得时间</div> <div class="list1-5">状态</div> <div class="list2">操作</div> </li> <li class="clearfix" ng-repeat="item in creditList"> <div class="list0-5 text-center">{{$index+1}}</div> <div class="list2 text-left ellipsis" title="{{item.CategoryName}}">{{item.CategoryName || \'无\'}}</div> <div class="list1-5 text-left ellipsis" title="{{item.Name}}">{{item.Name}}&nbsp;</div> <div class="list1 text-center">{{item.Credit}}&nbsp;</div> <div class="list1-5 text-center">{{item.CreditTime |dateFilter| date:"yyyy-MM-dd"}}&nbsp;</div> <div class="list1-5 text-center ellipsis" title="{{item.TaskName}}">{{item.TaskName}}&nbsp;</div> <div class="list2 text-center"> <button class="btn btn-sm btn-primary" ng-click="getAuditDetail(item)">详情</button> <button class="btn btn-sm btn-warning" ng-click="openModal(item)" ng-show="item.Status != 3">修改</button> <button class="btn btn-sm btn-danger" ng-click="deleteCredit(item)" ng-show="item.Status != 3"> <i class="fa fa-trash"></i> </button> </div> </li> </ul> <div class="pagination_container"> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> </div> <div class="modal fade credit_category_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">选择学时申报类型</h4> </div> <div class="modal-body"> <ul class="s_category_list"></ul> </div> <div class="modal-footer"> <button class="btn btn-primary" data-dismiss="modal" aria-label="Close">取消</button> </div> </div> </div> </div> <div class="modal fade credit_form_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">学时申报{{isUpdate?\'修改\':\'\'}}</h4> </div> <div class="modal-body" dw-loading="creditForm"> \x3c!--\n            CategoryId: 1\n            CategoryName: "参加环保业务进修培训、研讨讲座、读书会"\n            DataJson: ""\n            FieldType: 0\n            Id: 1\n            Name: "项目名称"\n            RequireFlag: true\n            Sort: 0\n          --\x3e <table class="table table-bordered"> <tr ng-repeat="item in formData"> <td>{{item.Name}}</td> <td> \x3c!--\n                  fieldType:\n                  0: 文本框input\n                  1: 多行文本框textarea\n                  2: 时间框\n                  3:下拉单选框\n                  4: 多选框\n                  5：单选框\n                  6: 文件\n                  7： 数字\n                --\x3e <input ng-if="item.FieldType==0" class="form-control" name="{{\'input\'+item.Id}}" type="text" ng-model="submitData[item.Code||item.Id]" placeholder="{{item.Remark || (\'请输入\'+item.Name)}}" ng-required="{{item.RequireFlag}}"> <textarea ng-if="item.FieldType==1" name="{{\'textarea\'+item.Id}}" class="form-control" rows="5" ng-model="submitData[item.Code||item.Id]" placeholder="{{item.Remark || (\'请输入\'+item.Name)}}" ng-required="{{item.RequireFlag}}"></textarea> <div ng-if="item.FieldType==2" class="datePicker"> <input name="{{\'datepicker\'+item.Id}}" class="form-control" ng-model="submitData[item.Code||item.Id]" type="text" date-time-picker readonly ng-required="{{item.RequireFlag}}" placeholder="{{item.Remark || (\'请选择\'+item.Name)}}"> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> <select ng-if="item.FieldType==3" name="{{\'select\'+item.Id}}" ng-model="submitData[item.Code||item.Id]" ng-required="{{item.RequireFlag}}" class="form-control"> <option value="">{{item.Remark || \'请选择\'}}</option> <option ng-repeat="val in item.DataJsonArr" ng-value="val">{{val}}</option> </select> <div ng-if="item.FieldType == 4"> <div> <span ng-repeat="val in item.DataJsonArr"> <input name="{{\'checkbox\'+item.Id}}" type="checkbox" ng-model="submitData[item.Code||item.Id]" ng-required="{{item.RequireFlag}}" ng-value="val">{{val}} </span> </div> <div class="highlight text-left">{{item.Remark}}</div> </div> <div ng-if="item.FieldType == 5"> <div> <span ng-repeat="val in item.DataJsonArr"> <input name="{{\'radio\'+item.Id}}" type="radio" ng-model="submitData[item.Code||item.Id]" ng-required="{{item.RequireFlag}}" ng-value="val">{{val}} </span> </div> <div class="highlight text-left">{{item.Remark}}</div> </div> <div class="clearfix" ng-if="item.FieldType == 6"> <div> <input class="upLoad_input" name="{{\'file\'+item.Id}}" type="file" ng-required="{{item.RequireFlag}}" ng-click="listenChange($event, item.Code||item.Id)" accept=".jpg,.png,.pdf"> </div> <div class="highlight text-left">{{item.Remark}}</div> \x3c!-- <div ng-show="submitData[item.Code||item.Id]">\n                    <ul>\n                      <li class="file_item" ng-repeat="file in fileList[item.Code||item.Id] track by file.name">\n                        <a href="{{file.url}}" download="{{file.name}}" target="_blank">{{file.name}}</a>\n                        <i class="fa fa-trash" ng-click="removeFile(item.Code, item.Id, $index)"></i>\n                      </li>\n                    </ul>\n                  </div> --\x3e </div> <input ng-if="item.FieldType==7" class="form-control" name="{{\'number\'+item.Id}}" type="text" ng-model="submitData[item.Code||item.Id]" numberic placeholder="{{item.Remark || (\'请输入\'+item.Name)}}" ng-required="{{item.RequireFlag}}"> </td> </tr> </table> </div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="submit({status: 1})">保存为草稿</button> <button class="btn btn-primary" ng-click="submit({status: 2})">提交审核</button> <button class="btn btn-primary" data-dismiss="modal" aria-label="Close">取消</button> </div> </div> </div> </div> <div class="modal fade audit_detail_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">审核详情</h4> </div> <div class="modal-body" ng-init="activeTabIndex = 0" dw-loading="auditDetail"> <ul class="nav nav-tabs nav-justified"> <li role="presentation" ng-class="{active: activeTabIndex == 0}" ng-click="activeTabIndex=0"><a>审核进度</a> </li> <li role="presentation" ng-class="{active: activeTabIndex == 1}" ng-click="activeTabIndex=1"><a>申报信息</a> </li> </ul> <ul> <li class="tab-content" ng-show="activeTabIndex == 0"> <ul class="audit_list"> <li class="audit_item clearfix" ng-repeat="item in auditList"> <div class="audit_time">{{item.DealTime}}</div> <div class="line" ng-class="{bottom_radius: $last, top_radius: $first}"></div> <div class="audit_name"> <div class="node_name">{{item.NodeDefName}}</div> <div class="deal_remark">{{item.DealRemark}}</div> </div> </li> </ul> </li> <li class="tab-content" ng-show="activeTabIndex == 1"> <table class="table table-bordered"> <tr ng-repeat="item in formData"> <td width="150">{{item.Name}}</td> <td> <p ng-if="item.FieldType != 6">{{submitData[item.Code||item.Id]}}</p> <div ng-if="item.FieldType == 6"> <div ng-show="submitData[item.Code||item.Id]"> <ul> <li class="mar_top_5" ng-repeat="file in item.files"> <img ng-if="file.isImg" ng-src="{{file.url}}" alt=""> <a ng-if="!file.isImg" class="btn btn-primary" href="{{file.url}}" target="_blank">预览{{file.name}}</a> </li> </ul> </div> </div> </td> </tr> </table> </li> </ul> </div> <div class="modal-footer"> <button class="btn btn-primary" data-dismiss="modal" aria-label="Close">取消</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmExam.html", '\x3c!--考试--\x3e <div class="exam" dw-loading="exam"> <div class="exam_top"> <img src="/images/exam_top.48319b19.png"> </div> <form method="post" id="editForm" class="editForm" name="editForm"> <input type="hidden" value="{{examData.examid}}" id="hdnexamid" name="hdnexamid"> <input type="hidden" value="{{examData.isfixed}}" id="hdnisfixed" name="hdnisfixed"> <table> <tbody> <tr> <td> <div class="xz"> <ul> <li>时间限制：</li> <li ng-if="examData.Exam.TimeLimit!=0" class="highlight">{{examData.Exam.TimeLimit}}分钟</li> <li ng-if="examData.Exam.TimeLimit==0" class="highlight">不限时</li> <li>剩余时间：</li> <li ng-if="examData.Exam.TimeLimit!=0" class="highlight">{{seconds | formatSeconds}}</li> <li ng-if="examData.Exam.TimeLimit==0" class="highlight">不限时</li> <li>总分：</li> <li class="highlight">{{examData.Exam.TotalScore}}</li> </ul> </div> </td> </tr> <tr> <td> <div class="xz"> <ul> <li>考试名称：</li> <li class="highlight">{{examData.Exam.Name}}</li> <li>考试类型：</li> <li class="highlight">{{examData.Exam.ExamTypeName}}</li> <li>考试学时：</li> <li class="highlight">{{examData.Exam.CreditHour}}</li> <li>及格分：</li> <li class="highlight">{{examData.Exam.PassingScore}}</li> </ul> </div> </td> </tr> <tr ng-show="checkingQuestions"> <td class="biaoti">判断题(共 {{checkingQuestions.length}} 题,共{{examAllScore1(examData.Type0Questions)}} 分)</td> </tr> <tr ng-show="checkingQuestions" ng-repeat="item in checkingQuestions" ng-init="outerIndex0 = $index"> <td> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}" data-type="type0"> <div class="tibg">第<span class="questionNum" type="0"> {{$index+1}} </span>题、 {{item.Name}} （分值：{{item.Score}}） </div> <table class="question_item"> <tr ng-repeat="single in item.QuestionsItems"> <td> <label for="{{single.ItemFlag}}-{{item.Id}}-{{outerIndex0}}"> <input class="hideNode" type="radio" value="{{single.ItemFlag}}" id="{{single.ItemFlag}}-{{item.Id}}-{{outerIndex0}}" name="radio{{item.Id}}"> <span class="jqRadio"></span> {{single.ItemFlag}}.{{single.Name}} </label> </td> </tr> </table> </td> </tr> <tr ng-show="singleQuestions"> <td class="biaoti"> 单选题(共 {{singleQuestions.length}} 题,共{{examAllScore1(examData.Type1Questions)}} 分) </td> </tr> <tr ng-show="singleQuestions" ng-repeat="item in singleQuestions" ng-init="outerIndex1 = $index"> <td> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}" data-type="type1"> <div class="tibg">第<span class="questionNum" type="1"> {{$index+1}} </span>题、 {{item.Name}} （分值：{{item.Score}}） </div> <table class="question_item"> <tr ng-repeat="single in item.QuestionsItems"> <td> <label for="{{single.ItemFlag}}-{{item.Id}}-{{outerIndex1}}"> <input class="hideNode" type="radio" value="{{single.ItemFlag}}" id="{{single.ItemFlag}}-{{item.Id}}-{{outerIndex1}}" name="radio{{item.Id}}"> <span class="jqRadio"></span> {{single.ItemFlag}}.{{single.Name}} </label> </td> </tr> </table> </td> </tr> <tr ng-show="multipleQuestions"> <td class="biaoti"> 多选题(共 {{multipleQuestions.length}} 题,共{{examAllScore1(examData.Type2Questions)}} 分) </td> </tr> <tr ng-show="multipleQuestions" ng-repeat="item in multipleQuestions" ng-init="outerIndex2 = $index"> <td> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}" data-type="type2"> <div class="tibg">第<span class="questionNum" type="2"> {{$index+1}} </span>题、 {{item.Name}} （分值：{{item.Score}}） </div> <table class="question_item"> <tr ng-repeat="more in item.QuestionsItems"> <td> <label for="{{more.ItemFlag}}-{{item.Id}}-{{outerIndex2}}"> <input class="hideNode" type="checkbox" value="{{more.ItemFlag}}" id="{{more.ItemFlag}}-{{item.Id}}-{{outerIndex2}}" name="checkbox{{item.Id}}"> <span href="javascript:;" class="jqCheckbox"></span> {{more.ItemFlag}}.{{more.Name}} </label> </td> </tr> </table> </td> </tr> <tr ng-show="adviseQuestions"> <td class="biaoti"> 意见题(共 {{adviseQuestions.length}} 题,共{{examAllScore1(examData.Type3Questions)}} 分) </td> </tr> <tr ng-show="adviseQuestions" ng-repeat="item in adviseQuestions"> <td> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}" data-type="type3"> <div class="tibg">第<span class="questionNum" type="3"> {{$index+1}} </span>题、 {{item.Name}} （分值：{{item.Score}}） </div> <table class="question_item"> <tr> <td> <textarea name="textbox{{item.Id}}" placeholder="请输入答案..."></textarea> </td> </tr> </table> </td> </tr> <tr ng-show="gapFillingQuestions"> <td class="biaoti"> 填空题(共 {{gapFillingQuestions.length}} 题,共{{examAllScore1(examData.Type4Questions)}} 分) </td> </tr> <tr ng-show="gapFillingQuestions" ng-repeat="item in gapFillingQuestions"> <td class="blankQuestion"> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}" data-type="type4"> <div class="tibg">第<span class="questionNum"> {{$index+1}} </span>题、 <span class="blankName" ng-bind-html="replaceInput(item.Name) | trustHtml"></span> （分值：{{item.Score}}） </div> </td> </tr> <tr> <td style="text-align: center"> <button ng-click="submitForm()" type="submit" class="btn btn-primary">提交</button> </td> </tr> </tbody> </table> </form> </div>'),
    t.put("components/tmExamDetail.html", '\x3c!--考试记录--\x3e <div class="examDetail"> <div common-header title-header="\'考试记录\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="testCenter">考试中心</a></li> <li class="active">考试记录</li> </ol> <div class="myTab" dw-loading="examDetail"> <div class="tab-content" dw-loading="myCenter"> <div class="tab-panel perlist"> <div class="title_bar clearfix"> <span class="list3">分数</span> <span class="list3-5">考试时间</span> <span class="list3-5">答题情况</span> </div> <div class="list" ng-repeat="examList in examDetailData.Model"> <span class="list3">{{examList.Score}}</span> <span class="list3-5">{{examList.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span class="list3-5" ng-if="examDetailData.ViewFlag"> <a target="_blank" ui-sref="examReview({examId:Id,recordId:examList.Id})">查看</a> </span> <span class="list3-5" ng-if="!examDetailData.ViewFlag">不允许被查看</span> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmExamList.html", '\x3c!--考试中心--\x3e <div class="examList"> <div common-header title-header="TotalData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{TotalData.TitleNav}}</li> </ol> <form class="form-inline formSearch"> <select class="form-control" ng-init="selectedName = courseStatus[0]" ng-model="selectedName" ng-options="x.name for x in courseStatus" ng-change="selectChangeFun(selectedName.id)"> </select> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入要搜索的考试"> </div> <button type="submit" class="btn btn-primary" ng-click="searchMyCenterCourse({examType:selectedName.id,title:searchTitle,page:\'1\'})">搜索 </button> </form> <div class="myTab"> <ul class="nav nav-tabs"> <li ng-class="{active: vm.activeTab == 1}"><a ng-click="vm.activeTab = 1;searchMyCenterCourse({examType:\'UnFinish\',title:searchTitle,page:\'1\'})">未完成的考试</a> </li> <li ng-class="{active: vm.activeTab == 3}"><a ng-click="vm.activeTab = 3;searchMyCenterCourse({examType:\'Finish\',title:searchTitle,page:\'1\'})">已完成的考试</a> </li> </ul> <div class="tab-content" dw-loading="examList"> <div class="tab-panel perlist" ng-show="vm.activeTab == 1"> <div class="title_bar"> <span class="list3-5">考试名称</span> <span class="list1">考试学时</span> <span class="list1">时限</span> <span class="list1-5">参加测试</span> <span class="list2-5">考试时间</span> </div> <div class="list" ng-repeat="unFinish in TotalData.UnfinishModel"> <span class="list3-5 ellipsis" title="{{unFinish.Name}}"><a target="_blank" ng-click="havTest(unFinish.Id,e)">{{unFinish.Name}}</a></span> <span class="list1">{{unFinish.CreditHour}}</span> <span class="list1">{{unFinish.TimeLimit}}</span> <span class="list1-5"><a ng-click="havTest(unFinish.Id)">参加测试</a></span> <span class="list2-5">{{unFinish.StartTime | dateFilter | date:\'yyyy-MM-dd\'}}~{{unFinish.EndTime | dateFilter | date:\'yyyy-MM-dd\'}}</span> </div> <div ng-transclude="pagation"></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 3"> <div class="title_bar"> <span class="list3-5">考试名称</span> <span class="list1">考试学时</span> <span class="list1">时限</span> <span class="list1-5">通过状态</span> <span class="list1-5">参加测试</span> <span class="list1-5">查看详细记录</span> </div> <div class="list" ng-repeat="Finish in TotalData.FinishModel"> <span class="list3-5 ellipsis" title="{{Finish.Name}}"><a ng-click="havTest(Finish.Id)" target="_blank">{{Finish.Name}}</a></span> <span class="list1">{{Finish.CreditHour}}</span> <span class="list1">{{Finish.TimeLimit}}</span> <span class="list1-5 red" ng-show="Finish.PassFlag">通过</span> <span class="list1-5" ng-hide="Finish.PassFlag">未通过</span> <span class="list1-5"><a ng-click="havTest(Finish.Id,e)">参加测试</a></span> <span class="list1-5"><a ui-sref="examDetailList({Id:Finish.Id})">查看详细记录</a></span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmExamReview.html", '\x3c!--考试结果查看--\x3e <div class="examReview"> <div class="exam_top"> <img src="/images/exam_top.48319b19.png"> </div> <form class="examReviewForm" dw-loading="examReview"> <table class="fromEditTable" cellpadding="0" cellspacing="0"> <tbody> <tr> <td> <div class="xz"> <ul> <li>考试名称：</li> <li class="highlight">{{examReviewData.Exam.Name}}</li> <li>考试类型:</li> <li class="highlight">{{examReviewData.Exam.ExamTypeName}}</li> <li>总分：</li> <li class="highlight">{{examReviewData.Exam.TotalScore}}</li> <li>及格分：</li> <li class="highlight">{{examReviewData.Exam.PassingScore}}</li> </ul> </div> </td> </tr> <tr> <td> <div class="xz score"> <ul> <li>您的得分：</li> <li class="highlight">{{examReviewData.UserExamDetail.Score}}</li> </ul> </div> </td> </tr> <tr ng-show="checkingQuestions"> <td class="biaoti">判断题(共 {{checkingQuestions.length}} 题,共 {{examAllScore(examReviewData.Type0Questions)}} 分),答对 {{countIf(examReviewData.Type0Questions)}} 题,得分{{rightScore(examReviewData.Type0Questions)}}分 </td> </tr> <tr ng-show="checkingQuestions" ng-repeat="checkques in checkingQuestions"> <td class="tibg"> <div> 第<span> {{$index+1}} </span>题、 {{checkques.Question.Name}} （分值：{{checkques.Question.Score}}） <span>正确选项： {{checkques.Question.Answer}} ,</span> <span class="xxys">您的选项 <span class="highlight">{{checkques.UserAnswer}}</span>,&nbsp;&nbsp;您的得分 <span class="highlight">{{checkques.UserScore}}</span></span> <table> <tr ng-repeat="checkList in checkques.Question.QuestionsItems"> <td>{{checkList.ItemFlag}} . {{checkList.Name}}</td> </tr> </table> </div> </td> </tr> <tr ng-show="singleQuestions"> <td class="biaoti"> 单选题(共 {{singleQuestions.length}} 题,共 {{examAllScore(examReviewData.Type1Questions)}} 分),答对 {{countIf(examReviewData.Type1Questions)}} 题,得分{{rightScore(examReviewData.Type1Questions)}}分 </td> </tr> <tr ng-show="singleQuestions" ng-repeat="singleques in singleQuestions"> <td class="tibg"> <div> 第<span> {{$index+1}} </span>题、 {{singleques.Question.Name}} （分值：{{singleques.Question.Score}}） <span>正确选项： {{singleques.Question.Answer}} ,</span> <span class="xxys">您的选项 <span class="highlight">{{singleques.UserAnswer}}</span>,&nbsp;&nbsp;您的得分 <span class="highlight">{{singleques.UserScore}}</span></span> <table> <tr ng-repeat="singleList in singleques.Question.QuestionsItems"> <td>{{singleList.ItemFlag}} . {{singleList.Name}}</td> </tr> </table> </div> </td> </tr> <tr ng-show="multipleQuestions"> <td class="biaoti"> 多选题(共 {{multipleQuestions.length}} 题,共 {{examAllScore(examReviewData.Type2Questions)}} 分),答对 {{countIf(examReviewData.Type2Questions)}} 题,得分{{rightScore(examReviewData.Type2Questions)}}分 </td> </tr> <tr ng-show="multipleQuestions" ng-repeat="multipeques in multipleQuestions"> <td class="tibg"> <div> 第<span> {{$index+1}} </span>题、 {{multipeques.Question.Name}} （分值：{{multipeques.Question.Score}}） <span>正确选项： {{multipeques.Question.Answer}} ,</span> <span class="xxys">您的选项 <span class="highlight">{{multipeques.UserAnswer}}</span>,&nbsp;&nbsp;您的得分 <span class="highlight">{{multipeques.UserScore}}</span></span> <table> <tr ng-repeat="multipeList in multipeques.Question.QuestionsItems"> <td>{{multipeList.ItemFlag}} . {{multipeList.Name}}</td> </tr> </table> </div> </td> </tr> <tr ng-show="adviseQuestions"> <td class="biaoti"> 意见题(共 {{adviseQuestions.length}} 题,共{{examAllScore(adviseQuestions)}} 分),得分{{rightScore(adviseQuestions)}}分 </td> </tr> <tr ng-show="adviseQuestions" ng-repeat="item in adviseQuestions"> <td> <div class="tibg"> 第<span class="questionNum" type="3"> {{$index+1}} </span>题、 {{item.Question.Name}}（分值：{{item.Question.Score}}） <span class="xxys"> 您的得分 <span class="highlight">{{item.UserScore}}</span> 【参考答案：{{ item.Question.Answer }}】 </span> </div> <table> <tr> <td> <textarea disabled>{{ item.UserAnswer }}</textarea> </td> </tr> </table> </td> </tr> <tr ng-show="gapFillingQuestions"> <td class="biaoti"> 填空题(共 {{gapFillingQuestions.length}} 题,共{{examAllScore(gapFillingQuestions)}} 分),得分{{rightScore(gapFillingQuestions)}}分 </td> </tr> <tr ng-show="gapFillingQuestions" ng-repeat="item in gapFillingQuestions"> <td class="blankQuestion"> <div class="tibg"> 第<span class="questionNum" type="3"> {{$index+1}} </span>题、 {{replaceInput(item.Question.Name)}}（分值：{{item.Question.Score}}） <span class="xxys"> 您的得分 <span class="highlight">{{item.UserScore}}</span> 【参考答案：{{ item.Question.Answer }}】 </span> </div> <table> <tr> <td> 您的答案：<span class="highlight">{{ replaceAnswer(item.UserAnswer) }}</span> </td> </tr> </table> </td> </tr> </tbody> </table> </form> </div>'),
    t.put("components/tmFooter.html", '\x3c!--@*footer*@--\x3e <div class="footer"> <div class="footerBg"> <div class="container_24"> \x3c!--<ul class="footer_links">\n        <li class="footer_link">\n          <a href="">\n            <img src="../qzzj/images/footer_img_1.ad8c0cbc.png" alt="">\n          </a>\n        </li>\n        <li class="footer_link">\n          <a href="">\n            <img src="../qzzj/images/footer_img_2.39a4467a.png" alt="">\n          </a>\n        </li>\n        <li class="footer_link">\n          <a href="">\n            <img src="../qzzj/images/footer_img_3.b807e391.png" alt="">\n          </a>\n        </li>\n        <li class="footer_link">\n          <a href="">\n            <img src="../qzzj/images/footer_img_4.9f3e0a2b.png" alt="">\n          </a>\n        </li>\n        <li class="footer_link">\n          <a href="">\n            <img src="../qzzj/images/footer_img_5.3b1f703f.png" alt="">\n          </a>\n        </li>\n      </ul>--\x3e \x3c!-- <p>版权所有(C)2010 衢州市人力资源和社会保障局 技术支持：杭州精英在线教育科技股份有限公司 ALL RIGHTS RESERVED</p>\n      <p>建议使用：1024*768分辨率，16位以上颜色，IE9.0以上版本浏览器和中文大字符集</p> --\x3e \x3c!--<p>浙ICP备05069975号 浙公网安备 33078202000317号</p>--\x3e <p>Copyright © 2017 &nbsp;All Rights Reserved. &nbsp;版权所有：衢州市人力资源和社会保障局 未经许可 禁止非法拷贝或镜象 <a ui-sref="userLogin" style="color:red">管理员登录</a></p> <p>地址：衢州市白云街道仙霞中路36号市行政中心4号楼&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备05000051号</a>&nbsp;&nbsp;&nbsp;<img src="http://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2771/site/picture/0/1809051521066339378.png" style="float:center"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33080202000372" target="_blank">浙公网安备 33080202000372号</a>&nbsp;&nbsp;&nbsp;网站标识码3308000041</p> <p>主办单位：衢州市人力资源和社会保障局</p> <p>电话：0571-28990788 转8005&nbsp;&nbsp;&nbsp;技术维护：杭州精英在线教育科技股份有限公司</p> <div> <a href="https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=3308000041&url=http%3A%2F%2Frsj.qz.gov.cn%2Findex.html" target="_blank"> <img src="../qzzj/images/jiucuo.04d34490.png" alt=""> </a> <a href="https://bszs.conac.cn/sitename?method=show&id=0707033B6C490263E053012819AC0E71" target="_blank"> <img src="../qzzj/images/dangzhengjiguan.7aa7d197.png" alt=""> </a> </div> </div> </div> </div>'),
    t.put("components/tmForgetPassword.html", '\x3c!--忘记密码--\x3e <div class="forgetPassword"> <div common-header title-header="\'找回密码\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb" style="margin-bottom: 0"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">找回密码</li> </ol> <div dw-loading="forgetPassword"> <form class="form-inline center" ng-show="showAccount"> <div class="commonTitle">找回密码</div> <div class="form-group"> <label for="account">请输入账号：</label> <input class="form-control" type="text" ng-model="account" id="account"> </div> <button type="submit" class="btn btn-primary" ng-click="submitAccount(account)">提交</button> </form> <form class="form-inline center" ng-hide="showAccount"> <div class="commonTitle">填写密保答案</div> <div class="form-group"> <label for="question">{{question}}：</label> <input class="form-control" type="text" ng-model="answer" id="question"> </div> <button type="submit" class="btn btn-primary" ng-click="submitQuestion(answer)">提交</button> </form> </div> <p class="tip-forget">友情提示：只有设置密保后才能找回密码，如有疑问请联系管理员！</p> </div> </div>'),
    t.put("components/tmFriendlyLink.html", '\x3c!--友情链接(短模块)--\x3e <div class="friendlyLinkShort"> <h4>{{firenlyLinkData.TitleNav}}</h4> <ul dw-loading="friendlyLink"> <li ng-repeat="firenlyLink in firenlyLinkData.ListData"> <a target="_blank" href="{{firenlyLink.Url}}" title="{{firenlyLink.Name}}"> <span class="linkName">{{firenlyLink.Name}}</span> <span class="linkArrow"> > </span> </a> </li> </ul> </div>'),
    t.put("components/tmGovernmentRanking.html", '\x3c!--单位排行--\x3e <div class="govermentRanking" dw-loading="rankingList"> <h4>{{govermentRanking.TitleNav}}</h4> <p class="title"> <span class="rank1">排行</span> <span class="rank2">单位</span> <span class="rank3">平均学时</span> </p> <ul class="rankingList" ng-repeat="rankingData in govermentRanking.ListData" ng-class="{\'rankListBg\':$index%2!=0}"> <li class="list1"> <span ng-if="$index<3" ng-class="{\'rankFirstBg\':$index==0,\'rankSecondBg\':$index==1,\'rankThirdBg\':$index==2}"></span> <span ng-if="$index>=3">{{$index+1}}</span> </li> <li class="list2" title="{{rankingData.DepartmentName}}">{{rankingData.DepartmentName}}</li> <li class="list3">{{rankingData.Average}}</li> </ul> </div> <style>.govermentRanking {\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .govermentRanking h4 {\r\n    line-height: 52px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .govermentRanking .rankingList {\r\n    width: 265px;\r\n    height: 30px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .govermentRanking .title {\r\n    border: 1px solid #dadada;\r\n    border-radius: 3px;\r\n    width: auto;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    margin: 0 10px 10px 10px;\r\n  }\r\n\r\n  .govermentRanking .title span, .govermentRanking .rankingList li {\r\n    float: left;\r\n  }\r\n\r\n  .govermentRanking .title span {\r\n    color: #000;\r\n  }\r\n\r\n  .govermentRanking .title .rank1, .govermentRanking .rankingList .list1 {\r\n    width: 60px;\r\n    text-align: left;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .govermentRanking .rankingList .list1 {\r\n    padding-left: 15px;\r\n  }\r\n\r\n  .govermentRanking .title .rank2, .govermentRanking .rankingList .list2 {\r\n    width: 140px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n  .govermentRanking .title .rank3, .govermentRanking .rankingList .list3 {\r\n    width: 65px;\r\n    text-align: right;\r\n  }\r\n\r\n  .govermentRanking .rankingList .list2 {\r\n    text-align: left;\r\n  }\r\n\r\n  .govermentRanking .rankingList .list3 {\r\n    text-align: center;\r\n  }\r\n\r\n  .govermentRanking .title .rank2 {\r\n    padding-right: 60px;\r\n  }</style>'),
    t.put("components/tmGuideEntry.html", '<div class="guideEntry mar_left_20"> <div common-header title-header="\'快速入口\'" show-more="false" link-url="\'\'"></div> <div class="guideContent"> <ul class="clearfix"> <li> <a target="_blank" ui-sref="collegeinfo" class="professionals"> <img src="../qzzj/images/entrance1.d5c55d08.png" alt=""> <br> <p>平台介绍</p> </a> </li> <li> <a target="_blank" ui-sref="articleDetail({ID:\'79\'})" class="professionals"> <img src="../qzzj/images/entrance2.b12224ed.png" alt=""> <br> <p>考核规则</p> </a> </li> <li> <a target="_blank" ui-sref="articleDetail({ID:\'29\'})" class="professionals"> <img src="../qzzj/images/entrance3.207aca1a.png" alt=""> <br> <p>常见问题</p> </a> </li> <li> <a target="_blank" ui-sref="polllist" class="professionals"> <img src="../qzzj/images/entrance4.ffc73088.png" alt=""> <br> <p>问卷调查</p> </a> </li> <li> <a target="_blank" ui-sref="originalarticlelist" class="professionals"> <img src="../qzzj/images/entrance5.bf23f54e.png" alt=""> <br> <p>学员心声</p> </a> </li> <li> <a target="_blank" ui-sref="messageList" class="professionals"> <img src="../qzzj/images/entrance6.8cc30309.png" alt=""> <br> <p>在线留言</p> </a> </li> </ul> </div> </div>'),
    t.put("components/tmGybClassList.html", '<div class="tm-gyb-class-list"> <h2 class="page_title">高研班培训——{{title}}</h2> <ul class="gyb_class_list mar_top_15 clearfix"> <li class="gyb_class_item pull-left" ng-repeat="item in classList track by $index"> <div class="item_title">{{item.Name}}</div> <div class="item_info"> <div>主办单位： <span>{{item.Organizers|| \'无\'}}</span></div> <div>联系人： <span>{{item.Creator|| \'无\'}}</span></div> <div>联系电话： <span>{{item.SignWay||\'无\'}}</span></div> <div>开班日期： <span>{{item.StartTime | dateFilter | date:"yyyy-MM-dd"}}</span></div> <div>开班地点： <span>{{item.Address||\'无\'}}</span></div> <div>专业序列： <span>{{item.BatchName || \'无\'}}</span></div> <div>简介： <span>{{item.TrainingDescription || \'无\'}}</span></div> <div class="mar_top_10" ng-if="item.Status != \'Graduate\'"> <div ng-if="!item.ApplyStatus"> <a class="btn btn-info" ng-click="addClass(item.Id)">点击报名</a> </div> <div ng-if="item.ApplyStatus==\'Normal\'"> <a disabled class="btn btn-success">{{JudgeStatus(item.ApplyStatus)}}</a> </div> <div ng-if="item.ApplyStatus==\'UnAudit\'||item.ApplyStatus==\'UnApprove\'"> <a disabled class="btn btn-default">{{JudgeStatus(item.ApplyStatus)}}</a> </div> </div> <div class="mar_top_10" ng-if="item.Status == \'Graduate\'"> <a disabled class="btn btn-default">已结业</a> </div> </div> </li> </ul> <div> <div tm-pagation conf="paginationConf"></div> </div> </div>'),
    t.put("components/tmGybPost.html", '<div class="tm-gyb-post"> <div common-header title-header="\'高研班申报\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">高研班申报</li> </ol> <div class="gyb_post_container"> <div class="category_choose_container"> <button class="btn btn-primary" data-target=".gyb_post_modal" data-toggle="modal">添加</button> </div> <div class="post_list_container"> <ul class="post_list"> <li class="clearfix text-center"> <div class="list0-5">&nbsp;</div> <div class="list2-5">名称</div> <div class="list2">申报时间</div> <div class="list2">状态</div> <div class="list3">操作</div> </li> <li class="clearfix" ng-repeat="item in creditList"> <div class="list0-5 text-center">{{$index+1}}</div> <div class="list2-5 text-left ellipsis" title="{{item.Name}}">{{item.Name}}&nbsp;</div> <div class="list2 text-center">{{item.CreateTime}}&nbsp;</div> <div class="list2 text-center ellipsis" title="{{item.TaskName}}">{{item.TaskName}}&nbsp;</div> <div class="list3 text-center"> <button class="btn btn-sm btn-primary" ng-click="getAuditDetail(item)">详情</button> <button class="btn btn-sm btn-warning" ng-click="openModal(item)" ng-show="item.Status==0">修改</button> <button class="btn btn-sm btn-danger" ng-click="deleteCredit(item)" ng-show="item.Status==0"> <i class="fa fa-trash"></i> </button> </div> </li> </ul> <div class="pagination_container"> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> </div> <div class="modal fade gyb_post_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">高研班申报{{isUpdate?\'修改\':\'\'}}</h4> </div> <div class="modal-body" dw-loading="gybPostForm"> <table class="table table-bordered"> <tr> <td width="160">申报单位</td> <td colspan="2"><input type="text" class="form-control"></td> <td width="160">推荐单位</td> <td colspan="2"><input type="text" class="form-control"></td> </tr> <tr> <td>高研班名称</td> <td colspan="3"><input type="text" class="form-control"></td> <td width="160">类别</td> <td> <select class="form-control"> <option value="">请选择</option> </select> </td> </tr> <tr> <td width="160">联 系 人</td> <td width="160"><input type="text" class="form-control"></td> <td width="160">办公电话</td> <td width="160"><input type="text" class="form-control"></td> <td width="160">手机</td> <td width="160"><input type="text" class="form-control"></td> </tr> <tr> <td>研修目的</td> <td colspan="5"> <textarea rows="5" class="form-control"></textarea> </td> </tr> <tr> <td>研修对象</td> <td colspan="5"> <textarea rows="5" class="form-control"></textarea> </td> </tr> <tr> <td rowspan="2">研修方案</td> <td>时间</td> <td> <div class="datePicker"> <input class="form-control" ng-model="datetime" type="text" date-time-picker readonly> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> <td>天数</td> <td colspan="2"><input type="text" class="form-control" ng-model="daynum" numberic></td> </tr> <tr> <td>人数</td> <td><input type="text" class="form-control" ng-model="daynum" numberic></td> <td>地点</td> <td colspan="2"><input type="text" class="form-control"></td> </tr> <tr> <td>研修内容 （含课程计划） </td> <td colspan="5"> <textarea class="form-control" rows="5"></textarea> </td> </tr> <tr> <td rowspan="4">研修师资情况 （姓名、单位、职务、职称、研究方向及成果） </td> <td colspan="5">课题主持人</td> </tr> <tr> <td colspan="5"><textarea class="form-control" rows="5"></textarea></td> </tr> <tr> <td colspan="5">其他师资</td> </tr> <tr> <td colspan="5"><textarea class="form-control" rows="5"></textarea></td> </tr> <tr> <td>经费预算及资金来源</td> <td colspan="5"><textarea class="form-control" rows="5"></textarea></td> </tr> <tr> <td>承办单位</td> <td colspan="5"><input type="text" class="form-control"></td> </tr> <tr> <td>经办人</td> <td><input type="text" class="form-control"></td> <td>办公电话</td> <td><input type="text" class="form-control"></td> <td>手机</td> <td><input type="text" class="form-control"></td> </tr> </table> </div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="submit({status: 0})">保存为草稿</button> <button class="btn btn-primary" ng-click="submit({status: 1})">提交审核</button> <button class="btn btn-primary" data-dismiss="modal" aria-label="Close">取消</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmHeader.html", '\x3c!--header--\x3e <div class="tmHeader"> <div class="container_24 headerSearch"> <ul class="clearfix"> <li class="grid_16 left_logo"> <a class="logoImg" ui-sref="main"> </a> <div class="logoText"> <h3>衢州市专业技术人员继续教育学习平台</h3> \x3c!--<p>CONTUNUING EDUCATION OF PROFESSIONAL AND TECHNICAL</p>--\x3e </div> </li> <li class="grid_8 clearfix"> \x3c!--<p class="pull-left Img appImg">\n          <img class="smAppImg" src="../qzzj/images/appImg.9fbb88b9.png" alt="">\n          <img class="qrcode_text" src="../qzzj/images/qcode_text.de5a64fa.png" alt="">\n          <img class="bigAppImg" src="../qzzj/images/appImg.9fbb88b9.png"/>\n        </p>--\x3e </li> </ul> </div> </div>'),
    t.put("components/tmImportantNotice.html", '<div class="importantNotice"> <span class="triangle-topleft"></span> <h4>重要通知</h4> <div class="slide"> <ul id="slide"> <li ng-repeat="item in importantNoticeData"><a target="_blank" ui-sref="noticeDetail({ID:item.Id})">{{item.Name}}</a></li> </ul> </div> <span class="triangle-topright"></span> </div> <style>.importantNotice {\r\n    margin: 10px auto 0;\r\n    width: 1080px;\r\n    height: 48px;\r\n    color: #f7f7f7;\r\n    background: url("images/notice.png") no-repeat;\r\n    position: relative;\r\n    left: -10px;\r\n  }\r\n\r\n  .importantNotice h4 {\r\n    position: absolute;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    line-height: 48px;\r\n    padding-left: 30px;\r\n    background: url("../qzzj/images/icon_guide_view_03.png") no-repeat center left;\r\n    margin-left: 23px;\r\n\r\n  }\r\n\r\n  .importantNotice .slide {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    height: 48px;\r\n  }\r\n\r\n  .importantNotice ul {\r\n    display: inline-block;\r\n    margin-left: 140px;\r\n  }\r\n\r\n  .importantNotice ul li a {\r\n    color: #f7f7f7;\r\n    font-size: 16px;\r\n    line-height: 48px;\r\n  }\r\n\r\n  .triangle-topright {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 6px solid #1e5e8a;\r\n    border-right: 6px solid transparent;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -6px;\r\n  }\r\n\r\n  .triangle-topleft {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 6px solid #1e5e8a;\r\n    border-left: 6px solid transparent;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -6px;\r\n  }</style>'),
    t.put("components/tmInvoiceList.html", '<div class="invoiceList"> <div common-header title-header="\'我的发票\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder clearfix"> <h3 class="shoppingTitle clearfix"> <p class="pull-left"> <span class="verticalLine"></span> <span>我的发票</span> </p> <p class="pull-right"> <a ui-sref="applyinvoice" class="btn btn-primary">申请开发票</a> </p> </h3> <div class="cartList" dw-loading="invoiceList"> <ul> <li class="title clearfix"> <span class="list1">订单编号</span> <span class="list2">创建时间</span> <span class="list2">开票金额</span> <span class="list2">是否发出</span> </li> <li class="content clearfix"> <span class="list1">79797979646464646498764</span> <span class="list2">2017-5-19</span> <span class="list2">￥100.00</span> <span class="list2">已发出</span> </li> </ul> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> <style>.invoiceList {\r\n    text-align: center;\r\n  }\r\n\r\n  .invoiceList .cartList .title {\r\n    font-weight: bold;\r\n    background: #EDF3FC;\r\n    color: #666;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    margin: 10px 0 0 0;\r\n    border: 1px solid #e9e9e9;\r\n    border-top: 0;\r\n  }\r\n\r\n  .invoiceList .cartList span {\r\n    float: left;\r\n  }\r\n\r\n  .invoiceList .cartList .list1 {\r\n    width: 40%;\r\n  }\r\n\r\n  .invoiceList .cartList .list2 {\r\n    width: 20%;\r\n  }\r\n\r\n  .invoiceList .cartList .content {\r\n    border-bottom: 1px dotted #80b2ff;\r\n    border-top: 1px dotted #80b2ff;\r\n    height: 48px;\r\n    line-height: 48px;\r\n    margin: 10px 0;\r\n    background-color: #f2f7ff;\r\n  }\r\n\r\n  .invoiceList .shoppingTitle .pull-right {\r\n    margin-right: 20px;\r\n  }</style>'),
    t.put("components/tmLibrary.html", '\x3c!--图书列表--\x3e <div class="library"> <div common-header title-header="booksData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{booksData.TitleNav}}</li> </ol> <form class="form-inline formSearch"> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入要搜索的图书"> </div> <button type="submit" class="btn btn-primary" ng-click="searchCategory({\'title\':searchTitle,page:1})">搜索</button> </form> <div class="libraryList" dw-loading="library"> <div class="libraryTitle" ng-if="booksData.Ptitle==\'\'">{{booksData.TitleNav}} ({{booksData.Count}})</div> <div class="libraryTitle" ng-if="booksData.Ptitle!=\'\'">{{booksData.Ptitle}}&nbsp;({{booksData.Count}})</div> <ul class="libraryContent"> <li ng-repeat="list in booksData.ListData"> <a class="bookImg" ui-sref="bookdetail({Id:list.Id})" target="_blank"> <img ng-src="{{imgPath+\'/\'+list.Icon}}" err-src="images/notFound.c0814127.jpeg" alt="{{list.Name}}"> </a> <p class="name">{{list.Name}}</p> <p class="author">作者:{{list.Author}}</p> <p class="author">点击数:{{list.ClickCount}}</p> <p class="read"><a ui-sref="bookdetail({Id:list.Id})" class="btn btn-primary" target="_blank">阅读本书</a></p> </li> </ul> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmLocation.html", '<div class="container_24 location-container"> \x3c!--搜索结果--\x3e <ol ng-show="isResult" class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li ng-show="Data.CategoryName"> <a ng-show="Data.CategoryName==\'公务员培训\'" ui-sref="csTrainingNews">{{Data.CategoryName}}</a> <a ng-show="Data.CategoryName==\'专业技术人员培训\'" ui-sref="patpTrainingNews">{{Data.CategoryName}}</a> <a ng-show="Data.CategoryName==\'新闻资讯\'" ui-sref="newsinfo">{{Data.CategoryName}}</a> <a ng-show="Data.CategoryName!==\'新闻资讯\'&&Data.CategoryName!==\'专业技术人员培训\'&&Data.CategoryName!==\'公务员培训\'">{{Data.CategoryName}}</a> </li> <li class="active">搜索结果</li> </ol> </div> <style>.breadcrumb {\r\n    background: #FFF;\r\n    margin-bottom: 0px;\r\n    height: 42px;\r\n    padding: 11px 15px;\r\n  }\r\n\r\n  .location-container {\r\n    padding: 0 5px;\r\n    margin-top: 15px;\r\n  }</style>'),
    t.put("components/tmLogin.html", '<div class="tmLogin" dw-loading="login"> <form class="form-signin"> <div class="form-group mar_top_20"> <label for="exampleInputEmail1">用户名</label> <input id="txtAccount" ng-focus="inputFocus()" ng-change="inputChange()" ng-model="login.Account" type="text" class="form-control" my-placeholder id="exampleInputEmail1" placeholder="请输入用户名"> <span class="error" ng-class="showError?\'is-visible\':\'\'">帐号或密码错误！</span> </div> <div class="form-group"> <label for="exampleInputPassword1">密码</label> <input id="txtPwd" ng-focus="inputFocus()" ng-change="inputChange()" ng-model="login.PassWord" type="password" autocomplete="off" class="form-control" my-placeholder id="exampleInputPassword1" placeholder="请输入密码"> </div> <div class="form-group ValidateCodeform clearfix" ng-show="showVerifyCode"> <img id="codeImg" alt="刷新验证码！" class="control-label" ng-click="getVerifyCode()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAWCAYAAABXEBvcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALpSURBVFhH3Vi7ccMwDNU8LjJAJtAYGUIDpE+Vyo1b165Sq3E2SOHS59pNJmAIkKAoCiAhivlcfKfLxyQIPjw8AOrMls+xq9593O3W7e3yZ3XM96vPKHjUPS99qEPAOss5vA6R/7G6CGDrKLaEreteWpqrslUEULJayCjcxlEe/t8yKK0yAezEjxZNNYAtL611rrROClBpX+57AlFrYwHg5NRoBiua8Lf47A/mqjrJrnqzR0HRsQ+yF38fwu6/kI6YNZG+a9jNMhDZdj+YvhmAhBMB2RvzqUL+xxdtZmDw2AOIjAEgT2PVZebMIgAn5lUZlTYRuzcYnTOwbEjWwJSBHkBN8YjyMvGgHsDv0OC4aJD97wPQQj2enH45TezN4V6OEK1w2loPINq5DHh2f7Z2/O9BU/Wu4Mo0VdtXYUEDIVJTURkMJraaljoAlwXlag77qZj1Jwvk02i6R/tTXcgmhCWd07QxqW92j9CMLgB0YCELo+IyXNaEXgegaNGzDuKlq/68pVyhaF5EAlgUaSoqHkRMJ/+BYOS1Sg9gHFiUDWgvgHGUwhw2ytmc7HEmtgFYcgAukbQ2MYBlLuoBJGWYqUOsgeXDxBVbGRiTRD2JkDfXcz8DsSmA2MQ6SWVlVQtgRpMDm4U12xgYx4z0hhjnUxgBDJXYV8RoX3684hmIhQkGE+4VV3zREoBMBrGvoKJpI6WpFkCSGJmBAoDzKrwEcJE3N9s0w8Vu8I0H8B1rt2Oy4AE4uChwJQCTwykgaWBqUlgqtqsBDJMJU0RY0fmwY5sF0F3CtiOvtn98WNH5cFmRTEU1TTYHoqqNwX52+ugnkTiFKa29ZuX13LLNv0Qwx3UzMKUfXAz7wFkR8z1oZTFx7I8fYLyDQwMkrMNslM/3zWvQO64PLE8jcUEovnHJdAGaNyOVWM4ZJWkxYxzvlj001cGkhal9wdDior9hg5MKRRszH6OoD1w3gSyvyzqj8KYlcDXamZ7/BTEJVLcVbV7gAAAAAElFTkSuQmCC"> <input type="text" ng-focus="inputFocus()" ng-model="login.ValidateCode" class="ValidateCode form-control" name="ValidateCode" id="ValidateCode" my-placeholder placeholder="请输入验证码"> <span class="error error2" ng-class="showValidateCodeError?\'is-visible\':\'\'">验证码输入错误！</span> <a ng-click="getVerifyCode()">看不清？换一组</a> </div> <div class="checkbox clearfix"> <label> <input ng-model="login.RememberMe" type="checkbox"> 记住密码 </label> </div> <button ng-click="clickLogin()" type="submit" class="loginBtn btn btn-primary">登录</button> <div class="forgetPassword"> <a ui-sref="forgetPassword">忘记密码？</a> \x3c!--<a ui-sref="userRegister">立即注册</a>--\x3e </div> </form> </div>'),
    t.put("components/tmMessageDetail.html", '\x3c!--留言板详情--\x3e <div class="messageListDetail"> <div common-header title-header="messageDetailData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li><a ui-sref="messageList">留言板</a></li> <li class="active">{{messageDetailData.TitleNav}}</li> </ol> <div class="myTab" dw-loading="studyPlan"> <div class="tab-content" dw-loading="messageListDetail"> <div class="tab-panel perlist clearfix"> <div class="title_bar clearfix"> <h3>{{messageDetailData.TitleNav}}</h3> </div> <div class="message-body grid_20"> <div class="grid_2 mar_top_15 text-right"> {{messageDetailData.Model.UserName}}： </div> <div class="message grid_17 mar_top_5"> <div class="panel panel-warning"> <div class="panel-heading"> <div class="panel-title"> <p>{{messageDetailData.Model.Name}} </p> </div> </div> <div class="panel-body well" style="margin-bottom:0px"> <div class="message-info"> <div class="message-content grid_10"> {{messageDetailData.Model.Content}} </div> <div class="message-time grid_6 text-right"> <span ng-if="messageDetailData.Model.Class==\'Curricula\'">课程建设</span><br> <span ng-if="messageDetailData.Model.Class==\'Support\'">支持服务</span><br> <span ng-if="messageDetailData.Model.Class==\'Platform\'">平台功能</span><br> <span>{{messageDetailData.Model.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</span> </div> </div> <div ng-repeat="item in messageDetailData.Model.ReplyMessageList"> <div class="grid_2 mar_top_15 text-right"> {{item.UserName}}： </div> <div class="message grid_14 mar_top_5"> <div class="panel panel-success"> <div class="panel-heading"> <div class="panel-title"> <p>{{item.Name}} </p> </div> </div> <div class="panel-body"> <div class="message-info"> <div class="message-content grid_8"> {{item.Content}} </div> <div class="message-time grid_5 text-right"> <span>{{item.Class}}</span><br><br> <span>{{item.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</span> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmMessageList.html", '\x3c!--留言板--\x3e <div class="messageList"> <div common-header title-header="\'留言板\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">{{messageListData.TitleNav}}</li> </ol> <div class="messageTitle"> <h4>{{messageListData.TitleNav}}</h4> <a class="btn btn-primary" data-toggle="modal" data-target=".notemodal">添加留言</a> </div> <div class="myTab" dw-loading="studyPlan"> <div class="tab-content" dw-loading="messageList"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list1-5">序号</span> <span class="list3-5">标题</span> <span class="list1-5">分类</span> <span class="list3-5">日期</span> </div> <div class="list" ng-repeat="messageList in messageListData.ListData"> <span class="list1-5">{{$index+1}}</span> <span class="list3-5" title="{{messageList.Name}}"><a ui-sref="messageDetail({Id:messageList.Id})">{{messageList.Name}}</a></span> <span class="list1-5" ng-if="messageList.Class==\'Curricula\'">课程建设</span> <span class="list1-5" ng-if="messageList.Class==\'Support\'">支持服务</span> <span class="list1-5" ng-if="messageList.Class==\'Platform\'">平台功能</span> <span class="list1-5" ng-if="!messageList.Class">无</span> <span class="list3-5">{{messageList.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</span> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> \x3c!--添加留言--\x3e <div class="modal fade notemodal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">添加留言</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>标题</td> <td><input class="form-control" type="text" ng-model="messageName"></td> </tr> <tr> <td>分类</td> <td> <select class="form-control" ng-model="messageClass" ng-options="x.value as x.name for x in allClass"></select> </td> </tr> <tr> <td>说明</td> <td> <textarea class="form-control" ng-model="messageContent" cols="50" rows="5"></textarea> </td> </tr> </tbody> </table> <div class="addMessage"> <a ng-click="addMessage({Name:messageName,Class:messageClass,Content:messageContent})" class="btn btn-primary">提交</a> </div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmModifyPassword.html", '\x3c!--修改密码--\x3e <div class="modifyPassword"> <div common-header title-header="\'修改密码\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">修改密码</li> </ol> <div class="modify-password"> <form role="form"> <div class="form-group modify-password-form"> <ul> <input type="password" autocomplete="off" style="display: none"> <li> <span class="control-label grid_6 text-right">旧密码：</span> <input id="txtOldPwd" ng-model="txtOldPwd" ng-required="true" class="inputPWD form-control grid_6" name="OldPwd" type="password" autocomplete="off" my-placeholder placeholder="请输入原密码"> </li> <li> <span class="control-label grid_6 text-right">新密码：</span> <input id="txtNewPwd" ng-model="txtNewPwd" ng-required="true" class="inputPWD form-control grid_6" name="NewPwd" type="password" autocomplete="off" my-placeholder placeholder="请输入新密码"> </li> <li> <span class="control-label grid_6 text-right">重复新密码：</span> <input id="txtRepeatNewPwd" ng-model="txtRepeatNewPwd" ng-required="true" class="inputPWD form-control grid_6" name="RepeatNewPwd" type="password" autocomplete="off" my-placeholder placeholder="请输入确认密码"> </li> <li> <button class="btn btn-primary" ng-click="modifyPwd()">确定</button> </li> <li> <a ui-sref="securitySetting" class="btn btn-default">设置密保</a> </li> </ul>  </div> </form> </div> </div> </div>'),
    t.put("components/tmMyCenter.html", '\x3c!--个人中心--\x3e <div class="myCenter"> <div common-header title-header="\'个人中心\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">个人中心</li> </ol> <form class="form-inline formSearch"> <select class="form-control" ng-init="selectedName = courseStatus[0]" ng-model="selectedName" ng-options="x.name for x in courseStatus"> </select> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入要搜索的课程"> </div> <button type="submit" class="btn btn-primary" ng-click="searchMyCenterCourse({page:1,courseType:selectedName.id,title:searchTitle})">搜索 </button> </form> <div class="myTab"> <ul class="nav nav-tabs" ng-init="vm.activeTab=1"> <li ng-class="{active: vm.activeTab == 1}"><a ng-click="vm.activeTab = 1;searchMyCenterCourse({courseType:\'Unfinish\',title:searchTitle,page:1})">正在学习的课程 <span>({{TotalData.UnfinishCount}})</span></a></li> \x3c!--<li ng-class="{active: vm.activeTab == 2}"><a\n            ng-click="vm.activeTab = 2;searchMyCenterCourse({courseType:\'Appointed\',title:searchTitle,page:1})">指定到您的课程<span>({{TotalData.AppointedCount}})</span></a>\n        </li>--\x3e <li ng-class="{active: vm.activeTab == 3}"><a ng-click="vm.activeTab = 3;searchMyCenterCourse({courseType:\'Finish\',title:searchTitle,page:1})">已完成的课程 <span>({{TotalData.FinishCount}})</span></a></li> </ul> <div class="tab-content" dw-loading="myCenter"> <div class="tab-panel perlist" ng-show="vm.activeTab == 1"> <div class="title_bar"> <div class="list3">课程名称</div> <div class="list1-5"> <a class="getorder" ng-click="learningProgress(\'Unfinish\')"><span>▼</span>学习进度</a> </div> <div class="list0-75">学时</div> <div class="list1-5">类型</div> <div class="list0-75">播放</div> <div class="list0-75">笔记</div> <div class="list0-75">计划</div> \x3c!--<div class="list0-75">测试</div>--\x3e <div class="list0-75">删除</div> </div> <div class="list" ng-repeat="unFinish in TotalData.ListData.UnfinishModel"> <div class="list3 ellipsis" title="{{unFinish.Name}}"> <a ui-sref="courseDetails({Id:unFinish.Id})" target="_blank">{{unFinish.Name}}</a> </div> <div class="list1-5"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{unFinish.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':unFinish.BrowseScore+\'%\'};"> {{unFinish.BrowseScore.toFixed(1)}}% </div> </div> </div> <div class="list0-75">{{unFinish.Credit}}</div> <div class="list1-5">{{unFinish.Type}}</div> <div class="list0-75"><a ui-sref="play({Id:unFinish.Id})" target="_blank">播放</a></div> <div class="list0-75" ng-if="unFinish.NoteFlag"><a ng-click="seeNote(unFinish.Id,unFinish.Name)" data-toggle="modal" data-target=".notemodal">查看</a></div> <div class="list0-75" ng-if="!unFinish.NoteFlag"><a ng-click="nodeAdd(unFinish.Id)" data-toggle="modal" data-target=".notemodal">添加</a></div> <div class="list0-75" ng-if="unFinish.PlanId"><a ng-click="seePlan(unFinish.PlanId,unFinish.Name)" data-toggle="modal" data-target=".notemodal2">查看</a></div> <div class="list0-75" ng-if="!unFinish.PlanId"><a ng-click="planAdd(unFinish.Id)" data-toggle="modal" data-target=".notemodal2">添加</a></div> \x3c!--<div ng-if="unFinish.ExamFlag&&unFinish.BrowseScore<100" class="list0-75">有考试</div>\n            <div ng-if="unFinish.ExamFlag&&unFinish.BrowseScore==100" class="list0-75"><a\n                ng-click="courseExamList(unFinish.Id)" data-toggle="modal" data-target=".seeTest">查看</a></div>\n            <div ng-if="!unFinish.ExamFlag" class="list0-75">无</div>--\x3e <div class="list0-75"><a class="del" ng-click="deleatUserCourse(unFinish.Id)"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></div> </div> <div ng-transclude="pagation"></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 2"> <div class="title_bar"> <div class="list3">课程名称</div> <div class="list1-5"><a ng-click="learningProgress(\'Appointed\')" class="getorder"><span>▼</span>学习进度</a> </div> <div class="list0-75">学时</div> <div class="list1-5">类型</div> <div class="list0-75">播放</div> <div class="list0-75">笔记</div> <div class="list0-75">计划</div> \x3c!--<div class="list0-75">测试</div>--\x3e <div class="list0-75">删除</div> </div> <div class="list" ng-repeat="Appointed in TotalData.ListData.AppointedModel"> <div class="list3 ellipsis" title="{{Appointed.Name}}"><a ui-sref="courseDetails({Id:Appointed.Id})" target="_blank">{{Appointed.Name}}</a></div> <div class="list1-5"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{Appointed.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':Appointed.BrowseScore+\'%\'};"> {{Appointed.BrowseScore.toFixed(1)}}% </div> </div> </div> <div class="list0-75">{{Appointed.Credit}}</div> <div class="list1-5">{{Appointed.Type}}</div> <div class="list0-75"><a ui-sref="play({Id:Appointed.Id})" target="_blank">播放</a></div> <div class="list0-75" ng-if="Appointed.NoteFlag"><a ng-click="seeNote(Appointed.Id,Appointed.Name)" data-toggle="modal" data-target=".notemodal">查看</a> </div> <div class="list0-75" ng-if="!Appointed.NoteFlag"><a ng-click="nodeAdd(Appointed.Id)" data-toggle="modal" data-target=".notemodal">添加</a></div> <div class="list0-75" ng-if="Appointed.PlanId"><a ng-click="seePlan(Appointed.PlanId,Appointed.Name)" data-toggle="modal" data-target=".notemodal2">查看</a></div> <div class="list0-75" ng-if="!Appointed.PlanId"><a ng-click="planAdd(Appointed.Id)" data-toggle="modal" data-target=".notemodal2">添加</a></div> \x3c!--<div ng-if="Appointed.ExamFlag&&Appointed.BrowseScore<100" class="list0-75">有考试</div>\n            <div ng-if="Appointed.ExamFlag&&Appointed.BrowseScore==100" class="list0-75"><a\n                ng-click="courseExamList(Appointed.Id)" data-toggle="modal" data-target=".seeTest">查看</a></div>\n            <div ng-if="!Appointed.ExamFlag" class="list0-75">无</div>--\x3e <div class="list0-75"><a class="del" ng-click="deleatUserCourse(Appointed.Id)"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></div> </div> <div ng-transclude="pagation"></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 3"> <div class="title_bar"> <div class="list3">课程名称</div> <div class="list1-5"><a ng-click="learningProgress(\'Finish\')" class="getorder"><span>▼</span>学习进度</a></div> <div class="list1-5">学时</div> <div class="list1-5">类型</div> <div class="list0-75">播放</div> <div class="list0-75">笔记</div> <div class="list0-75">计划</div> \x3c!--<div class="list0-75">测试</div>--\x3e \x3c!--<div class="list0-75">删除</div>--\x3e </div> <div class="list" ng-repeat="Finish in TotalData.ListData.FinishModel"> <div class="list3 ellipsis" title="{{Finish.Name}}"> <a ui-sref="courseDetails({Id:Finish.Id})" target="_blank">{{Finish.Name}}</a> </div> <div class="list1-5"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{Finish.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':Finish.BrowseScore+\'%\'};"> {{Finish.BrowseScore.toFixed(1)}}% </div> </div> </div> <div class="list1-5">{{Finish.HistoryFlag?"历年":Finish.Credit}}</div> <div class="list1-5">{{Finish.Type}}</div> <div class="list0-75"><a ui-sref="play({Id:Finish.Id})" target="_blank">播放</a></div> <div class="list0-75" ng-if="Finish.NoteFlag"><a ng-click="seeNote(Finish.Id,Finish.Name)" data-toggle="modal" data-target=".notemodal">查看</a></div> <div class="list0-75" ng-if="!Finish.NoteFlag"><a ng-click="nodeAdd(Finish.Id)" data-toggle="modal" data-target=".notemodal">添加</a></div> <div class="list0-75" ng-if="Finish.PlanId"><a ng-click="seePlan(Finish.PlanId,Finish.Name)" data-toggle="modal" data-target=".notemodal2">查看</a></div> <div class="list0-75" ng-if="!Finish.PlanId"><a ng-click="planAdd(Finish.Id)" data-toggle="modal" data-target=".notemodal2">添加</a></div> \x3c!--<div ng-if="Finish.ExamFlag&&Finish.BrowseScore<100" class="list0-75">有考试</div>\n            <div ng-if="Finish.ExamFlag&&Finish.BrowseScore==100" class="list0-75"><a\n                ng-click="courseExamList(Finish.Id)" data-toggle="modal" data-target=".seeTest">查看</a></div>\n            <div ng-if="!Finish.ExamFlag" class="list0-75">无</div>--\x3e \x3c!--<div class="list0-75"><a class="del" ng-click="deleatUserCourse(Finish.Id)"><span\n                class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></div>--\x3e </div> <div ng-transclude="pagation"></div> </div> </div> </div> \x3c!-- Modal笔记 --\x3e <div class="modal fade notemodal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content" ng-show="modalBody1"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">添加笔记</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>课程名称：</td> <td>{{nodeAddData.CourseName}}</td> </tr> <tr> <td>笔记名称：</td> <td> <input class="form-control" type="text" ng-model="noteName"> </td> </tr> <tr> <td>内 容：</td> <td> <textarea class="form-control" ng-model="noteContent" cols="50" rows="5"></textarea> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="editNote({Name:noteName,Content:noteContent,CourseId:nodeAddData.CourseId})" type="button" class="btn btn-primary">提交 </button> </div> </div> <div class="modal-content" ng-show="modalBody2"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">{{seeNoteData.CourseName}}</h4> </div> <div class="modal-body" ng-show="modalBody21"> <table class="table table-bordered"> <tbody> <tr ng-repeat="seeList in seeNoteData.ListData"> <td>笔记名称：</td> <td class="seaNote"> <span class="pull-left">{{seeList.Name}}</span> <a class="pull-right" ng-click="delNote(seeList.Id)">删除</a> <a class="pull-right" ng-click="noteUpdate(seeList.Id)">编辑</a> </td> </tr> <tr> <td colspan="2"> <div class="content_page"> <span class="p_num current">{{seeNoteData.Page}}</span><span>共 {{Math.ceil(seeNoteData.Count/seeNoteData.Rows)}} 页,总记录 {{seeNoteData.Count}} 条</span> <a class="btn btn-primary newNote pull-right" ng-click="nodeAdd(courseId)">添加笔记</a> </div> </td> </tr> </tbody> </table> </div> <div class="modal-body" ng-hide="modalBody21"> <table class="table table-bordered"> <tbody> <tr> <td>笔记名称：</td> <td> <input class="form-control" type="text" ng-model="noteName"> </td> </tr> <tr> <td>内 容：</td> <td> <textarea class="form-control" ng-model="noteContent" cols="50" rows="5"></textarea> </td> </tr> </tbody> </table> </div> <div class="modal-footer" ng-hide="modalBody21"> <button ng-click="addNoteUpdate({Name:noteName,Content:noteContent})" type="button" class="btn btn-primary">提交 </button> <button type="button" class="btn btn-default" data-dismiss="modal">取消</button> </div> </div> </div> </div> \x3c!-- Modal计划 --\x3e <div class="modal fade notemodal2" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content" ng-show="modalBody1"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">添加计划</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>课程名称：</td> <td style="text-align: left">{{planAddData.CourseName}}</td> </tr> <tr> <td>计划完成日期：</td> <td> <div class="datePicker"> <input class="form-control" type="text" ng-model="PlanFinishDate" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> </tr> <tr> <td>开始提醒日期：</td> <td> <div class="datePicker"> <input class="form-control" type="text" ng-model="RemindDate" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> </tr> <tr> <td>提醒周期：</td> <td style="text-align: left"> <select class="form-control" ng-init="selectedName2 = remindCycle[0]" ng-model="selectedName2" ng-options="x for x in remindCycle"> </select> </td> </tr> <tr> <td>提醒方式：</td> <td style="text-align: left"> 站内通知 </td> </tr> <tr> <td>计划说明：</td> <td> <textarea class="form-control" ng-model="planAddData.planAddData" cols="50" rows="5"></textarea> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="addPlan({PlanFinishDate:PlanFinishDate,RemindDate:RemindDate,RemindCycle:selectedName2,Remark:planAddData.planAddData,CourseId:planAddData.CourseId})" type="button" class="btn btn-primary">提交 </button> </div> </div> <div class="modal-content" ng-show="modalBody2"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">修改计划</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>课程名称：</td> <td style="text-align: left">{{seePlanData.CourseName}}</td> </tr> <tr> <td>计划完成日期：</td> <td> <div class="datePicker"> <input class="form-control" type="text" ng-model="PlanFinishDate2" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> </tr> <tr> <td>开始提醒日期：</td> <td> <div class="datePicker"> <input class="form-control" type="text" ng-model="RemindDate2" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> </tr> <tr> <td>提醒周期：</td> <td style="text-align: left"> <select class="form-control" ng-model="selectedName3" ng-options="x for x in remindCycle"> </select> </td> </tr> <tr> <td>提醒方式：</td> <td style="text-align: left"> 站内通知 </td> </tr> <tr> <td>计划说明：</td> <td> <textarea class="form-control" ng-model="seePlanData.Remark" cols="50" rows="5"></textarea> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="addPlanUpdate({PlanFinishDate:PlanFinishDate2,RemindDate:RemindDate2,RemindCycle:selectedName3,Remark:seePlanData.Remark,CourseId:seePlanData.CourseId,Id:seePlanData.Id})" type="button" class="btn btn-primary">提交 </button> </div> </div> </div> </div> \x3c!--Modal查看考试--\x3e <div class="modal fade seeTest" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">考试列表</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <thead> <tr> <th>考试名称</th> <th>考试学时</th> <th>时限</th> <th>参加测试</th> <th>查看考试成绩</th> </tr> </thead> <tbody> <tr ng-repeat="test in courseExamListData.ListData"> <td>{{test.Name}}</td> <td>{{test.CreditHour}}</td> <td>{{test.TimeLimit}}</td> <td><a ng-click="havTest(test.Id)">参加测试</a></td> <td><a ui-sref="examDetailList({Id:test.Id})" target="_blank">查看考试成绩</a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmMyFavorite.html", '\x3c!--我的收藏--\x3e <div class="myFavorite"> <div common-header title-header="myFavoriteData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">{{myFavoriteData.TitleNav}}</li> </ol> <div class="myTab" dw-loading="myFavorite"> <div class="tab-content"> <div class="tab-panel perlist clearfix"> <div class="title_bar"> <span class="list5">标题</span> <span class="list2-5">类型</span> <span class="list2-5">操作</span> </div> <div class="list" ng-repeat="favoriteList in myFavoriteData.ListData"> <span class="list5 ellipsis" title="{{favoriteList.Title}}">{{favoriteList.Title}}</span> <span ng-if="favoriteList.Type==\'Course\'" class="list2-5">课程</span> <span ng-if="favoriteList.Type==\'Article\'" class="list2-5">文章</span> <span ng-if="favoriteList.Type==\'Notice\'" class="list2-5">公告</span> <span ng-if="favoriteList.Type==\'Book\'" class="list2-5">图书</span> <span ng-if="favoriteList.Type==\'BookChapter\'" class="list2-5">图书章节</span> <span ng-if="favoriteList.Type!=\'Course\'&&favoriteList.Type!=\'Article\'&&favoriteList.Type!=\'Notice\'&&favoriteList.Type!=\'Book\'&&favoriteList.Type!=\'BookChapter\'" class="list2-5">其他</span> <span ng-if="favoriteList.Type==\'Course\'" class="list2-5"> <a ui-sref="courseDetails({Id:favoriteList.MainId})" target="_blank">查看</a> <a class="fav" href="javascript:;" ng-click="favoriteDelete({id:favoriteList.Id},token);">[取消收藏]</a> </span> <span ng-if="favoriteList.Type==\'Article\'" class="list2-5"> <a ui-sref="articleDetail({ID:favoriteList.MainId})" target="_blank">查看</a> <a class="fav" href="javascript:;" ng-click="favoriteDelete({id:favoriteList.Id},token);">[取消收藏]</a> </span> <span ng-if="favoriteList.Type==\'Notice\'" class="list2-5"> <a ui-sref="noticeDetail({ID:favoriteList.MainId})" target="_blank">查看</a> <a class="fav" href="javascript:;" ng-click="favoriteDelete({id:favoriteList.Id},token);">[取消收藏]</a></span> <span ng-if="favoriteList.Type==\'Book\'" class="list2-5"> <a ui-sref="bookdetail({Id:favoriteList.MainId})" target="_blank">查看</a> <a class="fav" href="javascript:;" ng-click="favoriteDelete({id:favoriteList.Id},token);">[取消收藏]</a></span> <span ng-if="favoriteList.Type==\'BookChapter\'" class="list2-5"> <a ui-sref="bookchaptercontent({Id:favoriteList.MainId})" target="_blank">查看</a> <a class="fav" href="javascript:;" ng-click="favoriteDelete({id:favoriteList.Id},token);">[取消收藏]</a></span> <span ng-if="favoriteList.Type!=\'Course\'&&favoriteList.Type!=\'Article\'&&favoriteList.Type!=\'Notice\'&&favoriteList.Type!=\'Book\'&&favoriteList.Type!=\'BookChapter\'" class="list2-5"> <a ui-sref="courseDetails({Id:favoriteList.MainId})" target="_blank">查看</a> <a class="fav" href="javascript:;" ng-click="favoriteDelete({id:favoriteList.Id},token);">[取消收藏]</a> </span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmNavbars.html", '\x3c!--导航--\x3e <div class="navBg"> <div class="container_24 nav_container"> <ul class="nav nav-tabs"> <li role="presentation" ui-sref-active="active"><a ui-sref="main">首页</a></li> <li role="presentation" ui-sref-active="active"><a ui-sref="noticelist">通知公告</a></li> <li role="presentation" ui-sref-active="active"><a ui-sref="courseCenter">在线学习</a></li> \x3c!--<li role="presentation" ui-sref-active="active"><a ui-sref="testCenter">在线考试</a></li>--\x3e <li role="presentation" ui-sref-active="active"><a ui-sref="personalCenter">个人中心</a></li> <li role="presentation" ui-sref-active="active"><a ui-sref="article({categoryCode:\'onlineHelp\'})">使用帮助</a></li> \x3c!--<li role="presentation" ui-sref-active="active"><a class="w_200" href="http://bm.kccl.org.cn/default.aspx" target="_blank">原市本级公需课报名系统</a>--\x3e  </ul> <div class="input-group"> <input ng-model="searchNewsField" type="text" class="form-control" my-placeholder placeholder="请输入搜索内容..."> <i class="searchBg fa fa-search fa-2x" ng-click="findNews()" aria-hidden="true"></i> </div> </div> </div>'),
    t.put("components/tmNewsInformation.html", '\x3c!--新闻资讯--\x3e <div class="tmNewsInformation"> <div class="title"> {{title}} <a class="more" ng-click="getMore()">MORE</a> </div> <ul class="news_list clearfix"> <li class="pull-left" ng-repeat="item in newsData.ListData"> <span class="arrow"></span> <span class="title" title="{{item.Name}}"> <a ng-click="getDetail(item)">{{item.Name}}</a> </span> <span class="time">{{item.CreateDate | dateFilter |date :\'yyyy-MM-dd\'}}</span> </li> </ul> </div>'),
    t.put("components/tmNewsPhoto.html", '<div id="newsPhoto" class="news mar_top_15"> <div class="com-header com-header-blue" style="margin-left: 0px"> <h4 class="pull-left">图片新闻</h4> <a ui-sref="newsinfo({ID:newsData.photoNews.ID})" class="pull-right" target="_blank">更多&nbsp;&nbsp;+</a> </div> <div class="news-body" dw-loading="tmnewsphoto"> <div class="grid_8 pull-left"> <img class="news_img" ng-src="{{ImgSrc}}" err-src="images/notFound.c0814127.jpeg"> </div> <div class="grid_15"> <ul> <li title="{{photoNewsData.Name}}" ng-repeat="photoNewsData in newsData.photoNews.data"> <a ui-sref="articleDetail({ID:photoNewsData.Id})" class="clearfix" target="_blank"> <h5 class="pull-left"><span class="dian"></span>{{photoNewsData.Name}}</h5> <p class="newsTime pull-right">{{photoNewsData.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</p> </a> </li> </ul> </div> </div> </div> <style>#newsPhoto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 98%;\r\n  }\r\n\r\n  #newsPhoto .newsTime {\r\n    padding-right: 0;\r\n  }\r\n\r\n  .news_img {\r\n    padding: 10px 0 10px 10px;\r\n    width: 350px;\r\n    height: 240px;\r\n  }\r\n\r\n  .news .news-body {\r\n    min-height: 250px;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .news .news-body .grid_15 {\r\n    margin-left: 16px;\r\n  }\r\n\r\n  .news .news-body li {\r\n    height: 35px;\r\n  }\r\n\r\n  .news .news-body li > a {\r\n    display: block;\r\n  }\r\n\r\n  .news .news-body h5 {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #333;\r\n    line-height: 30px;\r\n    max-width: 600px;\r\n    min-width: 400px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n  }\r\n\r\n  .news .news-body a:hover h5 {\r\n    color: #62a3db;\r\n  }\r\n\r\n  .news .news-body li > p {\r\n    font-size: 15px;\r\n    color: #7f7f7f;\r\n    line-height: 23px;\r\n    margin-bottom: 7px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .news span.dian {\r\n    display: inline-block;\r\n    margin: 5px 10px;\r\n    vertical-align: middle;\r\n  }</style>'),
    t.put("components/tmNewsWithPhoto.html", '<div class="newsWithPhoto mar_top_15"> <div class="com-header com-header-blue" style="margin-left: 0px"> <h4 class="pull-left">{{newsData.CategoryName}}</h4> </div> <div class="container_24" dw-loading="tmnewswithphoto"> <div ng-repeat="x in newsData.ListData" class="news-with-photo container_24 grid_11 pull-left mar_top_15 mar_left_10"> <img title="{{x.Name}}" class="grid_4" ng-src="{{newsData.Path+\'/\'+x.Img}}" err-src="images/notFound.c0814127.jpeg"> <div class="news-with-photo news-with-photo-content grid_7"> <p class="news-with-photo news-with-photo-name"> <a title="{{x.Name}}" ui-sref="articleDetail({ID:x.Id})" class="" target="_blank">{{x.Name}}</a> <span class="pull-right">{{x.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> </p> <p class="news-with-photo news-with-photo-desc"> {{x.Description}} </p> </div> </div> <div ng-show="!newsData.ListData.length" class="result"> 暂无数据 </div> </div> </div> <style>.newsWithPhoto {\r\n    width: 98%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .news-with-photo img {\r\n    -webkit-border-radius: 3px;\r\n    -moz-border-radius: 3px;\r\n    border-radius: 3px;\r\n    height: 132px;\r\n  }\r\n\r\n  .news-with-photo-content {\r\n    padding: 0 5px 2px 5px;\r\n\r\n  }\r\n\r\n  .news-with-photo-name > a {\r\n    color: #333;\r\n    display: inline-block;\r\n    width: 75%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    height: auto;\r\n  }\r\n\r\n  .news-with-photo-name > a:hover {\r\n    color: #62a3db;\r\n  }\r\n\r\n  .news-with-photo .news-with-photo-desc {\r\n    color: #9c9c9c;\r\n    max-height: 104px;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .news-with-photo-name span {\r\n    color: #62a3db;\r\n  }</style>'),
    t.put("components/tmNewsWithoutPhoto.html", '<div class="news mar_top_15"> <div class="com-header com-header-{{$parent.classStyle}}" style="margin-left: 0px"> <h4 class="pull-left">{{myNewsData.CategoryName}}</h4> </div> <div class="news-body" dw-loading="tmnewswithoutphoto"> <p ng-show="!myNewsData.ListData.length" class="result">暂无数据</p> <ul> <li title="{{Data.Name}}" ng-repeat="Data in myNewsData.ListData"> <a ui-sref="articleDetail({ID:Data.Id})" class="clearfix" target="_blank"> <h5 class="pull-left"><span class="dian"></span>{{Data.Name}}</h5> <p class="newsTime pull-right">{{Data.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</p> </a> </li> </ul> </div> </div> <style>.news {\r\n    width: 98%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .news .news-body p {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .news-body li {\r\n    margin: 5px 10px;\r\n  }\r\n\r\n  .news .news-body h5 {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #333;\r\n    padding-left: 10px;\r\n    line-height: 30px;\r\n    max-width: 600px;\r\n    min-width: 400px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n\r\n  }\r\n\r\n  .news .news-body a:hover h5 {\r\n    color: #62a3db;\r\n  }</style>'),
    t.put("components/tmNoticeAnnouncement.html", '\x3c!--@*通知公告 轮播*@--\x3e <div class="noticeAnnouncement"> <div class="notice" dw-loading="noticeAnnouncement"> \x3c!--轮播--\x3e <div class="noticeSlide"> <div class="noticeSlideList" ng-repeat="list in noticeData.ListData" repeat-finish="repeatFinish()"> <a ui-sref="noticeDetail({ID:list.Id})" target="_blank"> <img ng-src="{{noticeData.Path+\'/\'+list.Img}}" title="{{list.Name}}" err-src="images/notFound.c0814127.jpeg"> </a> <p class="titleBg"></p> <p class="titleName"> <a class="ellipsis" ui-sref="articleDetail({ID:list.Id})" title="{{list.Name}}" target="_blank"> {{list.Name}} </a> </p> </div> </div> \x3c!--列表--\x3e <div class="notice-body clearfix"> <div class="notice-body-left pull-left">通知公告</div> <div class="notice-body-right pull-left"> <ul> <li ng-repeat="list in noticeData.ListData"> <a class="title" ui-sref="noticeDetail({ID:list.Id})" title="{{list.Name}}" target="_blank"> <i class="glyphicon glyphicon-triangle-right"></i> {{list.Name}} </a> <span class="time">{{list.CreateDate | dateFilter |date :\'yyyy-MM-dd\'}}</span> </li> </ul> </div> </div> </div> </div>'),
    t.put("components/tmNoticeList.html", '\x3c!--通知列表--\x3e <div class="articleList"> <div common-header title-header="noticeTitle" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active"> <span ng-show="noticeListData.CategoryName">{{noticeListData.CategoryName}}</span> <span ng-hide="noticeListData.CategoryName">{{noticeListData.TitleNav}}</span> </li> </ol> <form class="form-inline formSearch"> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入搜索关键词"> </div> <button type="submit" class="btn btn-primary" ng-click="getNoticeList({page:1,search:searchTitle})">搜索</button> </form> <div dw-loading="articleList" class="mar_top_20"> <table class="table" ng-show="paginationConf.totalItems"> <tr> <th class="titleName">文章名称</th> <th class="titleDate">发布日期</th> </tr> <tr ng-repeat="listData in noticeListData.ListData | filter:{Name:search}"> <td class="name"> <span class="arrow"></span> <a ui-sref="noticeDetail({ID:listData.Id})" title="{{listData.Name}}" target="_blank">{{listData.Name}}</a> </td> <td class="listDate">{{listData.CreateDate | dateFilter | date:\'yyyy/MM/dd-HH:mm:ss\'}}</td> </tr> </table> <div ng-show="paginationConf.totalItems" class="mar_top_5" tm-pagation conf="paginationConf"></div> <p ng-show="!paginationConf.totalItems" class="result">暂无数据</p> </div> </div> </div>'),
    t.put("components/tmOrderConfirm.html", '<div class="orderConfirm" dw-loading="orderConfirm"> <ul> <li>商户订单号:{{invoiceData.OrderId}}</li> <li>商品名称:{{invoiceData.Title}}</li> <li>购买时间:{{invoiceData.CreateTime | dateFilter | date :\'yyyy-MM-dd HH:mm:ss\'}}</li> <li>交易类型： {{invoiceData.Type}}</li> <li>交易金额:￥{{invoiceData.Money.toFixed(2)}}</li> </ul> <button type="button" ng-click="getConfirmPay()" class="btn btn-primary">确认支付</button> </div> <div class="payContent justify" ng-bind-html="payContent | trustHtml"></div> <style>.orderConfirm {\r\n    width: 600px;\r\n    margin: 100px auto;\r\n    border: 1px solid #80b2ff;\r\n    background-color: #f2f7ff;\r\n    min-height: 350px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .orderConfirm ul {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .orderConfirm ul li {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .orderConfirm .btn {\r\n    margin-top: 20px;\r\n  }</style>'),
    t.put("components/tmOrderDetailList.html", '\x3c!--订单详细--\x3e <div class="orderDetailList"> <div common-header title-header="\'订单详细\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <h3 class="shoppingTitle"><span class="verticalLine"></span>订单详细</h3> <div class="cartList" dw-loading="orderDetailList"> <ul> <div class="title clearfix"> <span class="list3">商品名称</span> <span class="list1">类型</span> <span class="list1">数量</span> <span class="list1-5">单价</span> <span class="list1-5">总价</span> <span class="list1-5">状态</span> </div> <li class="content clearfix" ng-repeat="list in orderDetailListData.ListData"> <span class="list3"><a ui-sref="courseDetails({Id:list.Id})" target="_blank" title="{{list.ProductName}}">{{list.ProductName}}</a></span> <span class="list1">{{list.ProductType==\'Course\'?\'课程\':\'图书\'}}</span> <span class="list1">{{list.Count}}</span> <span class="list1-5">￥{{list.Price.toFixed(2)}}</span> <span class="list1-5">￥{{list.TotalPrice.toFixed(2)}}</span> <span ng-if="orderDetailListData.OrderStatus == 0 || orderDetailListData.OrderStatus == -1" class="list1-5">等待付款</span> <span ng-if="orderDetailListData.OrderStatus >= 1 " class="list1-5">交易成功</span> <span ng-if="orderDetailListData.OrderStatus == -2" class="list1-5">交易关闭</span> </li> </ul> <div class="bottom clearfix" ng-if="orderDetailListData.OrderStatus== -1"> <p class="bottomInfo"> 状态:等待付款 </p> <div class="radio"> <label> <input type="radio" name="payType" ng-model="payType" id="ctl09_rblPayType_0" ng-value="1" checked> <img src="images/alipay.258c50a7.png" alt="支付宝"> </label> </div> <div class="radio"> <label> <input type="radio" name="payType" ng-model="payType" id="ctl09_rblPayType_1" ng-value="2"> <img src="images/weixinpay.620384ba.png" alt="微信"> </label> </div> <div class="radio"> <label> <input type="radio" name="payType" ng-model="payType" id="ctl09_rblPayType_2" ng-value="4"> 现金面付： 您可以直接前往收费点，当面支付现金，立即开通课程。 </label> </div> <span class="totalPrice">总价：¥{{orderDetailListData.TotalPrice.toFixed(2)}}</span> <a ng-click="goPayConfirm(payType)" class="btn btn-primary">去支付</a> </div> </div> </div> </div>'),
    t.put("components/tmOrderList.html", '\x3c!--我的订单--\x3e <div class="orderList"> <div common-header title-header="\'我的订单\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div class="cartList" dw-loading="orderList"> <ul> <div class="title clearfix"> <span class="list3">订单商品</span> <span class="list1">单价</span> <span class="list1">数量</span> <span class="list1">实付款</span> <span class="list2">交易状态</span> <span class="list2">交易操作</span> </div> <li class="content clearfix" ng-repeat="orderList in orderListData.ListData"> <table class="table table-bordered"> <thead> <tr class="info" style="text-align: left"> <td colspan="6"> <span>{{orderList.CreateTime | dateFilter | date:\'yyyy-MM-dd\'}}&nbsp;&nbsp;&nbsp;&nbsp;</span> <span>订单号：{{orderList.Id}}</span> <a ng-if="orderList.Status!=\'HasPay\'" ng-click="delOrder(orderList.Id)" class="pull-right del"> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> </a> </td> </tr> </thead> <tbody> <tr ng-repeat="list in orderList.OrderDetail"> <td class="item1"><a ui-sref="courseDetails({Id:list.ProductId})" target="_blank" title="{{list.ProductName}}">{{list.ProductName}}</a></td> <td class="item2">￥{{list.Price.toFixed(2)}}</td> <td class="item2">{{list.Count}}</td> <td ng-if="$index==0" class="item2" rowspan="2">￥{{orderList.TotalPrice.toFixed(2)}}</td> <td ng-if="$index==0" class="item3" rowspan="2"> <div> <p ng-if="orderList.Status==\'NoPay\'">等待付款</p> <p ng-if="orderList.Status==\'HasPay\'">交易成功</p> <p ng-if="orderList.Status==\'Close\'">交易关闭</p> <div><a ui-sref="orderdetaillist({orderId:orderList.Id})" target="_blank">订单详情</a></div> </div> </td> <td ng-if="$index==0" class="item3" rowspan="2"> <div> <p ng-if="orderList.Status==\'NoPay\'"><a ui-sref="orderdetaillist({orderId:orderList.Id})" class="btn btn-primary">立即付款</a></p> <p ng-if="orderList.Status==\'NoPay\'"><a ng-click="cancelOrder(orderList.Id)">取消订单</a></p> <p ng-if="orderList.Status==\'HasPay\'">交易成功</p> <p ng-if="orderList.Status==\'Close\'"><a ng-click="restoreOrder(orderList.Id)" class="btn btn-primary">再次购买</a> </p> </div> </td> </tr> </tbody> </table> </li> </ul> </div> <div tm-pagation conf="paginationConf"></div> </div> </div>'),
    t.put("components/tmOriginalArticle.html", '\x3c!--发表文章--\x3e <div class="originalArticle"> <div common-header title-header="\'发表心声\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">发表心声</li> </ol> <div class="art_detail"> <div class="content"> <form> <div class="bttitle"> <span class="grid_2">标题：</span> <input class="grid_6 form-control" ng-model="title" name="Name" type="text"> </div> <div class="bj mar_top_10"> \x3c!-- 加载编辑器的容器 --\x3e <div class="ueditor" config="config" ng-model="content"></div> </div> <div class="bs"> <button class="btn btn-primary" ng-click="publishTopic()" type="submit">提交审核</button> </div> </form> </div> </div> </div> </div>'),
    t.put("components/tmOriginalArticleList.html", '\x3c!--学员心声--\x3e <div class="originalArgicleList"> <div common-header title-header="\'学员心声\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">学员心声</li> </ol> <div class="originTitle"> <h4>{{originalArgicleListData.TitleNav}}</h4> <a ui-sref="originalarticle" target="_blank" class="btn btn-primary">发表心声</a> </div> <div class="myTab" dw-loading="studyPlan"> <div class="tab-content" dw-loading="originalArgicleList"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list5">文章名称</span> <span class="list1-5">作者</span> <span class="list2-5">发布时间</span> </div> <div class="list" ng-repeat="originalArgicleList in originalArgicleListData.ListData"> <span class="list5" title="{{originalArgicleList.Name}}"><a ui-sref="articleDetail({ID:originalArgicleList.Id})" target="_blank">{{originalArgicleList.Name}}</a></span> <span class="list1-5 ellipsis">{{originalArgicleList.Author?originalArgicleList.Author:\'无\'}}</span> <span class="list2-5">{{originalArgicleList.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</span> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmPagation.html", '<div class="page-list"> <ul class="pagination" ng-show="conf.totalItems > 0"> <li ng-class="{disabled: conf.currentPage == 1}" ng-click="prevPage()"><span>上一页</span></li> <li ng-repeat="item in pageList track by $index" ng-class="{active: item == conf.currentPage, separate: item == \'...\'}" ng-click="changeCurrentPage(item)"> <span>{{ item }}</span> </li> <li ng-class="{disabled: conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><span>下一页</span></li> </ul> <div class="page-total" ng-show="conf.totalItems > 0"> <span>/共<strong>{{ conf.totalItems }}</strong>条 &nbsp;跳转至</span> <input class="form-control" type="text" ng-model="jumpPageNum" ng-keyup="jumpPageKeyUp($event)"> <button class="btn btn-default" ng-click="jumpToPage()">Go</button> </div> <div class="no-items" ng-show="conf.totalItems <= 0">暂无数据</div> </div>'),
    t.put("components/tmPayConfirm.html", '\x3c!--支付确认--\x3e <div class="payConfirm"> <div common-header title-header="\'支付确认\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div class="cartList" dw-loading="payConfirm"> <ul> <div class="title clearfix"> <span class="list4">商品名称</span> <span class="list1-5">类型</span> <span class="list1-5">数量</span> <span class="list1-5">单价</span> <span class="list1-5">总价</span> </div> <li class="content clearfix" ng-repeat="list in orderDetailListData.ListData"> <span class="list4"><a ui-sref="courseDetails({Id:list.Id})" target="_blank" title="{{list.ProductName}}">{{list.ProductName}}</a></span> <span class="list1-5">{{list.ProductType==\'Course\'?\'课程\':\'图书\'}}</span> <span class="list1-5">{{list.Count}}</span> <span class="list1-5">￥{{list.Price.toFixed(2)}}</span> <span class="list1-5">￥{{list.TotalPrice.toFixed(2)}}</span> </li> </ul> <div class="bottom clearfix"> <p class="bottomInfo"> 总价: ￥{{orderDetailListData.TotalPrice.toFixed(2)}} </p> <div class="radio"> <label> <input type="radio" name="payType" ng-model="payType" id="ctl09_rblPayType_0" value="Alipay" checked> <img src="images/alipay.258c50a7.png" alt="支付宝"> </label> </div> <div class="radio"> <label> <input type="radio" name="payType" ng-model="payType" id="ctl09_rblPayType_1" value="Wechatpay"> <img src="../qzzj/images/weixinpay.620384ba.png" alt="微信"> </label> </div> <a ng-click="goPayConfirm(payType)" class="btn btn-primary confirmBtn">确认支付</a> </div> <div class="payContent justify" ng-bind-html="payContent | trustHtml"></div> </div> </div> </div>'),
    t.put("components/tmPersonalArchives.html", '\x3c!--个人学习档案--\x3e <div class="container_24 mar_top_20 personalArchives"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">个人学习档案</li> </ol> <div class="statisticsTitle"> <span>个人学习档案</span> </div> <div dw-loading="personalArchive"> <div class="statisticsBox"> <div class="statisticsBoxInner"> <p class="personal_archives_title text-center font-lg"> 合计&nbsp;<span class="font-red">{{userInfo.SumCredit}}</span>&nbsp;学时， 一般公需科目获得学时：<span class="font-red">{{userInfo.ComCredit}}</span>, 行业公需科目获得学时：<span class="font-red">{{userInfo.PubCredit}}</span>, 专业科目获得学时：<span class="font-red">{{userInfo.ProCredit}}</span> </p> <br> <fieldset style="visibility: visible"> <legend><strong>基本信息</strong></legend> <br> <div class="search clearfix"> <span class="pull-left">学年</span> <select class="form-control yearSelect pull-left" ng-model="selectYearValue" ng-options="x.value as x.name for x in yearHistory" ng-change="yearChange()"> </select> <button class="btn btn-primary pull-left" ng-click="openModal(\'batch\')">公需科目打印 </button> <button class="btn btn-primary pull-left" ng-click="openModal(\'batchPro\')">专业科目打印 </button> <span class="highlight-red pull-left mar_left_10">建议使用谷歌、火狐、360极速模式、IE9.0及以上版本浏览器进行打印</span> </div> <table style="width:96%;margin:10px auto 0 auto" border="0" align="center" cellpadding="0" cellspacing="0"> <tr> <td width="15%" align="center" class="table1"> 用户名 </td> <td width="15%" align="center"> {{userInfo.Name}} </td> <td width="17%" align="center" class="table1"> 单位 </td> <td width="18" align="center"> {{userInfo.GroupName}} </td> <td width="17%" align="center" class="table1"> 专业序列 </td> <td width="18" align="center"> {{batchData.BatchName}} </td> </tr> </table> <br> </fieldset> </div> </div> <div class="statisticsBox"> <div class="statisticsBoxInner"> <fieldset> <legend><strong>公需科目学时</strong></legend> <br> <table style="width:96%;margin:0 auto" border="0" align="center" cellpadding="0" cellspacing="0"> <thead> <tr class="table1"> <th align="center">完成课程数</th> <th align="center">获得总学时</th> <th align="center">内容</th> </tr> </thead> <tbody> <tr ng-show="comInfo.Count"> <td>{{comInfo.Count}}</td> <td>{{comInfo.TotalCredit}}</td> <td><a class="courseDetails" ng-click="showTable(\'one\')">详细</a></td> </tr> <tr ng-show="!comInfo.Count"> <td colspan="3">暂无数据</td> </tr> </tbody> </table> <br> <table ng-show="tableShowOne" border="0" align="center" cellpadding="0" cellspacing="0" style="width: 96%; margin:0 auto"> <thead> <tr class="table1"> <th>课程名称</th> <th>获得时间</th> <th>获得学时</th> <th>课程类型</th> <th>来源</th> </tr> </thead> <tbody> <tr ng-repeat="course in comInfo.CourseList"> <td width="40%" align="center">{{course.Name}}</td> <td>{{course.CreditTime | dateFilter | date:\'yyyy-MM-dd\'}}</td> <td>{{course.Credit}}</td> <td>{{course.TypeName}}</td> <td>{{course.Source}}</td> </tr> <tr> <td colspan="5"> <div tm-pagation conf="paginationConf[0]"></div> </td> </tr> </tbody> </table> </fieldset> </div> </div> <div class="statisticsBox"> <div class="statisticsBoxInner"> <fieldset> <legend><strong>专业科目学时</strong></legend> <br> <table style="width: 96%;margin:0 auto" border="0" align="center" cellpadding="0" cellspacing="0"> <thead> <tr class="table1"> <th align="center">完成课程数</th> <th align="center">获得总学时</th> <th align="center">内容</th> </tr> </thead> <tbody> <tr ng-show="proInfo.Count"> <td>{{proInfo.Count}}</td> <td>{{proInfo.TotalCredit}}</td> <td><a class="courseDetails" ng-click="showTable(\'two\')">详细</a></td> </tr> <tr ng-show="!proInfo.Count"> <td colspan="4">暂无数据</td> </tr> </tbody> </table> <br> <table ng-show="tableShowTwo" border="0" align="center" cellpadding="0" cellspacing="0" style="width: 96%; margin:0 auto"> <thead> <tr class="table1"> <th>课程名称</th> <th>获得时间</th> <th>获得学时</th> <th>课程类型</th> <th>来源</th> </tr> </thead> <tbody> <tr ng-repeat="course in proInfo.CourseList"> <td width="40%" align="center">{{course.Name}}</td> <td>{{course.CreditTime | dateFilter | date:\'yyyy-MM-dd\'}}</td> <td>{{course.Credit}}</td> <td>{{course.TypeName}}</td> <td>{{course.Source}}</td> </tr> <tr> <td colspan="5"> <div tm-pagation conf="paginationConf[1]"></div> </td> </tr> </tbody> </table> </fieldset> </div> </div> </div> <div class="modal fade printModal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">{{printType == \'batch\'?\'公需科目打印\':\'专业科目打印\'}}</h4> </div> <div class="modal-body container_24"> <style type="text/css">.print_table.table-bordered > thead > tr > th,\n            .print_table.table-bordered > tbody > tr > th,\n            .print_table.table-bordered > tfoot > tr > th,\n            .print_table.table-bordered > thead > tr > td,\n            .print_table.table-bordered > tbody > tr > td,\n            .print_table.table-bordered > tfoot > tr > td {\n              border: 1px solid #000 !important;\n            }\n\n            #qrcode img {\n              width: 120px;\n            }</style> <style type="text/css" media="print">.noprint {\n              display: none\n            }\n\n            @page {\n              margin: 0.5cm 1cm;\n            }\n\n            * {\n              box-sizing: border-box;\n            }\n\n            html {\n              background-color: #FFFFFF;\n              margin: 0; /* this affects the margin on the html before sending to printer */\n              width: 100%;\n            }\n\n            body {\n              width: 100%;\n              /* transform: scale(0.9, 0.9); */\n              /* transform-origin: 50% 0; */\n              zoom: 0.9;\n            }\n\n            table {\n              page-break-inside: auto\n            }\n\n            tr {\n              page-break-inside: avoid;\n              page-break-after: auto\n            }\n\n            thead {\n              display: table-header-group\n            }\n\n            tfoot {\n              display: table-footer-group\n            }\n\n            .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n              border: 1px solid #000;\n            }\n\n            .print_class_name {\n              width: 300px;\n            }</style> <br> <h2 class="text-center">衢州市专业技术人员继续教育{{printType == \'batch\'?\'公需科目\':\'专业科目\'}}学时证明</h2> <br> <div class="user_info_block" style="padding: 20px 0"> <span>用户名：{{printData.Name}}</span>&emsp;&emsp; <span>性别：{{printData.Sex}}</span>&emsp;&emsp; <span>身份证号：{{printData.IdCard||\'无\'}}</span>&emsp;&emsp; <span>年度：{{selectYearValue}}</span>&emsp;&emsp; <span>专业序列：{{printData.BatchName}}</span>&emsp;&emsp; <span style="float: right">打印时间：{{today|date:"yyyy年MM月dd日"}}</span> </div> <table class="table table-bordered table-striped print_table"> <tr> <th>序号</th> <th class="print_class_name" width="300">课程名称</th> <th>获得时间</th> <th>获得学时</th> <th>课程类型</th> <th>来源</th> </tr> <tr ng-repeat="item in printData.CourseList"> <td>{{$index+1}}</td> <td>{{item.Name}}</td> <td>{{item.CreditTime | dateFilter | date: "yyyy-MM-dd hh:mm"}}</td> <td>{{item.Credit}}</td> <td>{{item.TypeName}}</td> <td>{{item.Source}}</td> </tr> <tr ng-if="printData.CourseList && printData.CourseList.length >0"> <td colspan="3">合计</td> <td>{{totalCredit}}</td> <td></td> <td></td> </tr> <tr ng-if="printData.CourseList && printData.CourseList.length ==0"> <td colspan="6">暂无数据</td> </tr> </table> <div style="position:relative"> <p style="padding:20px 50px 20px 130px;text-indent: 2em;position:relative;z-index: 2"> 上述为该专业技术人员在“衢州市专业技术人员继续教育学习平台”中学习、选中的{{printType==\'batch\'?\'公需科目\':\'专业科目\'}}课程， 可认定为{{printType==\'batch\'?\'公需科目\':\'专业科目\'}}继续教育学时。 </p> <p ng-if="printType==\'batch\'" class="text-right" style="padding: 0 50px 50px 130px;position:relative;z-index: 2"> 衢州市人力资源和社会保障局 </p> <p ng-if="printType!=\'batch\'" class="text-right" style="padding: 0 50px 50px 130px;position:relative;z-index: 2"> 行业主管部门 </p> <img ng-if="printType==\'batch\'" src="../qzzj/images/seal_img.329a91cd.png" alt="印章" style="position:absolute;z-index: 1; bottom: -18px; right: 55px; width: 163px"> <img ng-if="printType!=\'batch\'" ng-src="{{sealImg}}" style="position:absolute;z-index: 1; bottom: -18px; right: 55px; width: 163px"> <div ng-show="printData.QRCode" id="qrcode" style="position: absolute; left: 0; bottom: 0"></div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" ng-click="print(\'batch\')">打印</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmPersonalCenterNav.html", '\x3c!--个人中心导航--\x3e <div class="personalCenterNav"> <div common-header title-header="\'个人中心导航\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ul class="categoryGuide"> <li><a ui-sref="courseCenter" class="btn btn-primary">选择课程</a></li> <li><a ui-sref="personalCenter.studyStat" class="btn btn-primary">学习统计</a></li> \x3c!--<li><a ui-sref="personalCenter.testStat" class="btn btn-primary">考试统计</a></li>--\x3e <li><a ui-sref="personalCenter.studyPlan" class="btn btn-primary">学习计划</a></li> <li><a ui-sref="personalCenter.myFavorite" class="btn btn-primary">我的收藏</a></li> <li><a ui-sref="messageList" class="btn btn-primary">留言板</a></li> <li><a ui-sref="originalarticlelist" class="btn btn-primary">学员心声</a></li> \x3c!--<li><a ui-sref="studentstyle" class="btn btn-primary">学员风采</a></li>--\x3e <li><a ui-sref="polllist" class="btn btn-primary">问卷调查</a></li> <li><a ui-sref="software" class="btn btn-primary">必装软件</a></li> <li><a ui-sref="rankcourseclick" class="btn btn-primary">排行榜</a></li> \x3c!--<li><a ui-sref="speciallearning" class="btn btn-primary">专题学习</a></li>--\x3e <li><a ui-sref="resultshow" class="btn btn-primary">成果展示</a></li> <li><a ui-sref="article" class="btn btn-primary">新闻中心</a></li> <li><a ui-sref="personalCenter.creditPost" class="btn btn-primary">专业课学时申报</a></li> \x3c!--<li><a ui-sref="personalCenter.gybPost" class="btn btn-primary">高研班申报</a></li>--\x3e </ul> </div> </div>'),
    t.put("components/tmPersonalLearningInfo.html", '\x3c!--个人学习信息--\x3e <div class="personalLearningInfo"> <div common-header title-header="\'个人学习信息\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder" dw-loading="personalLearningInfo"> <div class="personalLearningInfo-leftTime"> <p ng-show="classInfoData.Model.RemainingTime" class="text-center">班级还有<span>【{{classInfoData.Model.RemainingTime}}】</span>结束 </p> <p ng-show="!classInfoData.Model.RemainingTime" class="text-center">班级<span class="highlight">【已结束】</span></p> </div> <ul> <li>必修课(已学 | 总课数): {{classInfoData.Model.FinishRequiredCount}} | {{classInfoData.Model.RequiredCount}}</li> <li>选修课(已学 | 总课数 | 必学课数)： {{classInfoData.Model.FinishElectiveCount}} | {{classInfoData.Model.ElectiveCount}} | {{classInfoData.Model.ElectivePassCount}} </li> <li>考试：<span ng-show="classInfoData.Model.ExamCount>0">(已完成 | 考试数 | 必考数): {{classInfoData.Model.FinishExamCount}} | {{classInfoData.Model.ExamCount}} | {{classInfoData.Model.ExamPassCount}} </span> <span ng-show="classInfoData.Model.ExamCount==0">未安排</span> </li> <li>学习心得（不少于2000字）： <span ng-show="classInfoData.Model.PaperCount==0">未完成</span> <span ng-show="classInfoData.Model.PaperCount>0">完成</span> </li> <li><span>培训班考核状态：</span> <span ng-show="classInfoData.ViewBag.PassStatus==\'Pass\'" style="color:red">通过</span> <span ng-show="classInfoData.ViewBag.PassStatus==\'UnPass\'" style="color:red">未通过</span> <span ng-show="classInfoData.ViewBag.PassStatus==\'UnFinish\'">未结业</span> </li> </ul> </div> </div>'),
    t.put("components/tmPhotoAlbumAdd.html", '\x3c!--添加相册--\x3e <div class="tmPhotoAlbumAdd"> <div common-header title-header="location" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{data.TrainingName}}</a></li> <li class="active">{{location}}</li> </ol> <div class="photo-album-add mar_bottom_20"> <form> <div class="photo-album-add-title"> <h4 class="text-center">添加相册</h4> </div> <div class="photo-album-add-body"> <div class="form-group clearfix"> <span class="grid_8 text-right">相册标题：</span> <div> <input class="form-control grid_6" type="text" ng-model="name"> </div> </div> <div class="form-group clearfix"> <span class="grid_8 text-right">相册说明：</span> <div> <textarea class="form-control grid_10" ng-model="description" id="txtContent" name="Content" cols="50" rows="5" type="text"></textarea> </div> </div> <div class="form-group clearfix"> <span class="grid_8 text-right">相册封面：</span> <div class="clearfix grid_4"> <input class="upLoadFile" type="file" name="ImageToUpload" id="ImageToUpload" multiple ng-click="listenChange($event)"> <div id="ImageMessage" style="display:none;padding: 10px;height: 34px"></div> <input type="hidden" id="hidValueImage" name="ImgUrl" ng-model="ImgUrl"> </div> </div> </div> <div class="photo-album-add-submit text-center"> <input ng-click="getPhotoAlbumAdd(Id)" type="submit" class="btn btn-primary"> </div> </form> </div> </div> </div>'),
    t.put("components/tmPhotoAlbumList.html", '\x3c!--班级相册--\x3e <div class="tmPhotoAlbumList"> <div common-header title-header="Data.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{Data.TrainingName}}</a></li> <li class="active">{{Data.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="photoAlbumList"> <h2 class="commonTitle">{{Data.TitleNav}}</h2> <div class="text-center"> <a class="btn btn-primary" data-toggle="modal" data-target=".modal">+新增相册</a> </div> <div class="myTab mar_top_15"> <div class="tab-content clearfix"> <div class="tab-panel perlist"> <ul class="clearfix"> <li class="list3" ng-repeat="list in Data.ListData"> <a ui-sref="photoPreview({AlbumId:list.Id,TrainingId:Data.TrainingId})"> <img ng-src="{{ImgSrc+\'/\'+list.Img}}" err-src="images/notFound.c0814127.jpeg"> <p class="text-center">{{list.Name}}</p> </a> </li> </ul> </div> <div ng-transclude="pagation"></div> </div> </div> </div> <div class="modal fade notemodal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">添加相册</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>相册标题：</td> <td> <input class="form-control" type="text" ng-model="name"> </td> </tr> <tr> <td>相册说明：</td> <td> <textarea class="form-control" ng-model="description" cols="50" rows="5"></textarea> </td> </tr> <tr> <td>相册封面：</td> <td> <input type="file" name="ImageToUpload" id="ImageToUpload" multiple onchange="fileSelected(\'ImageToUpload\', \'ImageTraining\', 1)"> <div id="ImageMessage" style="display:none;padding: 10px"></div> <input type="hidden" id="hidValueImage" name="ImgUrl" ng-model="ImgUrl"> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="getPhotoAlbumAdd(Id)" type="button" class="btn btn-primary">提交</button> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmPhotoPreview.html", '\x3c!--班级照片--\x3e <div class="tmPhotoPreview"> <div common-header title-header="Data.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:TrainingId})">{{Data.TrainingName}}</a></li> <li><a ui-sref="photoAlbumList({Id:TrainingId})">班级相册</a></li> <li class="active">{{Data.TitleNav}}</li> </ol> <div class="borderTopBold" dw-loading="photoPreview"> <div class="commonTitle">{{Data.TitleNav}}</div> <div class="text-center"> <a class="btn btn-primary" data-toggle="modal" data-target=".addphotomodal">+新增照片</a> </div> <div class="myTab"> <div class="tab-content clearfix"> <div class="tab-panel perlist"> <ul class="clearfix"> <li class="list3" ng-repeat="list in Data.ListData"> <img ng-click="viewPhoto($index)" data-toggle="modal" data-target=".notemodal" ng-src="{{ImgSrc+\'/\'+list.Img}}" err-src="images/notFound.c0814127.jpeg" title="{{list.Description}}"> <p class="text-center">{{list.Name}}</p> </li> </ul> </div> <div ng-transclude="pagation"></div> </div> </div> </div> <div class="modal fade addphotomodal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">添加照片</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>照片标题：</td> <td> <input class="form-control" type="text" ng-model="name"> </td> </tr> <tr> <td>照片说明：</td> <td> <textarea class="form-control" ng-model="description" cols="50" rows="5"></textarea> </td> </tr> <tr> <td>照片：</td> <td> <input type="file" name="ImageToUpload" id="ImageToUpload" multiple onchange="fileSelected(\'ImageToUpload\', \'ImageTraining\', 1)"> <div id="ImageMessage" style="display:none;padding: 10px"></div> <input type="hidden" id="hidValueImage" name="ImgUrl" ng-model="ImgUrl"> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="getPhotoUpFile()" type="button" class="btn btn-primary">提交</button> </div> </div> </div> </div> <div class="modal fade notemodal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title text-center">查看照片</h4> </div> <div class="modal-body"> <img ng-src="{{ImgSrc+\'/\'+imgObj.Img}}" err-src="images/notFound.c0814127.jpeg" style="width: 100%"> <div> <ul> <li class="text-center"><span>标题:</span>{{imgObj.Name}}</li> <li class="text-center"><span>描述:</span>{{imgObj.Description}}</li> </ul> </div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmPlay.html", '<div class="playPage"> <div id="playBg"> <ul style="color: #fff;font-size: 20px;text-align: center;margin-top: 255px"> <li>网络环境为政务外网的学员，可通过政务外网地址访问衢州市专业技术人员继续教育学习平台，避免视频观看卡慢的情况。</li> <li style="margin-top:20px"> <a target="_blank" href="http://10.27.163.186" style="text-decoration:none;color:#fff">地址1：http://10.27.163.186</a> </li> <li style="margin-top:20px"> <a target="_blank" href="http://10.27.163.44" style="text-decoration:none;color:#fff">地址2：http://10.27.163.44</a> </li> </ul> </div> <div tm-drag options="options" drag-ready="dragReady"></div> \x3c!--视频播放--\x3e <div tm-play-mp4 class="playMp4" ng-if="showPlayMp4"></div> <div tm-play-jy class="playMp4" ng-if="showPlayJy"></div> <div tm-play-scorm class="playMp4" ng-if="showPlayScorm"></div> <div tm-play-jy-scorm class="playMp4" ng-if="showPlayJyScorm"></div> <div tm-play-single class="playMp4" ng-if="showPlaySingle"></div> <div tm-play-pdf class="playMp4" ng-if="showPlayPdf"></div> \x3c!--笔记评论--\x3e <div class="toggleSideSec"></div> <div class="play"> <div class="side_section"> <div class="class_info"> <div class="info"> <div class="overhide" style="font-size: 14px;color: #323232;line-height: 28px;font-weight: normal" title="{{resultCourseDetail.Name}}">{{resultCourseDetail.Name}} </div> <div style="float:left">教师：{{resultCourseDetail.Teacher}}</div> <div style="float:right">时长：{{resultCourseDetail.Duration}}</div> <div style="clear:both"><span><a href="#"></a></span></div> </div> <span class="star" style="background-position-x: -{{resultCourseDetail.StudentGrade*2*121}}px"></span><span>{{resultCourseDetail.StudentGrade}}</span> <div class="BrowseScore clearfix"> <span class="pull-left">课程进度：</span> <span class="list2 pull-left"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{resultCourseDetail.BrowseScore}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':resultCourseDetail.BrowseScore+\'%\'};"> {{resultCourseDetail.BrowseScore.toFixed(1)}}% </div> </div> </span> </div> <hr style="margin-top:3px"> <div style="color:#656565;margin-top:4px; font-size: 12px; word-spacing: 4px; text-align: justify"> 课程描述：{{resultCourseDetail.Description}} </div> </div> \x3c!--标签页--\x3e <div class="myTab" dw-loading="playComment"> <ul class="nav nav-tabs" ng-init="vm.activeTab=1"> <li ng-class="{active: vm.activeTab == 1}"><a href="javascript:;" ng-click="vm.activeTab = 1;searchMyCenterCourse({\'examType\':\'UnFinish\',\'title\':searchTitle})"><span class="glyphicon glyphicon-edit"></span>&nbsp;&nbsp;笔记</a></li> <li ng-class="{active: vm.activeTab == 2}"><a href="javascript:;" ng-click="vm.activeTab = 2;searchMyCenterCourse({\'examType\':\'Finish\',\'title\':searchTitle})"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;&nbsp;评论</a></li> </ul> <div class="tab-content"> <div class="tab-panel perlist" ng-show="vm.activeTab == 1"> <div class="pad_left_10"> <div class="slide-content"> <form class="clearfix"> <div class="form-group"> <input ng-model="noteName" type="text" class="form-control" my-placeholder placeholder="标题"> </div> <div class="form-group"> <textarea ng-model="noteContent" class="form-control" rows="4" my-placeholder placeholder="请输入笔记内容...">\n\n                      </textarea> </div> <button ng-click="editNote({Name:noteName,Content:noteContent,CourseId:Id})" type="submit" class="btn btn-default pull-right">保存 </button> </form> <div style="overflow: auto; height: 300px; visibility: visible"> <ul class="notes" ng-repeat="courseNoteList in resultCourseNote"> <li class="title"> <span>标题:{{courseNoteList.Name}}</span> <span class="time" style="color:#999;font-size: 12px;float: right">{{courseNoteList.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> </li> <li class="content"> <span>{{courseNoteList.Content}}</span> <a ng-click="delNote(courseNoteList.Id)" class="btn btn-primary pull-right">删除</a> </li> </ul> </div> </div> </div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 2"> <div class="pad_left_10"> <div class="wrapper"> <div tm-star-box ng-model="drLevel"></div> </div> </div> <form class="clearfix pad_left_10"> <div class="form-group"> <textarea ng-model="comment" class="form-control" rows="4" my-placeholder placeholder="请输入评论内容...">\n                    </textarea> </div> <button ng-click="editComment({rate:drLevel,content:comment,mainId:Id})" type="submit" class="btn btn-default pull-right">保存 </button> </form> <div style="overflow: auto; height: 300px; visibility: visible"> <ul class="notes" ng-repeat="commentList in resultComment.ListData"> <li class="title"> <span>用户:{{commentList.UserName}}</span> <span class="time" style="color:#999;font-size: 12px;float: right">{{commentList.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> </li> <li class="content"> <span>{{commentList.Comment}}</span> </li> </ul> </div> </div> </div> </div> </div> </div> <div class="modal fade questionModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> \x3c!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\n            aria-hidden="true">&times;</span></button>--\x3e <h4 class="modal-title text-center">课间小测验</h4> </div> <div class="modal-body"> <div class="question_container" ng-repeat="question in questionItem track by question.title"> <p>题目{{$index+1}}：{{question.title}}</p> <ul> <li ng-repeat="item in question.options" ng-click="checkAnswer($event, question.answer, item.flag)"> {{item.showFlag}}. {{item.title}} </li> </ul> </div> </div> <div class="modal-footer"> <button class="btn btn-primary" type="button" ng-click="submitTest()">确定</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmPlayJy.html", '<div id="JY"> <iframe frameborder="0" ng-src="{{jyIframeSrc}}"></iframe> </div> <style>#JY {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  #JY iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n  }</style>'),
    t.put("components/tmPlayJyScorm.html", '<div id="JyScorm"> <iframe frameborder="0" ng-src="{{jyScormSrc}}"></iframe> </div> <style>#JyScorm {\n    width: 100%;\n    height: 100%;\n  }\n\n  #JyScorm iframe {\n    width: 100%;\n    height: 100%;\n  }</style>'),
    t.put("components/tmPlayMp4.html", '<div id="myplayer"></div> <style>.jwgroup .jwrail .jwwarning {\r\n    display: none;\r\n    position: relative;\r\n    line-height: 30px;\r\n    border-radius: 5px;\r\n    margin-top: -35px;\r\n    margin-left: 30px;\r\n    padding: 0px 5px;\r\n    z-index: 1007;\r\n    left: 0;\r\n    color: #f0ad4e;\r\n    background-color: rgba(62, 62, 64, 0.8);\r\n    border: 1px solid #111;\r\n  }\r\n\r\n  .jwgroup .jwrail .jwwarningbuffer {\r\n    height: 30px;\r\n    width: 5px;\r\n    border-radius: 5px;\r\n    background-color: #f0ad4e;\r\n  }</style>'),
    t.put("components/tmPlayPdf.html", '<div class="warnPdf">10秒允许翻页，当前章节学习时间<span id="stime"></span>秒</div> <div id="documentViewer" class="flexpaper_viewer" ng-if="!pdf.showPdf"> <p> To view this page ensure that Adobe Flash Player version 10.0.0 or greater is installed. </p> <script type="text/javascript">var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://");\n    document.write("<a href=\'http://www.adobe.com/go/getflashplayer\'><img src=\'" + pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif\' alt=\'Get Adobe Flash player\' /></a>");<\/script> </div> <div class="pdfjs-viewer_container" ng-if="pdf.showPdf" style="width: 100%;height: 100%"> <pdfjs-viewer src="{{pdf.src}}" on-init="onInit()" on-page-load="onPageLoad(page)"></pdfjs-viewer> </div> <style>.flexpaper_viewer {\n    margin: 0 auto;\n  }\n\n  .warnPdf {\n    color: #333;\n    text-align: center;\n    font-size: 18px;\n    padding: 20px;\n  }</style>'),
    t.put("components/tmPlayScorm.html", '<div id="Scorm"> <iframe frameborder="0" ng-src="{{scormIframeSrc}}"></iframe> </div> <style>#Scorm {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  #Scorm iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n  }</style>'),
    t.put("components/tmPlaySingle.html", '<div class="playSingle"> <object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,1,5,217" id="MediaPlayer" type="application/x-oleobject" width="768" height="520" standby="加载中..." viewastext align="center"> <param name="AudioStream" value="-1"> <param name="AutoSize" value="0"> <param name="AutoStart" value="1"> <param name="AnimationAtStart" value="0"> <param name="AllowScan" value="-1"> <param name="AllowChangeDisplaySize" value="0"> <param name="AutoRewind" value="0"> <param name="Balance" value="0"> \x3c!--@*<param name=BaseURL value="">*@--\x3e <param name="BufferingTime" value="5"> \x3c!--@*<param name=CaptioningID value="">*@--\x3e <param name="ClickToPlay" value="0"> <param name="CursorType" value="32512"> <param name="CurrentPosition" value="-1"> <param name="CurrentMarker" value="0"> <param name="DefaultFrame" value="1"> <param name="DisplayBackColor" value="0"> <param name="DisplayForeColor" value="16777215"> <param name="DisplayMode" value="0"> <param name="DisplaySize" value="0"> <param name="Enabled" value="-1"> <param name="EnableContextMenu" value="-1"> <param name="EnablePositionControls" value="0"> <param name="EnableFullScreenControls" value="0"> <param name="EnableTracker" value="1"> \x3c!--<param name=Filename value="../courseFiles/wmv01/wmv01.wmv">--\x3e <param name="InvokeURLs" value="-1"> <param name="Language" value="-1"> <param name="Mute" value="0"> <param name="PlayCount" value="1"> <param name="PreviewMode" value="0"> <param name="Rate" value="1"> <param name="SelectionStart" value="0"> <param name="SelectionEnd" value="true"> <param name="SendOpenStateChangeEvents" value="-1"> <param name="SendWarningEvents" value="-1"> <param name="SendErrorEvents" value="-1"> <param name="SendKeyboardEvents" value="0"> <param name="SendMouseClickEvents" value="0"> <param name="SendMouseMoveEvents" value="0"> <param name="SendPlayStateChangeEvents" value="-1"> <param name="ShowCaptioning" value="0"> <param name="ShowControls" value="1"> <param name="ShowPositionControls" value="1"> <param name="ShowStatusBar" value="1"> <param name="ShowTracker" value="1"> <param name="TransparentAtStart" value="0"> <param name="VideoBorderWidth" value="0"> <param name="VideoBorderColor" value="0"> <param name="VideoBorder3D" value="0"> <param name="Volume" value="-1070"> <param name="WindowlessVideo" value="1"> </object> \x3c!--<embed height="460" width="530" src="../courseFiles/wmv01/wmv01.wmv" type="video/x-ms-wmv" autostart="1" title="undefined" />--\x3e <div style="display:none"> <input id="btncurrentPosition" type="button" value="当前位置"> <input id="btnduration" type="button" value="总长度"> <input id="btnURL" type="button" value="播放媒体地址"> <input id="btnplay" type="button" value="开始播放"> <input id="btnstop" type="button" value="停止播放"> <input id="btnpause" type="button" value="暂停播放"> <input id="btnmute" type="button" value="控制是否静音"> <input id="btnfullScreen" type="button" value="控制是否全屏"> <input id="btnplayState" type="button" value="播放机状态"> </div> </div> <style>.playSingle {\r\n    width: 768px;\r\n    height: 520px;\r\n    margin: 100px auto;\r\n  }</style>'),
    t.put("components/tmPolicyAndNotify.html", '<div class="news mar_top_15 clearfix"> <div id="newsTitle" ng-class="{\'政策法规\':\'com-header com-header-green\',\r\n    \'公告通知\':\'com-header com-header-cyan\'}[title]" style="margin-left: 0px"> <h4 class="pull-left">{{title}}</h4> <a ui-sref="newsinfo({ID:myNewsData.ID})" class="pull-right" target="_blank">更多&nbsp;&nbsp;+</a> </div> <div class="news-body" dw-loading="tmpolicyandnotify"> <ul> <li title="{{Data.Name}}" ng-repeat="Data in myNewsData.data"> <a ui-sref="articleDetail({ID:Data.Id})" class="clearfix" target="_blank"> <h5 class="pull-left"><span class="dian"></span>{{Data.Name}}</h5> <p class="newsTime pull-right">{{Data.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</p> </a> </li> </ul> </div> </div> <style>.news {\r\n    width: 98%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .news .com-header a.pull-right {\r\n    line-height: 40px;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    padding-right: 10px;\r\n\r\n  }\r\n\r\n  .news .com-header a.pull-right:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n  .news .newsTime {\r\n    padding-right: 8px;\r\n  }</style>'),
    t.put("components/tmPoll.html", '\x3c!--问卷调查--\x3e <div class="poll" dw-loading="exam"> <div class="exam_top"> <img src="/images/poll_top.3ade906e.png"> </div> <div><h2 class="text-center">{{examData.Exam.Name}}</h2></div> <form method="post" class="editForm" name="editForm"> <input type="hidden" value="{{examData.Id}}" id="hdnexamid" name="hdnexamid"> \x3c!--<input type="hidden" value="{{examData.isfixed}}" id="hdnisfixed" name="hdnisfixed"/>--\x3e <table> <tbody> <tr ng-repeat="item in allQuestions" ng-init="outerIndex = $index" repeat-finish="focusInput()"> \x3c!-- 单选意见题 --\x3e <td ng-if="item.Type == \'SingleText\'"> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}"> <div class="tibg"><span type="0"> {{$index+1}} </span>、 {{item.Name}}</div> <table class="question_item"> <tr ng-repeat="singleText in item.QuestionsItems" class="radio_question_item"> <td> <label for="{{singleText.ItemFlag}}-{{item.Id}}-{{outerIndex}}"> <input class="hideNode" type="radio" value="{{singleText.ItemFlag}}" id="{{singleText.ItemFlag}}-{{item.Id}}-{{outerIndex}}" name="radiotext{{item.Id}}"> <span class="jqRadio"></span> {{singleText.ItemFlag}}.{{singleText.Name}} <input ng-if="singleText.TextFlag" class="advise" type="text" name="content{{item.Id}}"> </label> </td> </tr> </table> </td> \x3c!-- 单选题 判断题 --\x3e <td ng-if="item.Type == \'Single\' || item.Type == \'Judge\'"> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}"> <div class="tibg"><span type="0"> {{$index+1}} </span>、 {{item.Name}}</div> <table class="question_item"> <tr ng-repeat="single in item.QuestionsItems" class="radio_question_item"> <td> <label for="{{single.ItemFlag}}-{{item.Id}}-{{outerIndex}}"> <input class="hideNode" type="radio" value="{{single.ItemFlag}}" id="{{single.ItemFlag}}-{{item.Id}}-{{outerIndex}}" name="radio{{item.Id}}"> <span class="jqRadio"></span> {{single.ItemFlag}}.{{single.Name}} </label> </td> </tr> </table> </td> \x3c!-- 多选 --\x3e <td ng-if="item.Type == \'More\'"> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}"> <div class="tibg"><span type="1"> {{$index+1}} </span>、 {{item.Name}}</div> <table class="question_item"> <tr ng-repeat="more in item.QuestionsItems" class="checkbox_question_item"> <td> <label for="{{more.ItemFlag}}-{{item.Id}}-{{outerIndex}}"> <input class="hideNode" type="checkbox" value="{{more.ItemFlag}}" id="{{more.ItemFlag}}-{{item.Id}}-{{outerIndex}}" name="checkbox{{item.Id}}"> <span class="jqCheckbox"></span> {{more.ItemFlag}}.{{more.Name}} </label> </td> </tr> </table> </td> \x3c!-- 多选意见题 --\x3e <td ng-if="item.Type == \'MoreText\'"> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}"> <div class="tibg"><span type="1"> {{$index+1}} </span>、 {{item.Name}}</div> <table class="question_item"> <tr ng-repeat="moreText in item.QuestionsItems" class="checkbox_question_item"> <td> <label for="{{moreText.ItemFlag}}-{{item.Id}}-{{outerIndex}}"> <input class="hideNode" type="checkbox" value="{{moreText.ItemFlag}}" id="{{moreText.ItemFlag}}-{{item.Id}}-{{outerIndex}}" name="checkboxtext{{item.Id}}"> <span class="jqCheckbox"></span> {{moreText.ItemFlag}}.{{moreText.Name}} <input ng-if="moreText.TextFlag" class="advise" type="text" name="content{{item.Id}}"> </label> </td> </tr> </table> </td> \x3c!-- 意见题 --\x3e <td ng-if="item.Type == \'Text\'"> <input type="hidden" name="questionid{{item.Id}}" value="{{item.Id}}"> <div class="tibg"><span type="2"> {{$index+1}} </span>、 {{item.Name}}</div> <table class="question_item"> <tr ng-repeat="text in item.QuestionsItems" class="radio_question_item"> <td> <textarea class="form-control textarea_text" rows="3" cols="40" name="textbox{{item.Id}}"></textarea> </td> </tr> </table> </td> </tr> <tr> <td style="text-align: center"> <button ng-click="submitForm()" type="submit" class="btn btn-primary">提交</button> </td> </tr> </tbody> </table> </form> </div>'),
    t.put("components/tmPollList.html", '\x3c!--问卷调查列表--\x3e <div class="pollList"> <div common-header title-header="pollListData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{pollListData.TitleNav}}</li> </ol> <form class="form-inline formSearch"> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入要搜索的问卷"> </div> <button type="submit" class="btn btn-primary" ng-click="getClassList({\'title\':searchTitle})">搜索</button> </form> <div class="mar_top_20"> <div class="myTab" dw-loading="pollList"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list4">问卷名称</span> <span class="list4">参加</span> \x3c!--<span class="list3">详情</span>--\x3e </div> <div class="list" ng-repeat="pollList in pollListData.Model.UnfinishModel"> <span class="list4 ellipsis" title="{{pollList.Name}}"><a ng-click="havTest(pollList.Id)">{{pollList.Name}}</a></span> <span class="list4"><a ng-click="havTest(pollList.Id)">参加</a></span> \x3c!--<span class="list3"><a ui-sref="pollreview({parameter1:pollList.Id,parameter2:0})" target="_blank">查看详情</a></span>--\x3e </div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div> </div>'),
    t.put("components/tmPollReview.html", '\x3c!--问卷调查详情--\x3e <div class="pollReview"> <div class="exam_top"> <img src="images/poll_top.3ade906e.png"> </div> <form class="examReviewForm" dw-loading="examReview"> <table> <tbody> <tr ng-repeat="item in allQuestions"> <td class="pollReview_result"> <div class="title"> <span> {{$index+1}} </span>、 {{item.Name}} <span class="xxys">您的选项 <span class="red">{{item.Answer}}</span></span> </div> <table class="review_questionsItems"> <tr ng-repeat="list in item.QuestionsItems"> <td>{{list.ItemFlag}} . {{list.Name}}</td> </tr> </table> </td> <td class="poll_percent"> <table> <tr ng-repeat="list in item.QuestionsItems"> <td class="clearfix"> <span class="percent_title pull-left">共{{list.Sort}}票，占比</span> <span class="list2 pull-left"> <div class="progress"> <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="{{getRatePoll(item.Score,list.Sort)}}" aria-valuemin="0" aria-valuemax="100" ng-style="{\'width\':getRatePoll(item.Score,list.Sort)+\'%\'};"> {{getRatePoll(item.Score,list.Sort)}}% </div> </div> </span> </td> </tr> </table> </td> </tr> </tbody> </table> </form> </div>'),
    t.put("components/tmPrintCertificate.html", '\x3c!--打印证书--\x3e <div style="text-align: center"> <button style="margin: 20px 0" class="btn btn-primary startPrint">打印证书</button> <div class="print"> <style>body {\n        background: none;\n      }\n\n      .print {\n        text-align: center;\n        font-family: "宋体";\n        color: #000;\n        font-weight: bold;\n        font-size: 20px;\n      }\n\n      #print-content {\n        position: relative;\n        text-align: left;\n        width: 960px;\n        margin: 0 auto;\n      }\n\n      .print .left-content {\n        position: absolute;\n        width: 45%;\n        left: 0;\n        top: 0;\n        padding-left: 80px;\n      }\n\n      .print .left-content h3 {\n        font-size: 25px;\n        font-weight: bold;\n        text-indent: 2em;\n        margin-top: 150px;\n      }\n\n      .print .left-content .stamp {\n        margin-top: 80px;\n      }\n\n      .print .left-content .num {\n        margin-top: 80px;\n        line-height: 60px;\n      }\n\n      .print .right-content {\n        position: absolute;\n        width: 47%;\n        right: 0;\n        top: 0;\n        padding-right: 60px;\n      }\n\n      .print .right-content .info {\n        margin-top: 210px;\n        line-height: 50px;\n      }\n\n      .print .right-content .bottom {\n        margin-top: 10px;\n        line-height: 60px;\n      }</style> <div id="print-content"> <img src="../qzzj/images/printbg2.85d69343.png" alt=""> <div class="left-content"> <h3> 证书表明持证人已完成 无数据 培训班 学习任务，特发此证。 </h3> <div class="stamp"> <span>发证机关:<span>xxx部</span></span> <span style="margin-left: 20px">盖章</span> </div> <div class="num"> <p>证书编号:<span> 无数据</span></p> <p>印制编号:<span> 无数据</span></p> </div> </div> <div class="right-content"> <div class="info"> <p>姓&nbsp;&nbsp;名:&nbsp; 无数据</p> <p>性&nbsp;&nbsp;别:&nbsp; 无数据</p> <p>身份证号:&nbsp; 无数据</p> <p>工作单位:&nbsp; 无数据</p> </div> <div class="bottom"> <p>发证单位:&nbsp;<span>衢州市专业技术人员继续教育学习平台</span></p> <p>发证日期:&nbsp; 无数据</p> </div> </div> </div> </div> </div>'),
    t.put("components/tmPublish.html", '\x3c!--发表--\x3e <div class="tmPublish mar_top_20"> <div common-header title-header="location" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="trainingClass">培训班</a></li> <li><a ui-sref="classDetail({Id:Id})">{{data.TrainingName}}</a></li> <li class="active">{{location}}</li> </ol> <div class="art_detail"> <div class="content"> <form> <div class="bttitle clearfix"> <span class="grid_1">标题：</span><input class="grid_6 form-control" ng-model="title" name="Name" type="text"> </div> <div class="bttitle clearfix mar_top_10"> <span class="grid_1">分类：</span> <select class="grid_4 form-control" ng-model="categoryId" name="CategoryId" ng-options="list.Id as list.Name for list in topicCategoryData"> <option value="">请选择分类</option> </select> </div> <div class="bj mar_top_10"> \x3c!-- 加载编辑器的容器 --\x3e <div class="ueditor" config="config" ng-model="content"></div> <input id="diyimg" class="hide" type="file" accept="image/*"> </div> <div class="bs"> <button ng-click="publishTopic()" type="submit" class="btn btn-primary">提交审核</button> </div> </form> </div> </div> </div> </div>'),
    t.put("components/tmRankCourseClick.html", '\x3c!--课程点击排行列表（more）--\x3e <div class="rankingDetail"> <div common-header title-header="rankCourseClick.ViewBag.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{rankCourseClick.ViewBag.TitleNav}}</li> </ol> <div class="myTab" dw-loading="rankCourseClick"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list2">排名</span> <span class="list6">课程</span> <span class="list2">点击次数</span> </div> <div class="list" ng-repeat="rankCourseClickList in rankCourseClick.ListData"> <span class="list2">{{(paginationConf.currentPage-1)*paginationConf.itemsPerPage+$index+1}}</span> <span class="list6 ellipsis" title="{{rankCourseClickList.Name}}"> <a>{{rankCourseClickList.Name}}</a></span> <span class="list2">{{rankCourseClickList.Total}}</span> </div> </div> </div> <div ng-show="paginationConf.totalItems>0" tm-pagation conf="paginationConf" style="margin-left: 20%"></div> <div class="noData" ng-show="paginationConf.totalItems <=0">暂无数据</div> </div> </div> </div>'),
    t.put("components/tmRankCourseFinish.html", '\x3c!--完成课程排行列表（more）--\x3e <div class="rankingDetail"> <div common-header title-header="rankCourseFinish.ViewBag.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{rankCourseFinish.ViewBag.TitleNav}}</li> </ol> <div class="myTab" dw-loading="rankCourseClick"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list3">排名</span> <span class="list3">姓名</span> <span class="list3">完成课程数</span> </div> <div class="list" ng-repeat="rankCourseFinishList in rankCourseFinish.ListData"> <span class="list3">{{(paginationConf.currentPage-1)*paginationConf.itemsPerPage+$index+1}}</span> <span class="list3" title="{{rankCourseFinishList.Name}}">{{rankCourseFinishList.Name}}</span> <span class="list3">{{rankCourseFinishList.Total}}</span> </div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmRankLoginSum.html", '\x3c!--登录次数（more）--\x3e <div class="rankingDetail"> <div common-header title-header="rankCourseFinish.ViewBag.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{rankCourseFinish.ViewBag.TitleNav}}</li> </ol> <div class="myTab" dw-loading="rankCourseClick"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list2-5">排名</span> <span class="list2-5">姓名</span> <span class="list2-5">次数</span> </div> <div class="list" ng-repeat="rankCourseFinishList in rankCourseFinish.ListData"> <span class="list2-5">{{(paginationConf.currentPage-1)*paginationConf.itemsPerPage+$index+1}}</span> <span class="list2-5">{{rankCourseFinishList.Name}}</span> <span class="list2-5">{{rankCourseFinishList.Total}}</span> </div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmRankingDetail.html", '\x3c!--单位排行列表（more）--\x3e <div class="rankingDetail" dw-loading="rankingDetail"> <div common-header title-header="govermentRanking.ViewBag.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{govermentRanking.ViewBag.TitleNav}}</li> </ol> <div class="myTab" dw-loading="userRankingList"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list2">排名</span> <span class="list2">单位名称</span> <span class="list2">平均学分</span> <span class="list2">总学分</span> <span class="list2">总人数</span> </div> <div class="list" ng-repeat="govermentRankingList in govermentRanking.ListData"> <span class="list2">{{(paginationConf.currentPage-1)*paginationConf.itemsPerPage+$index+1}}</span> <span class="list2 ellipsis" title="{{govermentRankingList.DepartmentName}}">{{govermentRankingList.DepartmentName}}</span> <span class="list2">{{govermentRankingList.Average}}</span> <span class="list2">{{govermentRankingList.Credit}}</span> <span class="list2">{{govermentRankingList.UserCount}}</span> </div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmRankingGuide.html", '\x3c!--排行榜导航--\x3e <div class="personalCenterNav"> <div common-header title-header="\'排行榜导航\'" show-more="false" link-url="\'\'"></div> <div class="content tmBorder"> <ul> <li class="mar_top_15"> <a ui-sref="rankcourseclick" class="btn btn-primary">课程点击排行</a> <a ui-sref="rankloginsum" class="btn btn-primary">登陆次数排行</a> </li> <li class="mar_top_15"> <a ui-sref="rankgroup" class="btn btn-primary">单位排行</a> <a ui-sref="rankcoursefinish" class="btn btn-primary">课程完成排行</a> </li> <li class="mar_top_15"> <a ui-sref="userRankingList" class="btn btn-primary">个人排行</a> </li> </ul> </div> </div>'),
    t.put("components/tmRankingTab.html", '\x3c!--标签页 排行（首页）--\x3e <div class="rankingTab"> <div class="title"> <span class="text">排行榜</span> </div> <div class="rankTab"> <div class="tab-content"> <div class="tab-panel perlist"> \x3c!--课程点击排行--\x3e <div class="govermentRanking"> <p class="title"> <span class="rank1">排行</span> <span class="rank2">课程名称</span> <span class="rank3">点击量</span> </p> <ul class="rankingList clearfix" ng-repeat="rankingData in courseRankingData.ListData" ng-class="{\'rankListBg\':$index%2!=0}"> <li class="list1"> <span ng-if="$index<3" ng-class="{\'rankFirstBg\':$index==0,\'rankSecondBg\':$index==1,\'rankThirdBg\':$index==2}">{{$index+1}}</span> <span ng-if="$index>=3">{{$index+1}}</span> </li> <li class="list2" title="{{rankingData.Name}}"> <a>{{rankingData.Name}}</a> </li> <li class="list3">{{rankingData.Total}}</li> </ul> </div> </div> </div> </div> </div>'),
    t.put("components/tmRealTimeData.html", '\x3c!--实时数据--\x3e <div class="realTimeData"> <div class="realTimeList" dw-loading="realTimeList"> <ul> <li class="li1"> <img src="images/real_1.84f72e44.png" alt=""> <p class="count">注册人员数：{{realTimeData.Model.UsersCount}}</p> </li> <li class="li2"> <img src="images/real_2.46fb84cf.png" alt=""> <p class="count">在线人数：{{realTimeData.Model.OnlineUsersCount}}</p> </li> <li class="li3"> <img src="images/real_3.cacf2d25.png" alt=""> <p class="count">现有课程数量：{{realTimeData.Model.CourseCount}}</p> </li> <li class="li4"> <img src="images/real_4.59b9c33a.png" alt=""> <p class="count">PC在线人数：{{realTimeData.Model.OnlineUsersCount}}</p> </li> <li class="li5"> <img src="images/real_5.7e4fc64b.png" alt=""> <p class="count">移动在线人数：{{realTimeData.Model.OnlineUsersCount}}</p> </li> </ul> </div> </div>'),
    t.put("components/tmRegister.html", '\x3c!--注册--\x3e <div class="register"> <h3>注册</h3> <form class="form-signup" name="myForm" novalidate> <div class="form-group"> <label class="required" for="exampleInputUser">用户名：</label> <input ng-blur="verifyAccount()" ng-change="verifyAccount()" ng-model="register.account" type="text" class="form-control" my-placeholder id="exampleInputUser" placeholder="请输入用户名"> <span class="error" ng-show="accountError">用户名不能为空！</span> </div> <div class="form-group"> <label class="required" for="exampleInputPassword1">登录密码：</label> <input ng-blur="verifyPassword()" ng-change="verifyPassword()" ng-model="register.password" type="password" autocomplete="off" class="form-control" my-placeholder id="exampleInputPassword1" placeholder="请输入登录密码"> <span class="error" ng-show="passwordError">登录密码不能为空！</span> </div> <div class="form-group"> <label class="required" for="exampleInputPassword2">确认密码：</label> <input ng-blur="verifyConfirm()" ng-change="verifyConfirm()" ng-model="confirmPassword" type="password" autocomplete="off" class="form-control" my-placeholder id="exampleInputPassword2" placeholder="请输入确认密码"> <span class="error" ng-show="confirmError">确认密码不能为空！</span> <span class="error" ng-show="confirmError2">两次密码输入不一致！</span> </div> <div class="form-group"> <label class="required" for="exampleInputName">姓名：</label> <input ng-blur="verifyName()" ng-change="verifyName()" ng-model="register.name" type="text" class="form-control" my-placeholder id="exampleInputName" placeholder="请输入姓名"> <span class="error" ng-show="nameError">姓名不能为空！</span> </div> <div class="form-group" style="position: relative"> <label class="required">单位：</label> <span my-tree class="myTree" ng-model="register.groupid"></span> <span class="error" ng-show="groupidError">单位不能为空！</span> </div> <div class="form-group"> <label for="exampleInputCard">身份证号：</label> <input ng-blur="verifyIdCard()" ng-change="verifyIdCard()" ng-model="register.idcard" type="text" class="form-control" my-placeholder id="exampleInputCard" placeholder="请输入身份证号"> <span class="error" ng-show="idcardError">身份证号不能为空！</span> <span class="error" ng-show="idcardError2">身份证格式有误！</span> </div> <div class="form-group"> <label for="exampleInputEmail">电子邮箱：</label> <input ng-blur="verifyEmail()" ng-change="verifyEmail()" ng-model="register.email" type="text" class="form-control" my-placeholder id="exampleInputEmail" placeholder="例：example@email.com"> <span class="error" ng-show="emailError">电子邮箱不能为空！</span> <span class="error" ng-show="emailError2">邮箱格式有误！</span> </div> <div class="form-group"> <label for="exampleInputPhone">手机号码：</label> <input ng-blur="verifyMobile()" ng-change="verifyMobile()" ng-model="register.mobile" type="text" class="form-control" my-placeholder id="exampleInputPhone" placeholder="请输入手机号码"> <span class="error" ng-show="mobileError">手机号码不能为空！</span> <span class="error" ng-show="mobileError2">手机号码格式有误！</span> </div> \x3c!--<div class="form-group">\n      <label for="verificationCode">验证码：</label>\n      <input ng-blur="verifySmgCode()" ng-change="verifySmgCode()" ng-model="register.smgcode"\n             type="text" class="form-control verificationCode" my-placeholder id="verificationCode" placeholder="请输入验证码">\n      <span verification-code mobile="register.mobile"></span>\n      <span class="error" ng-show="smgcodeError">验证码不能为空！</span>\n    </div>--\x3e <button ng-click="clickRegister()" type="submit" class="registerBtn btn btn-primary">注册</button> </form> \x3c!-- Modal --\x3e <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> <div class="modal-dialog modal-lg" role="document"> <div class="modal-content"> <div class="modal-header"> <h4 class="modal-title" class="myModalLabel">衢州市专业技术人员继续教育学习平台注册服务协议</h4> </div> <div class="modal-body"> <h2 class="red text-center" style="color: red">本系统是精英在线演示系统 不是您的学习系统 请勿注册</h2> \x3c!--<p style="margin-bottom: 20px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span\n              style="font-family:仿宋">尊敬的用户：</span></span></p>\n          <p style="text-indent: 43px"><span style=";font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span\n              style="font-family:\'仿宋\';">欢迎使用衢州市专业技术人员继续教育学习平台，在您注册为本网站用户前，请您一定仔细阅读《衢州市专业技术人员继续教育学习平台注册服务协议》（以下简称</span>“本协议”）。本协议为您与泸州市人力资源和社会保障局达成的网站及网络服务等内容的使用协议，一旦您点击“同意”按钮，即视为您同意并遵守本协议的全部条款，本协议即对您和**市人力资源和社会保障局都具有法律约束力。如您不同意本协议内容，请不要注册为本网站用户。您同意本协议并按照本网站的注册程序完成注册后，方可成为本网站用户，方可使用本网站产品和服务。</span>\n          </p>\n          <p><span style="font-family:仿宋;font-size:21px">&nbsp;</span></p>\n          <p style="margin-bottom: 20px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span\n              style="font-family:仿宋">一、用户承诺</span></span></p>\n          <p style="margin-left: 11px;text-indent: 43px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span\n              style="font-family:仿宋">您同意并承诺做到以下几点：</span></span></p>\n          <p style="margin-left: 11px"><span style=";font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;<span\n              style="font-family:仿宋">（一）不发表任何与法律、法规及公序良俗相违背的内容，包括但不限于</span></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;1、反对宪法所确定的基本原则的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;3、损害国家荣誉和利益的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;4、煽动民族仇恨、民族歧视，破坏民族团结的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;5、破坏国家宗教政策，宣扬邪教和封建迷信的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;6、散布谣言，扰乱社会秩序，破坏社会稳定的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;8、侮辱或者诽谤他人，侵害他人合法权益的；</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;9、含有法律、行政法规禁止的其他内容的。</span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（二）承诺发表的内容中不含有任何侵害他人姓名权、肖像权、隐私权、著作权或其他合法权益的内容，不上传任何广告或促销信息，或任何带有贬损或损害性特征的内容，不粘贴或传播带有病毒的信息，不利用软件或网络系统漏洞破坏干扰本网站网络服务，否则本网站有权删除相关内容且由此产生的法律责任及相关费用（包括但不限于软硬件费用、维修费用、诉讼或仲裁费用、向相关权利人赔偿的费用、给本网站造成的损失等等）全部由您个人承担，本网站不承担任何法律责任。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（三）您同意本网站可以永久性地对您发布的内容进行审核、整理、修改、复制、传播；您同意本网站删除您发表的、可能侵害他人姓名权、肖像权、隐私权、著作权或其他合法权益的内容以及其他有害或违规内容，且您保证不重复发表上述内容；您有义务证明您发表的内容没有侵犯任何第三方的任何合法权益。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（四）尊重本网站及网络产品的著作权及其他合法权益，仅以个人学习目的使用本网站，并保证不用于任何调查、广告或其他商业目的，不用于任何非法目的。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（五）您违背上述承诺之一的，均为严重违约行为，为防止损害扩大，本网站有权自行采取救济行为，包括但不限于删除您的账户信息、禁止您继续使用本网站及网络产品、停止提供服务等。</span></span>\n          </p>\n          <p><span style="font-family:仿宋;font-size:21px">&nbsp;</span></p>\n          <p style="margin-bottom: 20px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">二、用户的权利和义务</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（一）用户注册时需提供详尽、准确的个人资料并及时更新，以便在统计学时学长是能准确关联到您以及您的个人信息，作为年终考评相关依据。您注册后应牢记您的账号和密码，您有权随时查询、更改或更新注册信息。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（二）您注册后可在课程中心模块选择您要学习的课程。此课程仅限于在线浏览权，课程的著作权及其他合法权益仍归原权利人享有。除本网站特别标明或书面授权许可外，您无权下载、复制、刻录、录屏、传播、发表、出售、出租、编译、反编译网站的任何内容或演绎衍生出其他作品。否则，本网站有权封存相关用户</span>ID并追究相关法律责任。</span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（三）本网站及其任何组成部分，包括但不限于网站页面设计、编排方式、技术程序、软件、资源、网络产品、产品或服务名称、文字、视音频、图片、电子书、实验、</span>Logo、商标、标识、著作权等均由本网站所有，均受到著作权法、商标法及其他法律法规的保护。除本网站特别标明或书面授权许可外，任何媒体、网站或个人未经本网站正式书面授权，不得转载、链接、转贴、修改、复制、下载、出售、演绎、反向编译或以其他方式复制、发布或发表上述内容，不得将之用于任何营利或非营利目的，不得以个人学习为名实施任何侵害本网站权益的行为；已经本网站书面授权的媒体、网站或个人在使用时必须注明“视频/图片/文字来源：衢州市专业技术人员继续教育学习平台”，且不得擅自允许他人继续转载或复制，不得出售或用于商业目的。违反上述规定或有其他侵权行为的，本网站权利人保留追究侵权人法律责任的权利。</span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（四）如您发现本网站其他用户有侵犯您姓名权、肖像权、隐私权、著作权或其他合法权益现象的，请及时与本网站联系并附加相关权利证明文件，以便本网站及时作出处理，维护您的合法权益。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（五）本网站本着严谨负责的态度对网络产品质量精益求精，但不保证无任何错误或瑕疵，如您同意注册为本网站用户，即视为同意并接受上述观点。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（六）本网站严格对用户个人隐私的保护和保密，但您也有义务保证密码和帐号的安全，您应对利用该帐号和密码所进行的活动承担相应法律责任。如您发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管。一个账户只能在一台电脑上唯一性登录，不可由多用户同时登录。账号注册后一年内未登录的，本网站有权删除该账号。</span></span>\n          </p>\n          <p><span style="font-family:仿宋;font-size:21px">&nbsp;</span></p>\n          <p style="margin-bottom: 20px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span\n              style="font-family:仿宋">三、免责声明</span></span></p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（一）由于计算机设备的多样性和复杂性，本网站不保证所提供的视频在每一个</span>Windows系统上运行时不出现任何问题，不担保可以和任何程序同时使用、运行而不发生冲突。如出现上述现象，用户应立即检测相关设备及程序，防止造成任何损失。</span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（二）因地震、台风、洪水、火灾、战争、政府禁令以及其他不可抗力、用户自身疏忽管理等原因，致使影响网站、网络产品及服务使用的，本网站不承担任何法律责任。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（三）对于本网站所提供的学习内容，我们力求精益求精，但由于能力有限及理解力的不同，可能会存在纰漏之处。如果您使用本网站，表明您己经对我们工作主体部分的认可和宽容我们工作中可能存在的纰漏。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（四）本网站承诺保护注册用户的隐私，但经您授权披露或您自动泄露个人信息而导致自身隐私泄露或账户被窃取的，以及因公安、行政、司法等部门执行公务而必须公布您的信息的，本网站不承担任何法律责任。</span></span>\n          </p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">（五）为方便您使用，本网站会提供一些第三方网站或资源的链接，除另有声明外，这些链接仅为提供便利，本网站无法对第三方网站服务进行控制，请您浏览时慎重选择。</span></span>\n          </p>\n          <p><span style="font-family:仿宋;font-size:21px">&nbsp;</span></p>\n          <p style="margin-bottom: 20px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span\n              style="font-family:仿宋">四、法律适用及管辖</span></span></p>\n          <p style="text-indent: 43px;line-height: 20px"><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><span style="font-family:仿宋">本协议的订立、执行、解释及争议的解决均适用中华人民共和国法律。</span></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;</span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px"><br></span><span\n              style="font-family:仿宋;color:rgb(51,51,51);font-size:21px">&nbsp;&nbsp;&nbsp;&nbsp;<span\n              style="font-family:仿宋">再次郑重提示：如果您不接受本协议，请不要点击</span>“同意”按钮；一旦您点击“同意”按钮并完成注册的，即视为您同意并遵守本协议所包含的全部条款。</span>\n          </p>\n          <p><br></p>--\x3e </div> <div class="modal-footer" style="text-align: center"> <button type="button" style="width: 88px" class="btn btn-default btn-lg" data-dismiss="modal" ng-click="noAgree()">不同意 </button> <button style="width: 88px" type="button" class="btn btn-primary btn-lg" data-dismiss="modal">同意</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmRelatedCourse.html", '\x3c!--相关课程--\x3e <div class="relatedCourse"> <div class="title"> <h3>相关课程</h3> </div> <ul class="clearfix"> <li ng-repeat="courseCenterData in relatedCourseData.ListData"> <a ui-sref="courseDetails({Id:courseCenterData.Id})" title="{{courseCenterData.Name}}" target="_blank"> <img ng-src="{{relatedCourseData.ImageCourse+\'/\'+courseCenterData.Img}}" err-src="images/notCourse.976a881b.png" alt=""> </a> <div class="mar_top_10 desc"> <p><a ui-sref="courseDetails({Id:courseCenterData.Id})" title="{{courseCenterData.Name}}" target="_blank">{{courseCenterData.Name}}</a> </p> <p class="clearfix"><span class="pull-left">讲师：{{courseCenterData.Teacher}}</span><span class="red pull-right">学分：{{courseCenterData.Credit.toFixed(1)}}分</span></p> <p>时长：{{courseCenterData.Time}}小时</p> </div> </li> </ul> </div>'),
    t.put("components/tmResultShow.html", '\x3c!--成果展示--\x3e <div class="resultShow"> <div common-header title-header="resultShowData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main" href="#/main">首页</a></li> <li class="active">{{resultShowData.TitleNav}}</li> </ol> <ul class="resultContent clearfix" dw-loading="resultShow"> <li class="pull-left" ng-repeat="list in resultShowData.ListData"> <a ui-sref="articleDetail({ID:list.Id})" target="_blank"><img ng-src="{{resultShowData.Path+\'/\'+list.Img}}" alt="{{list.Name}}" err-src="images/notCourse.976a881b.png"></a> <p><a ui-sref="articleDetail({ID:list.Id})" target="_blank">{{list.Name}}</a></p> </li> </ul> </div> </div>'),
    t.put("components/tmSearchResult.html", '\x3c!--全局搜索结果--\x3e <div class="tmSearchResult"> <div common-header title-header="\'搜索结果\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">搜索结果</li> </ol> <form class="form-inline formSearch"> <select class="form-control" ng-model="selectedType"> <option value="">全部</option> <option ng-repeat="select in selectTypes" ng-value="select.type">{{select.name}}</option> </select> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入搜索内容"> </div> <button type="submit" class="btn btn-primary" ng-click="search()">搜索</button> </form> <p ng-show="!paginationConf.totalItems" class="result">暂无数据</p> <div ng-show="paginationConf.totalItems" class="mar_top_15 searchContent myTab" dw-loading="tmsearchresult"> <div class="perlist"> <div class="title_bar"> <div class="list8 text-center">搜索结果</div> <div class="list2 text-center">发布日期</div> </div> <div class="list" ng-repeat="newsData in newsData"> <div class="list8 text-left"> <span class="arrow"></span> <a ng-if="newsData.Type==\'Article\'" ui-sref="articleDetail({ID:newsData.Id})" target="_blank"> [文章：]{{newsData.Name}} </a> <a ng-if="newsData.Type==\'Notice\'" ui-sref="noticeDetail({ID:newsData.Id})" target="_blank"> [通知：]{{newsData.Name}} </a> <a ng-if="newsData.Type==\'Course\'" ui-sref="courseDetails({Id:newsData.Id})" target="_blank"> [课程：]{{newsData.Name}} </a> </div> <div class="list2">{{newsData.CreateDate | dateFilter | date:\'yyyy-MM-dd HH:mm:ss\'}}</div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmSecuritySetting.html", '\x3c!--设置密保--\x3e <div class="securitySetting"> <div common-header title-header="\'设置密保\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">设置密保</li> </ol> <div ng-if="isVisible"> <form role="form"> <ul class="clearfix mar_left_20"> <li class="form-group form-inline pull-left"> <label class="control-label pull-left">请输入密码：</label> <input type="password" autocomplete="off" class="myPwd form-control pull-left" ng-model="$parent.myPwd"> </li> <li class="pull-left"> <button type="submit" ng-click="validatePwd()" class="btn btn-primary mar_left_10">提交</button> </li> </ul> </form> </div> <div ng-if="!isVisible"> <form role="form" class="form-group form-inline"> <ul class="mar_left_20"> <li ng-repeat="data in questionData" class="mar_top_15"> <div class="form-group"> <label class="control-label">问题：</label> <input type="text" class="form-control" ng-model="data.Question"> </div> <div class="form-group mar_left_10"> <label>答案：</label> <input type="text" class="form-control" ng-model="data.Answer"> </div> </li> <li> <button class="mar_top_15 mar_left_10 btn btn-primary" ng-click="addQuestion()">提交</button> </li> </ul> </form> </div> <p class="tip-security">友情提示：设置密保之后才能找回密码！</p> </div> </div>'),
    t.put("components/tmShoppingCart.html", '\x3c!--购物车--\x3e <div class="shoppingCart"> <div common-header title-header="\'购物车\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div class="myTab"> <div class="tab-content" dw-loading="shoppingCart"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list3">商品名称</span> <span class="list1-5">商品类别</span> <span class="list1-5">数量</span> <span class="list1">单价</span> <span class="list1">总价</span> <span class="list1-5">操作</span> </div> <div class="list" ng-repeat="list in shoppingCartData.ListData"> <span class="list3 ellipsis"><a ui-sref="courseDetails({Id:list.ProductId})" target="_blank">{{list.ProductName}}</a></span> <span class="list1-5">{{list.ProductType==\'Course\'?\'课程\':\'图书\'}}</span> <span class="list1-5"><input class="form-control" type="text" disabled ng-value="list.Count"></span> <span class="list1">￥{{list.Price.toFixed(2)}}</span> <span class="list1">￥{{list.TotalPrice.toFixed(2)}}</span> <span class="list1-5"><a ng-click="delCourseFromCart(list.Id)" class="btn btn-default">删除</a></span> </div> </div> <div class="shooingCartFooter clearfix"> <p class="pull-left"> <a ui-sref="courseCenterBuy" class="btn btn-primary">继续选课</a> <a ui-sref="personalCenter" class="btn btn-primary">返回学习中心</a> </p> <p class="pull-right mar_right_20"> <span> 总价：￥{{shoppingCartData.TotalPrice.toFixed(2)}}</span> <a ng-click="addOrder()" class="btn btn-primary">下单</a> </p> </div> </div> </div> </div> </div>'),
    t.put("components/tmShowArticleDetail.html", '\x3c!--文章详情--\x3e <div class="article-detail" dw-loading="tmshowarticledetail"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">文章内容</li> </ol> <div class="article-detail-title-bar"> <p class="article-detail-title">{{articleData.Name}}</p> <p class="article-detail-info"> <span ng-if="articleData.CreatedDate">发布时间：{{articleData.CreatedDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span ng-if="!articleData.CreatedDate">发布时间：{{articleData.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span ng-if="articleData.Author">作者：{{articleData.Author}}</span> <span ng-if="!articleData.Author">作者：{{articleData.Creator}}</span> <span>来源：{{articleData.Source}}</span> <span ng-show="articleData.ClickCount">浏览次数：{{articleData.ClickCount}}</span> </p> <p class="article-detail-info" ng-show="articleData.Id"> <a class="favoriteadd" ng-click="favoriteAdd({mainId:articleData.Id,type:articleData.Type,title:articleData.Name,remark:\'0\'},token);" ng-show="!articleData.FavoriteId">[收藏]</a> <a class="favoritedel" ng-click="favoriteDelete({id:articleData.FavoriteId},token);" ng-show="articleData.FavoriteId">[取消收藏]</a> <a href="/Content/Upload/Attachment/{{articleData.AttachmentName}}" target="_blank" ng-show="articleData.AttachmentName">[附件下载]</a> <a ng-click="print()">[打印]</a> <a ng-click="reduceFont()">[缩小字体]</a> <a ng-click="increaseFont()">[放大字体]</a> </p> </div> <div id="setFont" class="article-detail-content justify" ng-bind-html="articleData.Content| trustHtml"></div> <div class="article-detail-changeBar clearfix"> <p class="grid_11 article-detail-changeBar-anhor pull-left ellipsis" ng-show="articleData.UpName" title="{{articleData.UpName}}"> <a ui-sref="articleDetail({ID:articleData.UpId})">上一篇：{{articleData.UpName}}</a> </p> <p class="grid_11 article-detail-changeBar-anhor pull-right ellipsis" ng-show="articleData.DownName" title="{{articleData.DownName}}"> <a ui-sref="articleDetail({ID:articleData.DownId})">下一篇：{{articleData.DownName}}</a> </p> </div> </div>'),
    t.put("components/tmSoftWare.html", '<div class="softWare"> <div common-header title-header="\'必装软件\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">必装软件</li> </ol> <div> <h3>系统必要控件检测安装</h3> <table class="table table-bordered"> <tbody> <tr align="center"> <td height="40" class="table1"> <span class="font-biaoti"><strong>★</strong></span> </td> <td class="table1"> <span class="font-biaoti"><strong>软件名称（点击下载安装）</strong></span> </td> <td class="table1"> <span class="font-biaoti"><strong>适用系统</strong></span> </td> <td class="table2"> <span class="font-biaoti"><strong>是否安装</strong></span> </td> </tr> <tr align="center"> <td height="40" class="table1"> <img src="/images/media-player.c08940d9.jpg"> </td> <td class="table1"> <a target="_blank" href="http://windows.microsoft.com/zh-cn/windows/download-windows-media-player" class="font-chajian">视频播放器</a> </td> <td class="table1"> <span class="font-biaoti"> · Windows XP （SP1、SP2、SP3）<br> · Windows vista（SP1）<br> · Windows 7（SP1）（32位/64位） </span> </td> <td class="table2"> <span class="font-biaoti" id="mediacheck"></span> </td> </tr> <tr align="center"> <td height="40" class="table1"> <img src="/images/flash_play.fbea3249.jpg"> </td> <td class="table1"> <a target="_blank" href="http://get.adobe.com/cn/flashplayer/" class="font-chajian">Flash动画插件</a> </td> <td class="table1"> <span class="font-biaoti"> · Internet Explorer 9（32位）<br> · Internet Explorer 8 <br> · Internet Explorer 7 <br> · Internet Explorer 6 <br> · 腾讯 TT <br> · 360安全浏览器<br> · 傲游浏览器<br> </span> </td> <td class="table2"> <span class="font-biaoti" id="flashcheck"></span> </td> </tr> <tr> <td colspan="4" height="30"> <div align="center" class="font-chajian2"> <span id="message"></span> </div> </td> </tr> </tbody> </table> </div> </div> </div>'),
    t.put("components/tmSpecialBanner.html", '\x3c!--专题培训banner--\x3e <div class="specialBanner"> <div class="specialBannerText"> <img src="../qzzj/images/bannerCenter.9e67392b.png" alt="banner"> </div> </div>'),
    t.put("components/tmSpecialImg.html", '\x3c!--专题学习轮播--\x3e <div class="specialImg"> <div common-header title-header="studySpecialData.TitleNav" show-more="true" link-url="\'speciallearning\'"></div> <div class="slider3"> <div class="slide" ng-repeat="list in studySpecialData.ListData" repeat-finish="repeatFinish()"> <a ui-sref="{{list.Url}}" title="{{list.SeriesName}}" target="_blank"> <img ng-src="{{studySpecialData.ImagePath+\'/\'+list.Icon}}" err-src="images/notFound.c0814127.jpeg" alt=""> </a> </div> </div> </div>'),
    t.put("components/tmSpecialLearning.html", '\x3c!--专题学习more--\x3e <div class="specialLearning"> <div common-header title-header="\'专题学习\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ul class="specialLearningList"> <li ng-repeat="list in studySpecialData.ListData" class="clearfix"> <div class="left pull-left"> <a ui-sref="{{list.Url}}" target="_blank"> <img class="specialImg" ng-src="{{studySpecialData.ImagePath+\'/\'+list.Icon}}" err-src="images/notFound.c0814127.jpeg" alt=""> </a> </div> <div class="right pull-left"> <p class="title ellipsis"> <a ui-sref="{{list.Url}}" target="_blank">{{list.SeriesName}}</a> </p> <p class="desc">{{list.SeriesDescription|wordLimit:45}}</p> <p class="userCount">用户量：{{list.UserCount}}</p> </div> </li> </ul> <p ng-show="showNoSpecialClass" class="result">暂无专题学习</p> </div> </div>'),
    t.put("components/tmSpecialLearningCourse.html", '\x3c!--专题学习课程--\x3e <div class="specialLearningCourse"> <div common-header title-header="specialCourseData.ChannelName" show-more="true" link-url="\'courseCenter\'"></div> <ul class="courseList" dw-loading="specialLearningCourse"> <li ng-repeat="list in specialCourseData.ListData" ng-class="{\'last\':($index+1)%4==0}"> <a ui-sref="courseDetails({Id:list.Id})" title="{{list.Name}}" target="_blank"> <img ng-src="{{specialCourseData.ImageCourse+\'/\'+list.Img}}" err-src="images/notCourse.976a881b.png" alt=""> </a> <p class="courseName ellipsis" title="{{list.Name}}"><a ui-sref="courseDetails">{{list.Name}}</a></p> <p class="courseTeacher">讲师：{{list.Teacher}}</p> </li> </ul> </div>'),
    t.put("components/tmSpecialNewSlide.html", '\x3c!--专题学习新闻轮播--\x3e <div class="specialNewSlideOuter" dw-loading="specialNewSlide"> <div class="specialNewSlide"> <div class="slideList" ng-repeat="list in slideData.ListData" repeat-finish="startSlide()"> <a ui-sref="articleDetail({ID:list.Id})" target="_blank"> <img ng-src="{{slideData.Path+\'/\'+list.Img}}" title="{{list.Name}}" err-src="images/notFound.c0814127.jpeg"> </a> <p class="titleName"> <a class="ellipsis" ui-sref="articleDetail({ID:list.Id})" title="{{list.Name}}" target="_blank"> {{list.Name}} </a> </p> </div> </div> </div>'),
    t.put("components/tmSpecialNews.html", '\x3c!--专题学习新闻--\x3e <div class="specialNews"> <div common-header title-header="specialNewsData.TitleNav" show-more="true" link-url="articleUrl"></div> <ul class="specialNewsContent" dw-loading="{{categoryCode}}"> <li ng-repeat="list in specialNewsData.ListData"> <span class="arrow"></span> <span class="title ellipsis" title="{{list.Name}}"> <a ui-sref="articleDetail({ID:list.Id})" target="_blank">{{list.Name}}</a> </span> </li> </ul> </div>'),
    t.put("components/tmSpecialTraining.html", '\x3c!--专题培训(首页)--\x3e <div class="specialTraining" dw-loading="specialTraining"> <div common-header title-header="\'专题学习\'" show-more="true" link-url="\'speciallearning\'"></div> <ul class="specialContent"> <li ng-repeat="list in studySpecialData.ListData"> <p> <a ui-sref="{{list.Url}}" target="_blank"> <img class="specialImg" ng-src="{{studySpecialData.ImagePath+\'/\'+list.Icon}}" err-src="images/notFound.c0814127.jpeg" alt=""> </a> </p> <p class="title" title="{{list.SeriesName}}"> <a ui-sref="{{list.Url}}" target="_blank">{{list.SeriesName}}</a> </p> </li> <p ng-show="showNoSpecialClass" class="result">暂无专题学习</p> </ul> </div>'),
    t.put("components/tmStarBox.html", '\x3c!--星级评分--\x3e <div class="starts-rate"> <ul class="my-stars-list"> <li class="my-stars-items" ng-mouseover="mouseoverStar(myStar)" ng-mouseleave="mouseleaveStar(myStar)" ng-click="stars(myStar)" ng-class="{myStarsSel: clickCnt > $index , myStarHover: hoverCnt > $index }" ng-repeat="myStar in myStars track by $index" title="{{ myStar }}星">{{ myStar }} </li> </ul> <span class="rate-text"> {{ratingText}} </span> </div>'),
    t.put("components/tmStudentStyle.html", '\x3c!--学员风采--\x3e <div class="studyStyle"> <div common-header title-header="\'学员风采\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">学员风采</li> </ol> <div class="styleContent" dw-loading="studyStyle"> <ul class="clearfix"> <li class="courseList pull-left" ng-repeat="list in studyStyleData.ListData"> <a ui-sref="studentstyledetail({Id:list.Id})"> <img ng-src="{{list.Img}}" err-src="/images/noGoodStudent.722da720.png"> </a> <p><a ui-sref="studentstyledetail({Id:list.Id})" class="name">{{list.Name}}</a></p> <p class="source">{{list.Source}}</p> </li> </ul> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmStudentStyleDetail.html", '\x3c!--我的风采--\x3e <div class="studentStyleDetail"> <div common-header title-header="\'我的风采\'" show-more="false" link-url="\'\'"></div> <ol class="breadcrumb mar_top_15"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">我的风采</li> </ol> <div class="article-detail container_24" dw-loading="tmshowarticledetail"> <div class="article-detail-title-bar"> <p class="article-detail-title grid_24">{{articleData.Name}}</p> <p class="article-detail-info"> <span ng-if="articleData.CreatedDate">发布时间：{{articleData.CreatedDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span ng-if="!articleData.CreatedDate">发布时间：{{articleData.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span ng-if="articleData.Author">作者：{{articleData.Author}}</span> <span ng-if="!articleData.Author">作者：{{articleData.Creator}}</span> <span>来源：{{articleData.Source}}</span> <span ng-show="articleData.ClickCount">浏览次数：{{articleData.ClickCount}}</span> </p> <p class="article-detail-info" ng-show="articleData.Id"> <a class="favoriteadd" ng-click="favoriteAdd({mainId:articleData.Id,type:articleData.Type,title:articleData.Name,remark:\'0\'},token);" ng-show="!articleData.FavoriteId">[收藏]</a> <a class="favoritedel" ng-click="favoriteDelete({id:articleData.FavoriteId},token);" ng-show="articleData.FavoriteId">[取消收藏]</a> <a href="/Content/Upload/Attachment/{{articleData.AttachmentName}}" target="_blank" ng-show="articleData.AttachmentName">[附件下载]</a> <a ng-click="print()">[打印]</a> <a ng-click="reduceFont()">[缩小字体]</a> <a ng-click="increaseFont()">[放大字体]</a> </p> </div> <div id="setFont" class="article-detail article-detail-content justify" ng-bind-html="articleData.Content| trustHtml"> </div> </div> </div>'),
    t.put("components/tmStudentsHourRanking.html", '\x3c!--个人排行(模块)--\x3e <div class="studentsHourRanking"> <div common-header title-header="studentHourRanking.ViewBag.TitleNav" show-more="true" link-url="\'userRankingList\'"></div> <div class="tmBorder" dw-loading="studentsHourRanking"> <p class="rankTitle list"> <span class="list2">排行</span> <span class="list3">姓名</span> <span class="list2-5">学时</span> <span class="list2-5">学次</span> </p> <ul class="rankingList list" ng-repeat="rankingData in studentHourRanking.ListData" ng-class="{\'rankListBg\':$index%2!=0}"> <li class="list2"> <span ng-if="$index<3" ng-class="{\'rankFirstBg\':$index==0,\'rankSecondBg\':$index==1,\'rankThirdBg\':$index==2}"></span> <span ng-if="$index>=3">{{$index+1}}</span> </li> <li class="list3">{{rankingData.UserName}}</li> <li class="list2-5">{{rankingData.Credit}}</li> <li class="list2-5">{{rankingData.LearnTime}}</li> </ul> </div> </div>'),
    t.put("components/tmStudyPlan.html", '\x3c!--我的学习计划--\x3e <div class="studyPlan"> <div common-header title-header="stydyPlanData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">{{stydyPlanData.TitleNav}}</li> </ol> <div class="myTab" dw-loading="studyPlan"> <div class="tab-content"> <div class="tab-panel perlist clearfix"> <div class="title_bar"> <span class="list4">课程名称</span> <span class="list1-5">课程进度</span> <span class="list1-5">计划状态</span> <span class="list1-5">计划完成日期</span> <span class="list1-5">操作</span> </div> <div class="list" ng-repeat="studyList in stydyPlanData.ListData"> <span class="list4 ellipsis" title="{{studyList.CourseName}}"> <a ui-sref="courseDetails({Id:studyList.CourseId})">{{studyList.CourseName}}</a> </span> <span class="list1-5">{{studyList.BrowseScore}}</span> <span class="list1-5">课程未完成</span> <span class="list1-5">{{studyList.PlanFinishDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span class="list1-5"> <a ng-click="planAdd(studyList.CourseId)" data-toggle="modal" data-target=".stydyPlanModal">更新</a>&nbsp;&nbsp; <a ng-click="delStudyPlan(studyList.Id)">删除</a> </span> </div> <div ng-transclude="pagation"></div> </div> </div> \x3c!-- modal学习计划 --\x3e <div class="modal fade stydyPlanModal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span> </button> <h4 class="modal-title">修改计划</h4> </div> <div class="modal-body"> <table class="table table-bordered"> <tbody> <tr> <td>课程名称：</td> <td style="text-align: left">{{planAddData.CourseName}}</td> </tr> <tr> <td>计划完成日期：</td> <td> <div class="datePicker"> <input class="form-control" type="text" ng-model="PlanFinishDate" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> </tr> <tr> <td>开始提醒日期：</td> <td> <div class="datePicker"> <input class="form-control" type="text" ng-model="RemindDate" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </td> </tr> <tr> <td>提醒周期：</td> <td style="text-align: left"> <select class="form-control" ng-model="selectCycle" ng-options="x for x in remindCycle"></select> </td> </tr> <tr> <td>提醒方式：</td> <td style="text-align: left"> 站内通知 </td> </tr> <tr> <td>计划说明：</td> <td> <textarea class="form-control" ng-model="planAddData.Remark" cols="50" rows="5"></textarea> </td> </tr> </tbody> </table> </div> <div class="modal-footer"> <button ng-click="addPlanUpdate({PlanFinishDate:PlanFinishDate,RemindDate:RemindDate,RemindCycle:selectCycle,Remark:planAddData.Remark,CourseId:planAddData.CourseId,Id:planAddData.Id})" type="button" class="btn btn-primary">提交 </button> </div> </div> </div> </div> </div> </div> </div>'),
    t.put("components/tmStudyStat.html", '\x3c!--学习统计--\x3e <div class="studyStat"> <div common-header title-header="\'学习统计\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">学习统计</li> </ol> <form class="form-inline formSearch"> <span>学年</span> <select class="form-control yearSelect" ng-model="selectYearValue" ng-options="x.value as x.name for x in yearHistory" ng-change="yearChange()"> </select> <span>查询时间：</span> <div class="form-group"> <div class="datePicker"> <input class="form-control" type="text" ng-model="startTime" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </div> <span>至</span> <div class="form-group"> <div class="datePicker"> <input class="form-control" type="text" ng-model="endTime" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </div> <button type="submit" class="btn btn-primary" ng-click="requestMyStudyStat({StartDate:startTime,EndDate:endTime,page: 1})">查询 </button> </form> <p class="welcome"> 尊敬的 <b class="highlight">{{studyStatData.Account}}</b>, 截止 <b class="highlight">{{studyStatData.StartDate}} 至 {{studyStatData.EndDate}} </b>, 您的学习状态：<b class="highlight">学习中</b> , 您已经累计获得课程学时 <b class="highlight">{{studyStatData.CreditSum}}</b> 学时 , 您已经选修 <b class="highlight">{{studyStatData.Count}}</b> 门课程, 已经完成 <b class="highlight">{{studyStatData.FinishCourse}}</b> 门课程, 您目前正在学习 <b class="highlight">{{studyStatData.UnFinishCourse}}</b> 门课程。 </p> <div class="myTab"> <div class="tab-content" dw-loading="studyStat"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list2">用户名</span> <span class="list2">姓名</span> <span class="list4">课程名称</span> <span class="list2">获得学时</span> </div> <div class="list" ng-repeat="studyList in studyStatData.ListData"> <span class="list2">{{studyStatData.Account}}</span> <span class="list2">{{studyList.UserName}}</span> <span class="list4 ellipsis">{{studyList.Name}}</span> <span class="list2">{{studyList.Credit}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmTechnicianTrainingLink.html", '\x3c!--公务员培训--\x3e <div class="technicianTrainingLink"> <div class="com-header com-header-cyan"> <h4 class="pull-left">专业技术人员培训</h4> <a ui-sref="patpTrainingNews" class="pull-right" target="_blank">更多&nbsp;&nbsp;+</a> </div> <div class="civil-body" dw-loading="technicianTrainingLink"> <ul> <li ng-repeat="linkData in technicianTrainingLink.ListData"> <a ui-sref="articleDetail({ID:linkData.Id})" title="{{linkData.Name}}" target="_blank"><span class="dian"></span><span class="content">{{linkData.Name}}</span></a></li> </ul> </div> </div> <style>.technicianTrainingLink .com-header a.pull-right {\r\n    line-height: 40px;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .technicianTrainingLink .com-header a.pull-right:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n  .technicianTrainingLink .civil-body {\r\n    height: 175px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .technicianTrainingLink .civil-body li {\r\n    height: 35px;\r\n  }\r\n\r\n  .technicianTrainingLink .civil-body li a {\r\n    display: inline-block;\r\n    padding: 7px 5px;\r\n    font-size: 14px;\r\n    color: #484848;\r\n    max-width: 316px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n  .technicianTrainingLink .civil-body li a:hover {\r\n    color: #b4ca41;\r\n    text-decoration: none;\r\n  }\r\n\r\n  .technicianTrainingLink .civil-body li a .content {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .technicianTrainingLink .civil-body li a:hover .dian {\r\n    background-color: #b4ca41;\r\n  }\r\n\r\n  .dian {\r\n    vertical-align: middle;\r\n  }</style>'),
    t.put("components/tmTestStat.html", '\x3c!--考试统计--\x3e <div class="examStat"> <div common-header title-header="examStatData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">{{examStatData.TitleNav}}</li> </ol> <form class="form-inline formSearch"> <span>学年</span> <select class="form-control yearSelect" ng-model="selectYearValue" ng-options="x.value as x.name for x in yearHistory" ng-change="yearChange()"> </select> <span>查询时间：</span> <div class="form-group"> <div class="datePicker"> <input class="form-control" type="text" ng-model="startTime" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </div> <span>至</span> <div class="form-group"> <div class="datePicker"> <input class="form-control" type="text" ng-model="endTime" date-time-picker> <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> </div> </div> <button type="submit" class="btn btn-primary" ng-click="requestMyStudyStat({StartDate:startTime,EndDate:endTime,page: 1})"> 查询 </button> </form> <p class="welcome"> 尊敬的 <b class="highlight">{{examStatData.Account}}</b>, 截止 <b class="highlight">{{examStatData.StartDate}} 至 {{examStatData.EndDate}} </b>, 您目前顺利通过 <b class="highlight">{{examStatData.FinishExam}}</b> 门考试 , 有 <b class="highlight">{{examStatData.UnFinishExam}}</b> 门考试未通过。总共获得 <b class="highlight">{{examStatData.ExamCreditSum}}</b> 学时 </p> <div class="myTab mar_top_15" dw-loading="examStat"> <div class="tab-content" dw-loading="myCenter"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list2">用户名</span> <span class="list2">姓名</span> <span class="list2 ellipsis">考试名称</span> <span class="list2">考试成绩</span> <span class="list2">获得学时</span> </div> <div class="list" ng-repeat="examList in examStatData.ListData"> <span class="list2">{{examStatData.Account}}</span> <span class="list2">{{examList.UserName}}</span> <span class="list2 ellipsis">{{examList.Name}}</span> <span class="list2">{{examList.ExamScore}}</span> <span class="list2">{{examList.Credit}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmTip.html", '\x3c!--小提示--\x3e <div class="tip" ng-show="showTip"> <div class="title"> <span>您有 <span>{{unReadNoticeList.length}}</span> 条未读消息！</span> <a class="pull-right" ng-click="closeTip()">×</a> </div> <p> <a ui-sref="noticeDetail({ID:unReadNoticeList[0].Id})" target="_blank">{{unReadNoticeList[0].Name}}</a> </p> </div>'),
    t.put("components/tmTrainingCenter.html", '\x3c!--班级园地--\x3e <div class="trainingCenter"> <div common-header title-header="\'班级园地\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">班级园地</li> </ol> <form class="form-inline formSearch"> <div class="form-group"> <input ng-model="searchTitle" type="text" class="form-control" my-placeholder placeholder="请输入要搜索的培训班"> </div> <button type="submit" class="btn btn-primary" ng-click="getClassList({title:searchTitle,page:1})">搜索</button> </form> <div class="myTab"> <ul class="nav nav-tabs" ng-init="vm.activeTab=1"> <li ng-class="{active: vm.activeTab == 1}"><a ng-click="vm.activeTab = 1;getClassList({type:\'just\',title:searchTitle,page:1})">正在举办</a></li> <li ng-class="{active: vm.activeTab == 2}"><a ng-click="vm.activeTab = 2;getClassList({type:\'immediately\',title:searchTitle,page:1})">即将举办</a></li> <li ng-class="{active: vm.activeTab == 3}"><a ng-click="vm.activeTab = 3;getClassList({type:\'already\',title:searchTitle,page:1})">已经举办</a></li> </ul> <div class="tab-content" dw-loading="trainingCenter"> <div class="tab-panel perlist" ng-show="vm.activeTab == 1"> <div class="title_bar clearfix"> <span class="list3">班级名称</span> <span class="list1">班级简介</span> <span class="list1-5">状态</span> <span class="list3">举办时间</span> <span class="list1-5">操作</span> </div> <div class="list" ng-repeat="justata in justListData.ListData"> <span class="list3" title="{{justata.Name}}">{{justata.Name}}</span> \x3c!--<span class="list1"><a ng-click="checkUserClass(justata.Id)">详情</a></span>--\x3e <span class="list1"><a ng-click="seeArticleDetail(justata.Id)" data-toggle="modal" data-target=".classModal">详情</a></span> <span class="list1-5" ng-if="!justata.ApplyStatus">未报名</span> <span class="list1-5" ng-if="justata.ApplyStatus">{{JudgeStatus(justata.ApplyStatus)}}</span> <span class="list3">{{justata.StartTime | dateFilter | date:\'yyyy-MM-dd\'}}~{{justata.EndTime | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span class="list1-5" ng-if="justata.ApplyStatus==\'UnApprove\'"><a class="btn btn-danger" disabled>审核未通过</a></span> <span class="list1-5" ng-if="justata.ApplyStatus==\'Normal\'"><a class="btn btn-success" ui-sref="classDetail({Id:justata.Id})">点击进入</a></span> <span class="list1-5" ng-if="justata.ApplyStatus==\'UnAudit\'"><a class="btn btn-default" ng-click="delClass(justata.Id,\'just\')">取消报名</a></span> <span class="list1-5" ng-if="!justata.ApplyStatus"><a class="btn btn-info" ng-click="addClass(justata.Id,\'just\')">点击报名</a></span> </div> <div ng-transclude="pagation"></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 2"> <div class="title_bar"> <span class="list3">班级名称</span> <span class="list1">班级简介</span> <span class="list1-5">状态</span> <span class="list3">举办时间</span> <span class="list1-5">操作</span> </div> <div class="list" ng-repeat="immediatelyData in immediatelyListData.ListData"> <span class="list3 cur_name" title="{{immediatelyData.Name}}">{{immediatelyData.Name}}</span> \x3c!--<span class="list1"><a ng-click="checkUserClass(immediatelyData.Id)">详情</a></span>--\x3e <span class="list1"><a ng-click="seeArticleDetail(immediatelyData.Id)" data-toggle="modal" data-target=".classModal">详情</a></span> <span class="list1-5" ng-if="!immediatelyData.ApplyStatus">未报名</span> <span class="list1-5" ng-if="immediatelyData.ApplyStatus">{{JudgeStatus(immediatelyData.ApplyStatus)}}</span> <span class="list3">{{immediatelyData.StartTime | dateFilter | date:\'yyyy-MM-dd\'}}~{{immediatelyData.EndTime | dateFilter | date:\'yyyy-MM-dd\'}}</span> <span class="list1-5" ng-if="immediatelyData.ApplyStatus==\'UnApprove\'"><a class="btn btn-danger" disabled>审核未通过</a></span> <span class="list1-5" ng-if="immediatelyData.ApplyStatus==\'Normal\'"><a class="btn btn-success" ui-sref="classDetail({Id:immediatelyData.Id})">点击进入</a></span> <span class="list1-5" ng-if="immediatelyData.ApplyStatus==\'UnAudit\'"><a class="btn btn-default" ng-click="delClass(immediatelyData.Id,\'immediately\')">取消报名</a></span> <span class="list1-5" ng-if="!immediatelyData.ApplyStatus"><a class="btn btn-info" ng-click="addClass(immediatelyData.Id,\'immediately\')">点击报名</a></span> </div> <div ng-transclude="pagation"></div> </div> <div class="tab-panel perlist" ng-show="vm.activeTab == 3"> <div class="title_bar"> <span class="list3">班级名称</span> <span class="list2">班级简介</span> <span class="list2">状态</span> <span class="list3">举办时间</span> </div> <div class="list" ng-repeat="alreadyData in alreadyListData.ListData"> <span class="list3" title="{{alreadyData.Name}}">{{alreadyData.Name}}</span> \x3c!--<span class="list2"><a ng-click="checkUserClass(alreadyData.Id)">详情</a></span>--\x3e <span class="list2"><a ng-click="seeArticleDetail(alreadyData.Id)" data-toggle="modal" data-target=".classModal">详情</a></span> <span class="list2">已举办</span> <span class="list3">{{alreadyData.StartTime | dateFilter | date:\'yyyy-MM-dd\'}}~{{alreadyData.EndTime | dateFilter | date:\'yyyy-MM-dd\'}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> \x3c!-- 班级详情 --\x3e <div class="modal fade classModal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">班级园地</h4> </div> <div class="modal-body"> <div class="classTip clearfix"> <i class="fa fa-hand-o-right pull-left" aria-hidden="true"></i> <div class="pull-left"> <span class="tipTitle">友情提示：<br></span> <span class="tipContent">班级简介会有介绍学习班级内容的规则和标准哦 请学员仔细查看，祝您学习愉快！</span> </div> </div> <div class="classContent"> <p>班级名称：{{classDetailData.Name}}</p> <p>培训时间：{{classDetailData.StartDate | dateFilter | date:\'yyyy-MM-dd\'}}~{{classDetailData.EndDate | dateFilter | date:\'yyyy-MM-dd\'}}</p> <p>报名时间：{{classDetailData.SignStart | dateFilter | date:\'yyyy-MM-dd\'}}~{{classDetailData.SignEnd | dateFilter | date:\'yyyy-MM-dd\'}}</p> <p>举办单位：{{classDetailData.Organizers}}</p> <p>结业方式：{{classDetailData.GraduateWay}}</p> <p>班级简介：{{classDetailData.Description}}</p> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button> </div> </div> </div> </div> </div>'),
    t.put("components/tmTrainingCourseClassify.html", '\x3c!--@*培训班分类*@--\x3e <div class="courseClassify"> <div common-header title-header="courseClassify.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <p class="panels" ng-repeat="courseList in courseClassify.ListData" ng-click="getClassList({categoryId:courseList.Id})"> {{courseList.Name}} </p> </div> </div>'),
    t.put("components/tmTryPlay.html", '\x3c!--\r\n * @Author: 张棱隆\r\n * @Date: 2019-03-05 14:25:34\r\n * @LastEditors: 张棱隆\r\n * @LastEditTime: 2020-07-21 16:26:32\r\n * @Description: Do not edit\r\n--\x3e <div class="tryPlayPage"> <div id="tryPlayBg"></div> <div tm-drag options="options" drag-ready="dragReady"></div> \x3c!--视频播放--\x3e <div tm-play-mp4 class="playMp4" ng-if="showPlayMp4"></div> <div tm-play-jy class="playMp4" ng-if="showPlayJy"></div> <div tm-play-scorm class="playMp4" ng-if="showPlayScorm"></div> <div tm-play-jy-scorm class="playMp4" ng-if="showPlayJyScorm"></div> <div tm-play-single class="playMp4" ng-if="showPlaySingle"></div> <div tm-play-pdf class="playMp4" ng-if="showPlayPdf"></div> </div>'),
    t.put("components/tmUnReadNotice.html", '\x3c!--未读通知--\x3e <div class="unReadNotice"> <div common-header title-header="noticeData.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li><a ui-sref="personalCenter">个人中心</a></li> <li class="active">{{noticeData.TitleNav}}</li> </ol> <div class="myTab" dw-loading="myFavorite"> <div class="tab-content" dw-loading="myCenter"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list5">通知标题</span> <span class="list2-5">阅读状态</span> <span class="list2-5">发布日期</span> </div> <div class="list" ng-repeat="List in noticeData.AllList"> <span class="list5 ellipsis"><a ui-sref="noticeDetail({ID:List.Id})" target="_blank">{{List.Name}}</a></span> <span ng-if="!List.Read" class="list2-5 red">未读</span> <span ng-if="List.Read" class="list2-5">已读</span> <span class="list2-5">{{List.CreateDate | dateFilter | date:\'yyyy-MM-dd\'}}</span> </div> <div ng-transclude="pagation"></div> </div> </div> </div> </div> </div>'),
    t.put("components/tmUserInformation.html", '\x3c!--个人信息--\x3e <div class="UserInformation"> <div common-header title-header="\'个人信息\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder" dw-loading="loginOut"> <ul class="loginAfter_ul"> <li>欢迎您：<b class="highlight">{{info.Model.Name}}</b>({{info.Model.Account}})</li> <li> <span>考核要求：至少完成<span class="highlight">90</span>学时</span> \x3c!--<span class="hours">规定公需课学时：<span class="highlight">{{info.Model.BatchPublicCredit}}</span></span>--\x3e \x3c!--<span class="hours">当前公需课学时：<span class="highlight">{{info.Model.PublicCredit}}</span></span>--\x3e </li> <li> \x3c!--<span class="hours">规定专业课学时：<span class="highlight">{{info.Model.BatchProCredit}}</span></span>--\x3e <span class="hours">当前公需课学时：<span class="highlight">{{info.Model.PublicCredit}}</span></span> <span class="hours">当前专业课学时：<span class="highlight">{{info.Model.ProCredit}}</span></span> </li> \x3c!--<li>\n        <span>考核状态：<span class="highlight">{{info.Model.PassStatus?"通过":"未通过"}}</span></span>\n      </li>--\x3e <li> <span>个人学习档案</span> <span class="item2"><a ui-sref="personaLearningArchives" target="_blank">详细&gt;&gt;</a></span> </li> <li> <span>您有<span class="highlight"> {{info.Model.UnRead}} </span>条新通知！</span> <span class="item2"><a ui-sref="unReadNotice">详细&gt;&gt;</a></span> </li> <li class="lastChild"> <a ui-sref="modifyPassword">修改密码</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a ui-sref="changeUser">修改信息</a> &nbsp;|&nbsp; <span class="item2" ng-if="info.UserType==\'管理员\'"><a href="/qzzj/admin/" target="_blank">进入管理控制台</a></span> </li> <li class="exit"> <a class="btn btn-primary" ng-click="out(\'out\')">退出</a> </li> </ul> </div> </div>'),
    t.put("components/tmUserInformationBuy.html", '\x3c!--个人信息（购买）--\x3e <div class="userInformationBuy"> <div common-header title-header="\'个人信息\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder" dw-loading="loginOut"> <ul class="loginAfter_ul"> <li>欢迎您：<b class="highlight">{{info.Model.Name}}</b>({{info.Model.Account}})</li> <li> <span class="hours">课程学时：<span class="highlight">{{info.Model.PcCredit+info.Model.MobileCredit}}</span></span> <span class="hours">考试学时：<span class="highlight">{{info.Model.ExamCredit}}</span></span> </li> <li> <span class="hours">当前学时：<span class="highlight">{{info.Model.SumCredit}}</span></span> <span class="hours">规定学时：<span class="highlight">{{info.Model.BatchTotalCredit}}</span></span> </li> <li> <span>考核状态：<span class="highlight">{{info.Model.PassStatus?"通过":"未通过"}}</span></span> </li> <li> <span>个人学习档案</span> <span class="item2"><a ui-sref="personaLearningArchives" target="_blank">详细&gt;&gt;</a></span> </li> <li> <span><a ui-sref="shoppingcart">购物车&gt;&gt;</a></span> <span class="item2"><a ui-sref="orderlist">我的订单&gt;&gt;</a></span> </li> \x3c!--<li>\r\n        <span><a ui-sref="invoicelist">我的发票&gt;&gt;</a></span>\r\n        <span class="item2"><a ui-sref="orderlist"></a></span>\r\n      </li>--\x3e <li> <span>您有<span class="highlight"> {{info.Model.UnRead}} </span>条新通知！</span> <span class="item2"><a ui-sref="unReadNotice">详细&gt;&gt;</a></span> </li> <li class="lastChild"> <a ui-sref="modifyPassword">修改密码</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a ui-sref="changeUser">修改信息</a> &nbsp;|&nbsp; <span class="item2" ng-if="info.UserType==\'管理员\'"><a href="/qzzj/admin/" target="_blank">进入管理控制台</a></span> </li> <li class="exit"> <a class="btn btn-primary" ng-click="out()">退出</a> </li> </ul> </div> </div>'),
    t.put("components/tmUserLogin.html", '\x3c!--首页登陆--\x3e <div class="loginBg bgLarge1"> <div class="banner_container"> <div class="banner_slider"> <div ng-repeat="item in linkData track by $index" class="bigBanner" repeat-finish="startBannerSlide()" ng-click="bannerClick(item)"> <div style="width: 100%; height: 400px;background: url({{item.Icon}}) no-repeat center center"></div> \x3c!--<img class="banner_img" ng-src="{{item.Icon}}" err-src="images/banner.e7a413bb.png" alt="">--\x3e </div> </div> </div> <div class="container_24 login_container"> <div class="grid_16 left_block"> <a class="left_hide_btn btn-1"></a> \x3c!-- <a class="left_hide_btn btn-1" ui-sref="userLogin"></a> --\x3e <a class="left_hide_btn btn-2" ui-sref="courseCenter"></a> <a class="left_hide_btn btn-3" ui-sref="personalCenter"></a> <a class="left_hide_btn btn-4" ui-sref="personaLearningArchives"></a> </div> <div class="grid_8 right_block"> <form class="login" dw-loading="userLogin" ng-if="showLogin"> <div class="title"> <div class="txt"> 用户登录 </div> </div> \x3c!-- <div class="form-group clearfix">\n          <input ng-focus="inputFocus()" ng-change="inputChange()" ng-model="login.Account"\n                 type="text" class="form-control" id="exampleInputUser"\n                 my-placeholder\n                 placeholder="请输入用户名">\n          <span class="error" ng-class="showError?\'is-visible\':\'\'">帐号或密码错误</span>\n          <span class="error" ng-class="showError2?\'is-visible\':\'\'">用户名密码不能为空</span>\n        </div>\n        <div class="form-group clearfix">\n          <input ng-focus="inputFocus()" ng-change="inputChange()" ng-model="login.PassWord"\n                 type="password" autocomplete="off" class="form-control" id="exampleInputPassword1"\n                 my-placeholder\n                 placeholder="请输入密码"\n          >\n        </div>\n        <div class="checkbox clearfix">\n          <label class="pull-left">\n            <input ng-model="login.RememberMe" type="checkbox">记住密码\n          </label>\n          <div class="forgetPassword pull-right">\n            <a ui-sref="forgetPassword">忘记密码？</a>\n          </div>\n        </div>\n        <button ng-click="clickLogin()" type="submit" class="btn btn-primary">立即登录</button> --\x3e \x3c!-- <button ng-click="openAlertModal1()" type="submit" style="margin-top: 108px;" class="btn btn-default">政务网快捷注册登录</button> --\x3e <a href="https://portal.zjzwfw.gov.cn/uc/sso/login?appId=A330801395944202106014821_1&sp=" style="margin-top: 108px;line-height: 32px" class="btn btn-primary" target="_blank">政务网快捷注册登录</a> </form> \x3c!--登陆成功--\x3e <div class="loginAfter" dw-loading="loginOut" ng-if="!showLogin"> <div class="title"> <div class="txt"> 个人信息 </div> </div> <div class="login_info"> \x3c!--个人中心的登陆后详细和首页不同--\x3e <ul class="loginAfter_ul"> <li>欢迎您：<b class="highlight">{{userMessage.Name}}</b> ({{userMessage.Account}})</li> <li> <span>考核要求：至少完成<span class="highlight">90</span>学时</span> \x3c!--<span class="hours">规定公需课学时：<span class="highlight">{{userMessage.BatchPublicCredit}}</span></span>--\x3e \x3c!--<span class="hours">当前公需课学时：<span class="highlight">{{userMessage.PublicCredit}}</span></span>--\x3e </li> <li> \x3c!--<span class="hours">规定专业课学时：<span class="highlight">{{userMessage.BatchProCredit}}</span></span>--\x3e <span class="hours">当前公需课学时：<span class="highlight">{{userMessage.PublicCredit}}</span></span> <span class="hours">当前专业课学时：<span class="highlight">{{userMessage.ProCredit}}</span></span> </li> <li> <span>个人学习档案</span> <span class="item2"><a ui-sref="personaLearningArchives" target="_blank">详细&gt;&gt;</a></span> </li> <li> <span>您有<span class="highlight"> {{userMessage.UnRead}} </span>条新通知！</span> <span class="item2"><a ui-sref="unReadNotice">查看详情&gt;</a></span> </li> <li class="lastChild"> <a ui-sref="modifyPassword">修改密码</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a ui-sref="changeUser">修改信息</a>&nbsp;|&nbsp; <span class="item2" ng-if="userAllMessage.UserType==\'管理员\'"><a href="/qzzj/admin" target="_blank">进入管理控制台</a></span> </li> <li class="exit"> <a class="btn btn-primary" ng-click="loginOut(\'out\')">退出</a> </li> </ul> </div> </div> </div> </div> <div class="modal fade alert_modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-body"> <p>1、衢州市专业技术人员继续教育学时登记管理系统已接入浙江政务服务网。点击“政务网快捷注册登录”可选择使用浙江政务服务网账号登录、短信验证码登录或者使用浙里办、电子社保卡扫码登录。如遇到原账号匹配问题请工作时间联系客服 0571-28990788转8005</p> <p>2、本平台暂时只支持经济序列的在线专业课程，其他序列暂无线上专业课程，<span class="highlight-red">请各位学员慎重选择自己的专业序列，否则可能影响学时统计。</span></p> \x3c!-- <p>1、学员初次登录系统时，请点击首页右侧的“政务网快捷注册登录”按钮，跳转至政务网登录页面，使用政务网账号登录成功后，自动注册以政务网绑定的证件号为账号的在线学习账号，初始密码为\'Qzzj\'+证件号后六位，如Qzzj123456。 </p>\n          <p>2、学员二次及以上登录平台以及APP时，直接在首页右侧“登录框”输入政务网绑定的证件号作为账号，密码默认证件号后六位。</p>\n          <p>3、学员首次进入系统必须先在电脑端通过政务网注册账号，然后才能登录APP。</p>\n          <p>4、本平台暂时只支持经济序列的在线专业课程，其他序列暂无线上专业课程，<span class="highlight-red">请各位学员慎重选择自己的专业序列，否则可能影响学时统计。</span></p> --\x3e <div class="form-group form-inline text-center"> <button class="btn btn-default" type="button" ng-click="closeAlertModal()">我知道了</button> <label for="disableAlert"><input type="checkbox" id="disableAlert" ng-model="disableAlert" ng-value="true">不再提醒</label> </div> </div> </div> </div> </div> <div class="modal fade alert_modal1" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-body"> <p>为向您提供我们产品及或服务的基本功能，您须授权我们收集、使用必要的最小范围信息，相关信息将以加密形式进行传输、存储。我们将保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在衢州市专业技术人员继续教育学习平台的非公开内容，但下列情况除外：</p> <p>(a) 事先获得用户的明确授权；</p> <p>(b) 根据有关的法律法规要求；</p> <p>(c) 按照相关政府主管部门的要求；</p> <p>(d) 为维护社会公众的利益；</p> <p>如您拒绝提供相应信息，您将无法正常使用我们的服务。</p> <div class="form-group form-inline text-center"> <button class="btn btn-default" type="button" ng-click="closeAlertModal1(true)">同意</button> <button class="btn btn-default" type="button" ng-click="closeAlertModal1()">拒绝</button> </div> </div> </div> </div> </div> <div class="contact_us_container text-center"> <div class="block_1"> <h4>技术咨询</h4> <h4>电话</h4> <span>0571-28990788</span><br> <span>转8005</span> </div> <div class="block_2"> <h4>政策咨询</h4> <h4>电话</h4> <span>0570-3071019</span><br> <span>0570-3082312</span> <a ui-sref="articleDetail({ID: 20})">更多</a> </div> <div class="block_1"> <h4>客服QQ</h4> <a href="http://wpa.qq.com/msgrd?v=3&uin=2193688117&site=qq&menu=yes" target="_blank">有事您Q我</a> </div> \x3c!--<div class="block_1">\n      <h4>学时审核</h4>\n      <h4>电话</h4>\n      <a href="">点击查看</a>\n    </div>--\x3e </div> </div>'),
    t.put("components/tmUserRankingList.html", '\x3c!--用户排行列表（more）--\x3e <div class="userRankingList"> <div common-header title-header="userRankingData.ViewBag.TitleNav" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <ol class="breadcrumb"> <li class="currentPosition"><i class="fa fa-cog fa-lg" aria-hidden="true"></i> 您的当前位置:</li> <li><a ui-sref="main">首页</a></li> <li class="active">{{userRankingData.ViewBag.TitleNav}}</li> </ol> <div class="myTab" dw-loading="userRankingList"> <div class="tab-content"> <div class="tab-panel perlist"> <div class="title_bar"> <span class="list2">排名</span> <span class="list2">姓名</span> <span class="list2">学时</span> <span class="list2">学次</span> <span class="list2">单位名称</span> </div> <div class="list" ng-repeat="userRankingDataList in userRankingData.ListData"> <span class="list2">{{(paginationConf.currentPage-1)*paginationConf.itemsPerPage+$index+1}}</span> <span class="list2">{{userRankingDataList.UserName}}</span> <span class="list2">{{userRankingDataList.Credit}}</span> <span class="list2">{{userRankingDataList.LearnTime}}</span> <span class="list2 ellipsis">{{userRankingDataList.DepartmentName}}</span> </div> </div> </div> <div tm-pagation conf="paginationConf"></div> </div> </div> </div>'),
    t.put("components/tmcourseclassify.html", '\x3c!--@*课程分类*@--\x3e <div class="courseClassify" dw-loading="courseClassify"> <div common-header title-header="\'课程分类\'" show-more="false" link-url="\'\'"></div> <div class="tmBorder"> <div expander classify-data="courseClassify" search="searchCourse" name="\'course\'"></div> </div> </div>')
}
]);
