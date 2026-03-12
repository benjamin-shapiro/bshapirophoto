import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import museumStyles from "../styles/Museum.module.css";
import { galleryCollections } from "../lib/galleryData";

const ROOM_LENGTH = 1360;
const ROOM_GAP = 180;
const ROOM_WIDTH = 980;
const ROOM_HALF_WIDTH = ROOM_WIDTH / 2;
const ROOM_HEIGHT = 430;
const FLOOR_Y = 225;
const CEILING_Y = -195;
const START_Z = 80;
const MAX_X = 280;
const FRAME_INSET = 24;
const FRAME_SPAN_START = 240;
const FRAME_SPAN_END = ROOM_LENGTH - 250;
const CAMERA_OFFSET_Y = 70;
const MOVE_SPEED = 11.5;
const STRAFE_SPEED = 9.5;
const TURN_SPEED = 1.7;

const roomThemes = {
  astro: {
    label: "Space Wing",
    wall:
      "radial-gradient(circle at 20% 18%, rgba(95, 148, 255, 0.16), transparent 28%), linear-gradient(180deg, rgba(11, 19, 35, 0.98), rgba(2, 7, 16, 0.98))",
    floor:
      "radial-gradient(circle at 50% 50%, rgba(73, 132, 245, 0.12), transparent 34%), linear-gradient(180deg, rgba(5, 10, 18, 0.96), rgba(2, 4, 8, 0.98))",
    ceiling:
      "radial-gradient(circle at 35% 28%, rgba(124, 184, 255, 0.15), transparent 24%), linear-gradient(180deg, rgba(9, 15, 28, 0.96), rgba(3, 6, 12, 0.98))",
    back:
      "radial-gradient(circle at 50% 42%, rgba(125, 173, 255, 0.14), transparent 26%), linear-gradient(180deg, rgba(8, 16, 30, 0.95), rgba(4, 8, 14, 0.98))",
    beam:
      "linear-gradient(180deg, rgba(134, 177, 255, 0.18), rgba(134, 177, 255, 0))",
  },
  wildlife: {
    label: "Glasshouse Wing",
    wall:
      "linear-gradient(180deg, rgba(20, 36, 25, 0.98), rgba(6, 13, 8, 0.98)), linear-gradient(120deg, transparent 0 36%, rgba(102, 145, 104, 0.12) 36% 44%, transparent 44%)",
    floor:
      "radial-gradient(circle at 50% 50%, rgba(90, 137, 87, 0.12), transparent 34%), linear-gradient(180deg, rgba(9, 17, 11, 0.96), rgba(3, 8, 4, 0.98))",
    ceiling:
      "linear-gradient(180deg, rgba(17, 28, 19, 0.96), rgba(5, 10, 7, 0.98))",
    back:
      "radial-gradient(circle at 50% 42%, rgba(102, 160, 97, 0.12), transparent 26%), linear-gradient(180deg, rgba(12, 22, 13, 0.96), rgba(6, 11, 7, 0.98))",
    beam:
      "linear-gradient(180deg, rgba(136, 198, 130, 0.16), rgba(136, 198, 130, 0))",
  },
  travel: {
    label: "Transit Wing",
    wall:
      "linear-gradient(180deg, rgba(36, 26, 19, 0.98), rgba(13, 9, 7, 0.98)), linear-gradient(90deg, transparent 0 18%, rgba(191, 141, 82, 0.08) 18% 19%, transparent 19% 81%, rgba(191, 141, 82, 0.08) 81% 82%, transparent 82%)",
    floor:
      "radial-gradient(circle at 50% 50%, rgba(208, 148, 87, 0.1), transparent 35%), linear-gradient(180deg, rgba(18, 13, 10, 0.96), rgba(7, 5, 4, 0.98))",
    ceiling:
      "linear-gradient(180deg, rgba(31, 22, 16, 0.96), rgba(9, 6, 5, 0.98))",
    back:
      "radial-gradient(circle at 50% 42%, rgba(208, 154, 99, 0.12), transparent 26%), linear-gradient(180deg, rgba(26, 18, 13, 0.96), rgba(8, 6, 4, 0.98))",
    beam:
      "linear-gradient(180deg, rgba(229, 182, 121, 0.18), rgba(229, 182, 121, 0))",
  },
};

