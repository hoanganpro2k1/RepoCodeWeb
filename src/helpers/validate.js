import * as Yup from "yup";
export const LOGIN_FORM_SCHEME = Yup.object().shape({
	email: Yup.string()
		.matches(
			/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm,
			"Email is not valid"
		)
		.required("Require email"),
	password: Yup.string()
		.min(6, "Password up to 6 characters")
		.required("Require password")
});
export const REGISTER_FORM_SCHEME = Yup.object().shape({
	fullname: Yup.string()
		.matches(
			/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\d]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\d]*)*$/,
			"Full name wrong format"
		)
		.min(6, "Full name must be more than 6 characters")
		.max(100, "Full name must be less than 100 characters")
		.required("Require full name"),
	email: Yup.string()
		.matches(
			/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm,
			"Email is not valid"
		)
		.required("Require email"),
	password: Yup.string()
		.min(6, "Password up to 6 characters")
		.required("Require password"),
	passwordConfirm: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	)
});
export const UPDATE_INFO_SCHEMA = Yup.object().shape({
	avatar: Yup.string().required("Require avatar"),
	fullname: Yup.string()
		.matches(
			/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\d]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\d]*)*$/,
			"Full name wrong format"
		)
		.min(6, "Full name must be more than 6 characters")
		.max(100, "Full name must be less than 100 characters")
		.required("Require full name"),
	gender: Yup.string().required("Require gender"),
	birthday: Yup.date()
		.test("birthday", "Should be greater than 18", function (value, ctx) {
			const birthday = new Date(value);
			const validDate = new Date();
			const valid = validDate.getFullYear() - birthday.getFullYear() >= 18;
			return !valid ? ctx.createError() : valid;
		})
		.required("Require birthday"),
	address: Yup.string().min(10).max(200).required("Require address")
});
