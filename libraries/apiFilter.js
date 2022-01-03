class APIFilter {
  constructor(document, query) {
    this.document = document;
    this.query = query;
  }

  tutor_language() {
    const keywords = this.query.tutor_language && {
      teach_language: { $in: this.query.tutor_language },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  main_field() {
    const keywords = this.query.main_field && {
      main_field: {
        $regex: this.query.main_field,
        $options: "i",
      },
    };

    this.document = this.document.find({ ...keywords });
    return this;
  }

  level_you_teach() {
    const keywords = this.query.level && {
      level_you_teach: { $in: this.query.level },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  location() {
    const keywords = this.query.location && {
      location: {
        $regex: this.query.location,
        $options: "i",
      },
    };
    console.log(keywords);
    this.document = this.document.find({ ...keywords });
    return this;
  }
}

module.exports = APIFilter;
