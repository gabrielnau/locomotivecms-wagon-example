$(document).ready(function(){

  $('.js-toggle').click(function(){
    var $parent = $(this).attr("data-parent");
    var $target = $(this).attr("data-target");
    $(this).closest($parent).find($target).toggleClass("is-expanded")
    return false;
  });

});