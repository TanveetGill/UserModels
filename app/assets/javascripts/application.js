// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  var w = $(window).width();
  var h = $(window).height();
  $('#wide-square').css('width', w)
  $('#wide-square').css('height', h)

  var colors = ["#ff0000", "#800080", "#ff00ff" ,"#CCCCCC" ,"#333333","#990099", "#ffa500", "#7fffd4", "#00bfff", "#ffd700"];
  var rand = Math.floor(Math.random()*colors.length);           
  $('#wide-square').css("background-color", colors[rand]);

  $('#wide-square').click(function() {
    var four = '<div />' + '<div />' + '<div />' + '<div />'
    var colors = ["#ff0000", "#800080", "#ff00ff" ,"#CCCCCC" ,"#333333","#990099", "#ffa500", "#7fffd4", "#00bfff", "#ffd700"];
    var rand = Math.floor(Math.random()*colors.length);
    var $div = $(four).appendTo('#wide-square').attr('id', 'small-square').css("background-color", colors[rand]);

    $('#small-square').click(function() {
    var four = '<div />' + '<div />' + '<div />' + '<div />'
    var colors = ["#ff0000", "#800080", "#ff00ff" ,"#CCCCCC" ,"#333333","#990099", "#ffa500", "#7fffd4", "#00bfff", "#ffd700"];
    var rand = Math.floor(Math.random()*colors.length); 
    var $div = $(four).appendTo('#small-square').attr('id', 'smallest-square').css("background-color", colors[rand]);
    })

  })

});

