window.addEventListener("DOMContentLoaded", () => {
	if (!base.Database) {
		location.href = "/Error/403.10/";
	} else {
		let querys = location.querySort();

		if (!querys.TID) {
			location.href = "/Error/406/"
		} else {
			base.Database.get(base.Database.ONCE, "threads/" + querys.TID + "/data", (res) => {
				console.info(res);

				for (let i = 0; i < res.length; i++) {
					
				}
			});
		}



		let doc = parent.document;

		DOM('@A[Data-TagID="ProfilePhoto--Btn"]').forEach((btn) => {
			btn.addEventListener("click", () => {
				doc.querySelector("#Dialogs_Profile_InfoViewer").showModal();
			});
		});
	}
});