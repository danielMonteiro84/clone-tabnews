function status(request, response) {
  response.status(200).json({ chave: "São status" });
}

export default status;
