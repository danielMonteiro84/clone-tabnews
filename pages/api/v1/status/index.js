function status(request, response) {
  response.status(200).json({ chave: "testando novamente " });
}

export default status;
