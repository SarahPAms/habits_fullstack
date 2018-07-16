Category.destroy_all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create!([
                     {title: "Finance & Career", score: 5},
                     {title: "Fitness", score:5},
                     {title: "Relationships", score: 5},
                     {title: "Food", score:5},
                     {title: "Self Care & Sleep", score: 5},
                     {title: "Spirituality & Creativity", score:5},
                 ])