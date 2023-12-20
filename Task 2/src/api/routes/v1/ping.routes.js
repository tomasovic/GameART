import {Router} from 'express'
import {PingController} from '../../controllers/ping/ping.controller.js'

const router = Router()
const pingController = new PingController()

/**
 * @openapi
 * /api/v1/ping:
 *   get:
 *     tags:
 *       - Ping
 *     summary: Ping the server
 *     description: Sends a request to the server to get a 'pong' response.
 *     responses:
 *       201:
 *         description: Successfully received a 'pong' response from the server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: pong
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Bad request
 */

router.get('/', pingController.ping)

export default router
