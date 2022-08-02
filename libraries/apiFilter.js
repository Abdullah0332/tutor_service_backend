class APIFilter {
  constructor(document, query) {
    this.document = document;
    this.query = query;
  }

  querySearch() {
    const keywords = this.query.query && {
      main_field: {
        $regex: this.query.query,
        $options: "i",
      },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  teach_language() {
    const keywords = this.query.teach_language && {
      teach_language: { $in: this.query.teach_language },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  main_field() {
    // const keywords = this.query.main_field && {
    //   main_field: {
    //     $regex: this.query.main_field,
    //     $options: "i",
    //   },
    // };

    // this.document = this.document.find({ ...keywords });
    // return this;
    const keywords = this.query.sub_field && {
      main_field: { $in: this.query.sub_field },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  sub_field() {
    const keywords = this.query.sub_field && {
      you_teach: { $in: this.query.sub_field },
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
    this.document = this.document.find({ ...keywords });
    return this;
  }

  gender() {
    const keywords = this.query.gender && {
      gender: {
        $regex: this.query.gender,
        $options: "i",
      },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  age() {
    const keywords = this.query.age && {
      $and: [
        {
          "student_age_you_teach.from_age": {
            $lte: Number(this.query?.age),
          },
        },
        {
          "student_age_you_teach.to_age": {
            $gte: Number(this.query.age),
          },
        },
      ],
    };
    console.log(Number(this.query.age), keywords);
    this.document = this.document.find({ ...keywords });
    return this;
  }

  classLocation() {
    const keywords = this.query.classLocation && {
      teach_type: { $in: this.query.classLocation },
    };
    this.document = this.document.find({ ...keywords });
    return this;
  }

  price() {
    const keywords = this.query.priceRange &&
      this.query?.priceRange?.length > 0 && {
        "pricing.hourly_rate": {
          $gte: Number(this.query?.priceRange[0]),
          $lte: Number(this.query?.priceRange[1]),
        },
      };
    this.document = this.document.find({ ...keywords });
    return this;
  }
}

module.exports = APIFilter;
