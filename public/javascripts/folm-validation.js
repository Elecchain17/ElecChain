
jQuery( "#candidates" ).validate({
    rules: {
        candidate_1: {
            require_from_group: [1, ".selectpicker"]
        },
        candidate_2: {
            require_from_group: [1, ".selectpicker"]
        },
        candidate_3: {
            require_from_group: [1, ".selectpicker"]
        },
        candidate_4: {
            require_from_group: [1, ".selectpicker"]
        },
        candidate_5: {
            require_from_group: [1, ".selectpicker"]
        }
    }
});