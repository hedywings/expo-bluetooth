import GATTStatusCode from './GATTStatusCode';

export default {
  [GATTStatusCode.Success]: 'Operation was successful.',
  [GATTStatusCode.InvalidHandle]:
    'Attribute handle value given was not valid on this attribute server.',
  [GATTStatusCode.ReadNotPermit]: 'Attribute cannot be read.',
  [GATTStatusCode.WriteNotPermit]: 'Attribute cannot be written.',
  [GATTStatusCode.InvalidPDU]: 'The attribute PDU was invalid.',
  [GATTStatusCode.InsufficientAuthentication]:
    'The attribute requires authentication before it can be read or written.',
  [GATTStatusCode.RequestNotSupported]:
    "Attribute server doesn't support the request received from the attribute client.",
  [GATTStatusCode.InvalidOffset]: 'Offset specified was past the end of the attribute.',
  [GATTStatusCode.InsufficientAuthorization]:
    'The attribute requires an authorization before it can be read or written.',
  [GATTStatusCode.PrepareQueueFull]: 'Too many prepare writes have been queued.',
  [GATTStatusCode.NotFound]: 'No attribute found within the given attribute handle range.',
  [GATTStatusCode.NotLong]:
    'Attribute cannot be read or written using the Read Blob Request or Prepare Write Request.',
  [GATTStatusCode.InsufficientKeySize]:
    'The Encryption Key Size used for encrypting this link is insufficient.',
  [GATTStatusCode.InvalidAttrLength]: 'The attribute value length is invalid for the operation.',
  [GATTStatusCode.ErrorUnlikely]:
    'The attribute request that was requested has encountered an error that was very unlikely, and therefore could not be completed as requested.',
  [GATTStatusCode.InsufficientEncryption]:
    'The attribute requires encryption before it can be read or written.',
  [GATTStatusCode.UnsupportGRPType]:
    'The attribute type is not a supported grouping attribute as defined by a higher layer specification.',
  [GATTStatusCode.InsufficientResource]: 'Insufficient Resources to complete the request.',
  [GATTStatusCode.NoResources]: 'The attribute value is invalid for the operation.',
  [GATTStatusCode.IllegalParameter]: 'Illegal parameter was used in a GATT operation.',
  [GATTStatusCode.InternalError]: 'Internal error occurred in the Android BLE API.',
  [GATTStatusCode.WrongState]: 'An illegal state is being used.',
  [GATTStatusCode.DatabaseFull]: 'Insufficient internal memory for BLE buffer cache.',
  [GATTStatusCode.Busy]: 'The maximum number of operations has been exceeded.',
  [GATTStatusCode.Error]: 'An unknown error has occurred.',
  [GATTStatusCode.CommandStarted]: 'Command is already queued up in GATT.',
  [GATTStatusCode.Pending]: 'Operation is pending.',
  [GATTStatusCode.AuthorizationFailed]:
    'Authorization failed before performing read or write operation.',
  [GATTStatusCode.More]: 'More cache entries were loaded then expected.',
  [GATTStatusCode.InvalidConfiguration]: 'Invalid configuration.',
  [GATTStatusCode.ServiceStarted]: 'The GATT service already started.',
  [GATTStatusCode.EncrypedNoMITM]:
    'GATT link is encrypted but still vulnerable to man in the middle attacks.',
  [GATTStatusCode.NotEncrypted]: 'Link to GATT is not encrypted.',
  [GATTStatusCode.Congested]: 'Attribute command could not be processed while the channel is full.',
  [GATTStatusCode.CCC_CFG_Error]:
    'Client Characteristic Configuration Descriptor Improperly Configured.',
  [GATTStatusCode.PRCInProgress]: 'Procedure Already in progress.',
  [GATTStatusCode.OutOfRange]: 'Attribute value out of range.',
};
