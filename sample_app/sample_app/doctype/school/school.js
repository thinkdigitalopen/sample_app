// Copyright (c) 2024, app pub and contributors
// For license information, please see license.txt

frappe.ui.form.on("School", {
	refresh(frm) {

		frm.add_custom_button('Generate', function(){

				frm.doc.school_name = "givt school";


				// let entry = frm.add_child("studnet_details");
				// entry.student_name =  'reeta';
				// entry.subject = 2;
				// entry.mark = 56;
				// frm.refresh_field("studnet_details");

				frm.doc.favirote_subject = 6;
				frm.refresh_field("favirote_subject");

				frm.doc.worst_subject = 5;

				 var row = frappe.model.add_child(frm.doc, "Student", "studnet_details");
				 //frappe.model.set_value(row.doctype, 1, "student_name", 'meeta');

				frappe.model.set_value(row.doctype, row.name, 'student_name', "mutthu");
				frappe.model.set_value(row.doctype, row.name, 'subject',2);

				frappe.model.set_value(row.doctype, row.name, 'mark',909);
				 // set field "purchase_rate" of child to value 0


				frm.refresh_field("studnet_details");
					frm.fields_dict.studnet_details.grid.grid_rows[0].refresh_field('subject');

//				let s_field = frm.fields_dict['studnet_details'].grid.get_field('subject');
				// let s_field = frm.fields_dict['studnet_details'];
				// console.log('s_field',s_field);

				let s_field2 = frm.fields_dict['studnet_details'].grid;
				console.log('grid',s_field2);


				// let s_field3 = frm.fields_dict.studnet_details.grid.get_field('subject');
				// console.log('s_field3',s_field3);

				 				console.log('row', row);


				// row.student_name =  'reeta';
				// row.subject = 2;
				// row.mark = 56;
				//frm.refresh_field("studnet_details");

				//console.log(frm.fields_dict.studnet_details.grid)
				/*
			frappe.model.set_value(row.doctype, row.student_name, "student_name", 'meeta');
			frappe.model.set_value(row.doctype, row.subject, "subject", 2);
			frappe.model.set_value(row.doctype, row.mark, "mark", 67);*/



				//frm.save();
				//frm.reload_doc();
				//frappe.db.commit();

		}, );

		  frm.add_custom_button('Translate', function(){
		  frm.refresh_field("worst_subject");
			}, );


		    frm.add_custom_button('refreshrec', function(){
		 frm.refresh_field("studnet_details");

			}, );
	},
	// setup(frm){
 //        frm.grids[0].wrapper.onchange = function(evt){
 //            console.log('child table event trigger');
	// 		console.log(frm.grids[0]);
 //
 //        }
 //    },
});

frappe.ui.form.on("Student", {
	// student_name: function(frm, cdt, cdn) {
	// console.log("child table student");
	// },

	// studnet_details_add: function(frm, cdt, cdn) {
	// console.log("add - studnet_details - child table student");
	// },

	subject: function(frm, cdt, cdn) {
	console.log("suibject - edit - child table student *** ");
	frm.fields_dict.studnet_details.grid.grid_rows[0].refresh_field('subject');
		// frm.refresh_field("subject");
  //          console.log("______");
		//            var d = locals[cdt][cdn];
		// 		   console.log('d',d);
	return frm.refresh();
	},


	/*
	 onload_post_render(frm){
        frm.fields_dict.studnet_details.wrapper.on('change', evt => {
           console.log("______");
        })
    },*/
/*
	refresh(frm, cdt, cdn) {
       console.log(`Called from children ${cdt} ${cdn} (refresh)`);
	},
    onload(frm, cdt, cdn){
       console.log(`Called from children ${cdt} ${cdn} (onload)`);
    },
	onload_post_render(frm){
        $(frm.fields_dict.studnet_details.wrapper).on('change', evt => {
          console.log(`===========`);
        })
    }*/


});
