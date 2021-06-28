export const errorResponse = (res, code, success, status) => {
  return res.status(code).json({
    success,
    status,
  })
}

export const successResponse = (res, code, success, status, data) => {
  return res.status(code).json({
    success,
    status,
    data,
  })
}
