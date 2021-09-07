jQuery('.First').click(function() {
jQuery('.target').hide();
jQuery('#div' +$(this).attr('target')).show();
});