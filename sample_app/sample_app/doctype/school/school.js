frappe.ui.form.on("School", {
	refresh(frm) {

		frm.add_custom_button('Generate', function(){


            frm.set_value("school_name", "givt school");


            let row1 = frm.add_child("studnet_details");
            row1.student_name = "student1";
            row1.subject = 2;
            row1.mark = 909;
            frm.refresh_field("studnet_details");

            frappe.db.get_value('Subjects', row1.subject, 'subject_name', (r) => {
                if (r && r.subject_name) {
					console.log('subject_name',r.subject_name)
                   // row1.subject_display = r.subject_name;
					console.log(row1)
                    frm.refresh_field("studnet_details");
                }
            });

			let row2 = frm.add_child("studnet_details");
            row2.student_name = "student2";
            row2.subject = 3;
            row2.mark = 89;
            frm.refresh_field("studnet_details");
            frappe.db.get_value('Subjects', row2.subject, 'subject_name', (r) => {
                if (r && r.subject_name) {
					console.log('subject_name',r.subject_name)
                    row2.subject_display = r.subject_name;
						console.log(row2);
                    frm.refresh_field("studnet_details");
                }
            });



			let row3 = frm.add_child("studnet_details");
            row3.student_name = "student3";
            row3.subject = 4;
            row3.mark = 89;
            frm.refresh_field("studnet_details");

            frappe.db.get_value('Subjects', row3.subject, 'subject_name', (r) => {
                if (r && r.subject_name) {
					console.log('subject_name',r.subject_name)
                    row3.subject_display = r.subject_name;
					                    row3.dummy_display = "dummy";

					console.log(row3);
                    frm.refresh_field("studnet_details");
                }
            });


		}, );
	},
});


frappe.ui.form.on("Student", {
    subject: function(frm, cdt, cdn) {
        console.log("Subject field updated in child table");
        let row = locals[cdt][cdn];
        frm.fields_dict.studnet_details.grid.grid_rows.forEach(row => row.refresh_field('subject'));
    }
});
