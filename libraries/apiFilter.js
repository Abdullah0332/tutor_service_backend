class APIFilter {
  constructor(document, query) {
    this.document = document;
    this.query = query;
  }

  tutor_language() {
    const keywords = this.query.tutor_language && {
      teach_language: {
        $regex: this.query.tutor_language,
        $options: "i",
      },
    };

    this.document = this.document.find({ ...keywords });
    return this;
  }

  main_field() {
    const keywords = this.query.main_field && {
      teach_language: {
        $regex: this.query.main_field,
        $options: "i",
      },
    };

    this.document = this.document.find({ ...keywords });
    return this;
  }

  tutor_language() {
    const keywords = this.query.tutor_language && {
      teach_language: {
        $regex: this.query.tutor_language,
        $options: "i",
      },
    };

    this.document = this.document.find({ ...keywords });
    return this;
  }
}

module.exports = APIFilter;
