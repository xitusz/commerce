db.produtos.updateMany({ valoresNutricionais: { $elemMatch: 
  { $and: [{ tipo: "sódio" }, { percentual: { $gt: 20 } }, { percentual: { $lt: 40 } }] } } },
  { $addToSet: { tags: "contém sódio" } });

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