const museumRooms = galleryCollections.map((collection, index) => {
  const startZ = index * (ROOM_LENGTH + ROOM_GAP);
  const endZ = startZ + ROOM_LENGTH;
  return {
    ...collection,
    startZ,
    endZ,
    centerZ: startZ + ROOM_LENGTH / 2,
    theme: roomThemes[collection.slug],
  };
});

const museumSurfaces = museumRooms.flatMap((room, index) => {
  const surfaces = [
    {
      key: `${room.slug}-floor`,
      type: "floor",
      width: ROOM_WIDTH,
      height: ROOM_LENGTH,
      transform: planeTransform(0, FLOOR_Y, room.centerZ, 90, 0),
      background: room.theme.floor,
    },
    {
      key: `${room.slug}-ceiling`,
      type: "ceiling",
      width: ROOM_WIDTH,
      height: ROOM_LENGTH,
      transform: planeTransform(0, CEILING_Y, room.centerZ, -90, 0),
      background: room.theme.ceiling,
    },
    {
      key: `${room.slug}-left-wall`,
      type: "wall",
      width: ROOM_LENGTH,
      height: ROOM_HEIGHT,
      transform: planeTransform(-ROOM_HALF_WIDTH, 15, room.centerZ, 0, 90),
      background: room.theme.wall,
    },
    {
      key: `${room.slug}-right-wall`,
      type: "wall",
      width: ROOM_LENGTH,
      height: ROOM_HEIGHT,
      transform: planeTransform(ROOM_HALF_WIDTH, 15, room.centerZ, 0, -90),
      background: room.theme.wall,
    },
    {
      key: `${room.slug}-back-wall`,
      type: "backWall",
      width: ROOM_WIDTH,
      height: ROOM_HEIGHT,
      transform: planeTransform(0, 15, room.endZ, 0, 180),
      background: room.theme.back,
    },
    {
      key: `${room.slug}-left-beam`,
      type: "beam",
      width: ROOM_LENGTH - 180,
      height: 110,
      transform: planeTransform(-ROOM_HALF_WIDTH + 12, -120, room.centerZ, 0, 90),
      background: room.theme.beam,
    },
    {
      key: `${room.slug}-right-beam`,
      type: "beam",
      width: ROOM_LENGTH - 180,
      height: 110,
      transform: planeTransform(ROOM_HALF_WIDTH - 12, -120, room.centerZ, 0, -90),
      background: room.theme.beam,
    },
  ];

  if (index < museumRooms.length - 1) {
    const portalZ = room.endZ + ROOM_GAP / 2;
    surfaces.push(
      {
        key: `${room.slug}-portal-left`,
        type: "portal",
        width: 28,
        height: ROOM_HEIGHT - 46,
        transform: planeTransform(-330, 15, portalZ, 0, 180),
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04))",
      },
      {
        key: `${room.slug}-portal-right`,
        type: "portal",
        width: 28,
        height: ROOM_HEIGHT - 46,
        transform: planeTransform(330, 15, portalZ, 0, 180),
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04))",
      },
      {
        key: `${room.slug}-portal-cap`,
        type: "portalCap",
        width: 690,
        height: 28,
        transform: planeTransform(0, -140, portalZ, 0, 180),
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.08))",
      }
    );
  }

  return surfaces;
});

const museumMarkers = museumRooms.map((room) => ({
  key: `${room.slug}-marker`,
  href: room.href,
  title: room.title,
  subtitle: room.theme.label,
  transform: planeTransform(0, -78, room.startZ + 160, 0, 0),
  slug: room.slug,
}));

