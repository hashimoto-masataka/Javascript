$('#tab-contents .tab[id != "tab1"]').hide();
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});