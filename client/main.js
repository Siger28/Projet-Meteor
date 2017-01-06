import { Template } from 'meteor/templating';

import './main.html';




if ( Meteor.isClient )
    {
//Helpers
Template.blagues.helpers
(
    {
        all_blagues : function ()
        {
           /* return blagues.find().map
            (
                function( blague, index, cursor )
                {
                    return { ,title : blague.title, content : blague.content };
                }
            );*/
            return blagues.find();
        }
    }
);

//Events
Template.blagues.events
({
    'click #submit_blague' :function( event, template )
    {
        event.preventDefault();
        var $title = template.find("#title");
        var $content = template.find("#content");
        
        if( $title.value !== "" && $content.value !==""){
             blagues.insert( { title : $title.value , content : $content.value });
        }
    },
    'click #remove_blague' :function ( event, template )
    {
        blagues.remove(this._id);
    }
});
    }