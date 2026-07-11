import { SendsarClient } from "./client.js";
import type { SendsarInitOptions } from "./types.js";
export { SendsarClient } from "./client.js";
export { SendsarError, parseSendsarErrorBody } from "./errors.js";
export type { SendsarErrorPayload } from "./errors.js";
export { normalizeApiUrl, socketOriginFromApiUrl } from "./url.js";
export { createSessionManager, parseSessionResponse, type CreateSessionManagerOptions, type ParseSessionResult, type SessionManager, type SessionManagerState, type SessionManagerStatus, } from "./session-manager.js";
export { createRoomSubscription, type RoomSubscription, type RoomSubscriptionOptions } from "./room-subscription.js";
export { applyTypingEvent, clearUserTyping, ComposerTypingController, formatTypingLabel, inboxSubtitleForPeer, otherTypingUserIds, TYPING_DM_LABEL, TYPING_STOP_MS, type FormatTypingLabelOptions, type TypingByRoom, } from "./typing.js";
export { createTenantPresenceTracker, type TenantPresenceListener } from "./presence.js";
export { isMessageReadByPeer, mergeMessagesById, reconcileSelfSentMessage, sortRoomsByLatestActivity, textFromMessageParts, type HasMessageId, type ReconcileSelfSentOptions, } from "./messages.js";
export { FileAccessCache, collectUploadIdsFromMessageParts, collectUploadIdsFromMessages } from "./file-access-cache.js";
export { uploadFileToStorage, type UploadFileParams, type UploadFileResult } from "./uploads.js";
export type * from "./types.js";
export type { CallRecord, CallType, } from "./types.js";
export { SOCKET_EVENT, type SocketEvent } from "@sendsar/protocol";
export type { CallAcceptedEvent, CallDeclinedEvent, CallEndedEvent, CallInviteEvent, } from "@sendsar/protocol";
export { CALL_LOG_PART_TYPE, formatCallLogPreview, isMissedCallLog, parseCallLogPart, type CallLogData, type CallLogOutcome, } from "@sendsar/protocol";
/**
 * Create a client for the browser (HTML, React, Next.js, Vue, etc.).
 * Call `connect({ userId, token })` with a session JWT from **your** backend
 * (Next.js, Laravel, …) — never with `sk_*`.
 */
export declare function createSendsarClient(options: SendsarInitOptions): SendsarClient;
declare const Sendsar: {
    init: typeof createSendsarClient;
};
export default Sendsar;
//# sourceMappingURL=index.d.ts.map