class APIFilter {
  constructor(document, query) {
    this.document = document;
    this.query = query;
  }

  teach_language() {
    const keywords = this.query.teach_language && {
      teach_language: { $in: this.query.teach_language },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  main_field() {
    console.log(this.query)
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
    const keywords = this.query.classLocation && {
      location: {
        $regex: this.query.classLocation,
        $options: "i",
      },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  age() {
    const keywords = this.query.age && {

      $and: [{
        "student_age_you_teach.from_age": {
          $gte: this.query.age
        }
      }, {
        "student_age_you_teach.to_age": {
          $lte: this.query.age
        }
      }]

    }
    this.document = this.document.find({ ...keywords });
    return this;
  }
}

module.exports = APIFilter;
