/*
(function ($) { 
    $.fn.hitTest = function (x, y) { 
        return (x > this.offset().left && x < this.offset().left + this.width()) && (y > this.offset().top && y < this.offset().top + this.height()); 
    }; 
})(jQuery);
*/
(function ($) { 
    $.fn.hitTest = function (obj) { 
        
        return (obj.offset().left+obj.width() > this.offset().left && obj.offset().left < this.offset().left + this.width()) && (obj.offset().top+obj.height() > this.offset().top && obj.offset().top < this.offset().top + this.height()); 
    }; 
})(jQuery);