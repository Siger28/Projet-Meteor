FlowRouter.route('/blagues/:_id', {
  name: 'Blagues.show',
  action() {
    BlazeLayout.render('App_body', {main: 'Blagues_show_page'});
  }
});