const museumFrames = museumRooms.flatMap((room) => buildFramesForRoom(room));

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function planeTransform(x, y, z, rotateX, rotateY) {
  return `translate3d(${x}px, ${y}px, ${-z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function linePositions(count, start, end) {
  if (count <= 1) {
    return [(start + end) / 2];
  }

  const step = (end - start) / (count - 1);
  return Array.from({ length: count }, (_, index) => start + step * index);
}

function frameSize(photo) {
  const aspect = photo.width / photo.height;

  if (aspect >= 1) {
    const width = aspect > 1.85 ? 230 : 205;
    return {
      width,
      height: Math.round(width / aspect),
    };
  }

  const height = 210;
  return {
    width: Math.round(height * aspect),
    height,
  };
}

function buildFramesForRoom(room) {
  const photoCount = room.photos.length;
  const endCount = photoCount > 10 ? 3 : 2;
  const leftCount = Math.ceil((photoCount - endCount) / 2);
  const rightCount = photoCount - endCount - leftCount;
  const leftPositions = linePositions(leftCount, FRAME_SPAN_START, FRAME_SPAN_END);
  const rightPositions = linePositions(rightCount, FRAME_SPAN_START + 90, FRAME_SPAN_END - 70);
  const endPositions = linePositions(endCount, -260, 260);
  const verticalOffsets = [-12, 16, -5, 22, -18, 8, 0];
  const frames = [];

  room.photos.slice(0, leftCount).forEach((photo, index) => {
    const size = frameSize(photo);
    frames.push({
      key: `${room.slug}-left-${index}`,
      src: photo.src,
      label: `${room.title} ${index + 1}`,
      slug: room.slug,
      width: size.width,
      height: size.height,
      transform: planeTransform(
        -ROOM_HALF_WIDTH + FRAME_INSET,
        verticalOffsets[index % verticalOffsets.length],
        leftPositions[index],
        0,
        90
      ),
    });
  });

  room.photos.slice(leftCount, leftCount + rightCount).forEach((photo, index) => {
    const size = frameSize(photo);
    frames.push({
      key: `${room.slug}-right-${index}`,
      src: photo.src,
      label: `${room.title} ${leftCount + index + 1}`,
      slug: room.slug,
      width: size.width,
      height: size.height,
      transform: planeTransform(
        ROOM_HALF_WIDTH - FRAME_INSET,
        verticalOffsets[(index + 2) % verticalOffsets.length],
        rightPositions[index],
        0,
        -90
      ),
    });
  });

  room.photos.slice(leftCount + rightCount).forEach((photo, index) => {
    const size = frameSize(photo);
    frames.push({
      key: `${room.slug}-end-${index}`,
      src: photo.src,
      label: `${room.title} ${leftCount + rightCount + index + 1}`,
      slug: room.slug,
      width: size.width,
      height: size.height,
      transform: planeTransform(
        endPositions[index],
        verticalOffsets[(index + 4) % verticalOffsets.length],
        room.endZ - 14,
        0,
        180
      ),
    });
  });

  return frames;
}

function roomForPosition(z) {
  return (
    museumRooms.find(
      (room) => z >= room.startZ - ROOM_GAP / 2 && z <= room.endZ + ROOM_GAP / 2
    ) || museumRooms[0]
  );
}

export default function MuseumExperience() {
  const [camera, setCamera] = useState({
    x: 0,
    z: START_Z,
    rotation: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const cameraRef = useRef(camera);
  const controlsRef = useRef({});
  const dragRef = useRef({ active: false, lastX: 0 });

  useEffect(() => {
    cameraRef.current = camera;
  }, [camera]);

  useEffect(() => {
    function handleKeyDown(event) {
      const targetTag = event.target && event.target.tagName;
      if (targetTag === "INPUT" || targetTag === "TEXTAREA") {
        return;
      }

      const control = controlForKey(event.code);
      if (!control) {
        return;
      }

      controlsRef.current[control] = true;
      event.preventDefault();
    }

    function handleKeyUp(event) {
      const control = controlForKey(event.code);
      if (!control) {
        return;
      }

      controlsRef.current[control] = false;
      event.preventDefault();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    let previousTick = performance.now();

    function tick(now) {
      const delta = Math.min((now - previousTick) / 16.6667, 1.8);
      previousTick = now;
      const controls = controlsRef.current;
      const current = cameraRef.current;
      const next = {
        x: current.x,
        z: current.z,
        rotation: current.rotation,
      };

      if (controls.turnLeft) {
        next.rotation -= TURN_SPEED * delta;
      }
      if (controls.turnRight) {
        next.rotation += TURN_SPEED * delta;
      }

      const radians = (next.rotation * Math.PI) / 180;
      let forward = 0;
      let strafe = 0;

      if (controls.forward) {
        forward += MOVE_SPEED * delta;
      }
      if (controls.backward) {
        forward -= MOVE_SPEED * 0.9 * delta;
      }
      if (controls.left) {
        strafe -= STRAFE_SPEED * delta;
      }
      if (controls.right) {
        strafe += STRAFE_SPEED * delta;
      }

      if (forward !== 0 || strafe !== 0 || next.rotation !== current.rotation) {
        next.x += Math.sin(radians) * forward + Math.cos(radians) * strafe;
        next.z += Math.cos(radians) * forward - Math.sin(radians) * strafe;
        next.x = clamp(next.x, -MAX_X, MAX_X);
        next.z = clamp(next.z, START_Z, museumRooms[museumRooms.length - 1].endZ - 120);
        cameraRef.current = next;
        setCamera(next);
      }

      animationFrame = window.requestAnimationFrame(tick);
    }

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  function controlForKey(code) {
    switch (code) {
      case "KeyW":
      case "ArrowUp":
        return "forward";
      case "KeyS":
      case "ArrowDown":
        return "backward";
      case "KeyA":
        return "left";
      case "KeyD":
        return "right";
      case "ArrowLeft":
      case "KeyQ":
        return "turnLeft";
      case "ArrowRight":
      case "KeyE":
        return "turnRight";
      default:
        return null;
    }
  }

  function updateCamera(nextCamera) {
    cameraRef.current = nextCamera;
    setCamera(nextCamera);
  }

  function jumpToRoom(room) {
    updateCamera({
      x: 0,
      z: room.startZ + 140,
      rotation: 0,
    });
  }

  function changeRotation(delta) {
    const current = cameraRef.current;
    updateCamera({
      ...current,
      rotation: current.rotation + delta,
    });
  }

  function handlePointerDown(event) {
    if (event.target.closest("a, button")) {
      return;
    }

    dragRef.current.active = true;
    dragRef.current.lastX = event.clientX;
    setIsDragging(true);
    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  }

  function handlePointerMove(event) {
    if (!dragRef.current.active) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.lastX;
    dragRef.current.lastX = event.clientX;
    changeRotation(deltaX * 0.16);
  }

  function handlePointerUp(event) {
    dragRef.current.active = false;
    setIsDragging(false);
    if (event.currentTarget.releasePointerCapture) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function setControlState(control, value) {
    controlsRef.current[control] = value;
  }

  const activeRoom = roomForPosition(camera.z);
  const viewportClass = `${museumStyles.viewport} ${museumStyles[`active${capitalize(activeRoom.slug)}`]}`;

  return (
    <section className={museumStyles.shell}>
      <div
        className={viewportClass}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        data-dragging={isDragging}
      >
        <div className={museumStyles.viewportVignette} />
        <div className={museumStyles.scene}>
          <div className={museumStyles.origin}>
            <div
              className={museumStyles.world}
              style={{
                transform: `translate3d(${-camera.x}px, ${CAMERA_OFFSET_Y}px, ${camera.z}px) rotateY(${camera.rotation}deg)`,
              }}
            >
              {museumSurfaces.map((surface) => (
                <div
                  key={surface.key}
                  className={`${museumStyles.plane} ${museumStyles[surface.type]}`}
                  style={{
                    width: `${surface.width}px`,
                    height: `${surface.height}px`,
                    transform: surface.transform,
                    background: surface.background,
                  }}
                />
              ))}

              {museumMarkers.map((marker) => (
                <Link key={marker.key} href={marker.href}>
                  <a
                    className={`${museumStyles.roomMarker} ${museumStyles[`marker${capitalize(marker.slug)}`]}`}
                    style={{ transform: marker.transform }}
                  >
                    <span className={museumStyles.roomMarkerTitle}>{marker.title}</span>
                    <span className={museumStyles.roomMarkerSubtitle}>{marker.subtitle}</span>
                  </a>
                </Link>
              ))}

              {museumFrames.map((frame) => (
                <a
                  key={frame.key}
                  className={museumStyles.frame}
                  href={frame.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: `${frame.width + 34}px`,
                    height: `${frame.height + 34}px`,
                    transform: frame.transform,
                  }}
                >
                  <span className={museumStyles.frameInner}>
                    <img
                      className={museumStyles.frameImage}
                      src={frame.src}
                      alt={frame.label}
                      loading="lazy"
                    />
                  </span>
                  <span className={museumStyles.frameMeta}>{frame.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={museumStyles.hud}>
          <div>
            <p className={museumStyles.hudLabel}>Virtual Gallery</p>
            <h2 className={museumStyles.hudTitle}>{activeRoom.title}</h2>
          </div>
          <Link href={activeRoom.href}>
            <a className={museumStyles.hudLink}>Open Collection</a>
          </Link>
        </div>

        <div className={museumStyles.roomNav}>
          {museumRooms.map((room) => (
            <button
              key={room.slug}
              className={`${museumStyles.roomJump} ${
                activeRoom.slug === room.slug ? museumStyles.roomJumpActive : ""
              }`}
              onClick={() => jumpToRoom(room)}
              type="button"
            >
              {room.title}
            </button>
          ))}
        </div>

        <div className={museumStyles.instructions}>
          <span>Drag to look</span>
          <span>W A S D to move</span>
          <span>Arrow keys or Q / E to turn</span>
        </div>

        <div className={museumStyles.controls}>
          <button
            className={museumStyles.controlButton}
            type="button"
            onPointerDown={() => setControlState("turnLeft", true)}
            onPointerUp={() => setControlState("turnLeft", false)}
            onPointerLeave={() => setControlState("turnLeft", false)}
          >
            Turn Left
          </button>
          <button
            className={museumStyles.controlButton}
            type="button"
            onPointerDown={() => setControlState("forward", true)}
            onPointerUp={() => setControlState("forward", false)}
            onPointerLeave={() => setControlState("forward", false)}
          >
            Forward
          </button>
          <button
            className={museumStyles.controlButton}
            type="button"
            onPointerDown={() => setControlState("turnRight", true)}
            onPointerUp={() => setControlState("turnRight", false)}
            onPointerLeave={() => setControlState("turnRight", false)}
          >
            Turn Right
          </button>
          <button
            className={museumStyles.controlButton}
            type="button"
            onPointerDown={() => setControlState("left", true)}
            onPointerUp={() => setControlState("left", false)}
            onPointerLeave={() => setControlState("left", false)}
          >
            Left
          </button>
          <button
            className={museumStyles.controlButton}
            type="button"
            onPointerDown={() => setControlState("backward", true)}
            onPointerUp={() => setControlState("backward", false)}
            onPointerLeave={() => setControlState("backward", false)}
          >
            Back
          </button>
          <button
            className={museumStyles.controlButton}
            type="button"
            onPointerDown={() => setControlState("right", true)}
            onPointerUp={() => setControlState("right", false)}
            onPointerLeave={() => setControlState("right", false)}
          >
            Right
          </button>
        </div>
      </div>
    </section>
  );
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
