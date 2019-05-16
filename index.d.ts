import "./include/Conf";
import "./include/debug";
import "./include/global";
import "./include/love";
import "./include/math";
import "./include/modules/audio/enums/DistanceModel";
import "./include/modules/audio/enums/EffectType";
import "./include/modules/audio/enums/EffectWaveform";
import "./include/modules/audio/enums/FilterType";
import "./include/modules/audio/enums/SourceType";
import "./include/modules/audio/enums/TimeUnit";
import "./include/modules/audio/love.audio";
import "./include/modules/audio/structs/EffectSettings";
import "./include/modules/audio/structs/FilterSettings";
import "./include/modules/audio/types/RecordingDevice";
import "./include/modules/audio/types/Source";
import "./include/modules/data/enums/ContainerType";
import "./include/modules/data/enums/EncodeFormat";
import "./include/modules/data/enums/HashFunction";
import "./include/modules/data/love.data";
import "./include/modules/data/types/ByteData";
import "./include/modules/data/types/Data";
import "./include/modules/event/enums/Event";
import "./include/modules/event/love.event";
import "./include/modules/filesystem/enums/BufferMode";
import "./include/modules/filesystem/enums/FileDecoder";
import "./include/modules/filesystem/enums/FileMode";
import "./include/modules/filesystem/enums/FileType";
import "./include/modules/filesystem/love.filesystem";
import "./include/modules/filesystem/structs/FileInfo";
import "./include/modules/filesystem/types/File";
import "./include/modules/filesystem/types/FileData";
import "./include/modules/font/enums/HintingMode";
import "./include/modules/font/love.font";
import "./include/modules/font/types/BMFontRasterizer";
import "./include/modules/font/types/Font";
import "./include/modules/font/types/GlyphData";
import "./include/modules/font/types/Rasterizer";
import "./include/modules/graphics/enums/AlignMode";
import "./include/modules/graphics/enums/ArcType";
import "./include/modules/graphics/enums/AreaSpreadDistribution";
import "./include/modules/graphics/enums/BlendAlphaMode";
import "./include/modules/graphics/enums/BlendMode";
import "./include/modules/graphics/enums/CanvasMipmapMode";
import "./include/modules/graphics/enums/CompareMode";
import "./include/modules/graphics/enums/CullMode";
import "./include/modules/graphics/enums/DrawMode";
import "./include/modules/graphics/enums/FilterMode";
import "./include/modules/graphics/enums/GraphicsFeature";
import "./include/modules/graphics/enums/GraphicsLimit";
import "./include/modules/graphics/enums/LineJoin";
import "./include/modules/graphics/enums/LineStyle";
import "./include/modules/graphics/enums/MatrixLayout";
import "./include/modules/graphics/enums/MeshDrawMode";
import "./include/modules/graphics/enums/ParticleInsertMode";
import "./include/modules/graphics/enums/ShaderVariableType";
import "./include/modules/graphics/enums/SpriteBatchUsage";
import "./include/modules/graphics/enums/StackType";
import "./include/modules/graphics/enums/StencilAction";
import "./include/modules/graphics/enums/TextureType";
import "./include/modules/graphics/enums/VertexWinding";
import "./include/modules/graphics/enums/WrapMode";
import "./include/modules/graphics/love.graphics";
import "./include/modules/graphics/structs/ArrayImageSettings";
import "./include/modules/graphics/structs/DisplayFlags";
import "./include/modules/graphics/structs/ImageInformation";
import "./include/modules/graphics/structs/ImageSettings";
import "./include/modules/graphics/structs/MeshVertexDataType";
import "./include/modules/graphics/structs/Stats";
import "./include/modules/graphics/structs/VertexAttribute";
import "./include/modules/graphics/structs/VertexInformation";
import "./include/modules/graphics/types/Canvas";
import "./include/modules/graphics/types/Drawable";
import "./include/modules/graphics/types/Image";
import "./include/modules/graphics/types/Mesh";
import "./include/modules/graphics/types/ParticleSystem";
import "./include/modules/graphics/types/Quad";
import "./include/modules/graphics/types/Shader";
import "./include/modules/graphics/types/SpriteBatch";
import "./include/modules/graphics/types/Text";
import "./include/modules/graphics/types/Texture";
import "./include/modules/graphics/types/Video";
import "./include/modules/image/enums/CanvasFormat";
import "./include/modules/image/enums/CompressedImageFormat";
import "./include/modules/image/enums/ImageFormat";
import "./include/modules/image/enums/PixelFormat";
import "./include/modules/image/love.image";
import "./include/modules/image/types/CompressedImageData";
import "./include/modules/image/types/ImageData";
import "./include/modules/joystick/enums/GamepadAxis";
import "./include/modules/joystick/enums/GamepadButton";
import "./include/modules/joystick/enums/JoystickHat";
import "./include/modules/joystick/enums/JoystickInputType";
import "./include/modules/joystick/love.joystick";
import "./include/modules/joystick/types/Joystick";
import "./include/modules/keyboard/enums/KeyConstant";
import "./include/modules/keyboard/enums/ScanCode";
import "./include/modules/keyboard/love.keyboard";
import "./include/modules/math/enums/CompressedDataFormat";
import "./include/modules/math/love.math";
import "./include/modules/math/types/BezierCurve";
import "./include/modules/math/types/CompressedData";
import "./include/modules/math/types/RandomGenerator";
import "./include/modules/math/types/Transform";
import "./include/modules/mouse/enums/CursorType";
import "./include/modules/mouse/love.mouse";
import "./include/modules/mouse/types/Cursor";
import "./include/modules/physics/enums/BodyType";
import "./include/modules/physics/enums/JointType";
import "./include/modules/physics/enums/ShapeType";
import "./include/modules/physics/love.physics";
import "./include/modules/physics/types/Body";
import "./include/modules/physics/types/ChainShape";
import "./include/modules/physics/types/CircleShape";
import "./include/modules/physics/types/Contact";
import "./include/modules/physics/types/DistanceJoint";
import "./include/modules/physics/types/EdgeShape";
import "./include/modules/physics/types/Fixture";
import "./include/modules/physics/types/FrictionJoint";
import "./include/modules/physics/types/GearJoint";
import "./include/modules/physics/types/Joint";
import "./include/modules/physics/types/MotorJoint";
import "./include/modules/physics/types/MouseJoint";
import "./include/modules/physics/types/PolygonShape";
import "./include/modules/physics/types/PrismaticJoint";
import "./include/modules/physics/types/PulleyJoint";
import "./include/modules/physics/types/RevoluteJoint";
import "./include/modules/physics/types/RopeJoint";
import "./include/modules/physics/types/Shape";
import "./include/modules/physics/types/WeldJoint";
import "./include/modules/physics/types/WheelJoint";
import "./include/modules/physics/types/World";
import "./include/modules/sound/love.sound";
import "./include/modules/sound/types/Decoder";
import "./include/modules/sound/types/SoundData";
import "./include/modules/system/enums/PowerState";
import "./include/modules/system/love.system";
import "./include/modules/thread/love.thread";
import "./include/modules/thread/types/Channel";
import "./include/modules/thread/types/Thread";
import "./include/modules/timer/love.timer";
import "./include/modules/touch/love.touch";
import "./include/modules/video/love.video";
import "./include/modules/video/types/VideoStream";
import "./include/modules/window/enums/FullscreenType";
import "./include/modules/window/enums/MessageBoxType";
import "./include/modules/window/structs/ButtonList";
import "./include/modules/window/love.window";
import "./include/LoveObject";
import "./include/os";
import "./include/other";
import "./include/utf8";
