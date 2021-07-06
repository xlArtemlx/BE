'use strict'

const response = ('../../response')

exports.index = (req,res) => {
    response.status('Hellou REST API',res)
}